import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";
import { eventTimeCorrection } from "../src/data/event-time-corrections.mjs";

const script = fileURLToPath(new URL("./fetch-events.mjs", import.meta.url));
const start = "2026-11-07T16:00:00.000Z";
const fields = {
  Title: "Better Shoulders",
  Status: "Show",
  Section: "Upcoming Event",
  "Card Style": "Featured",
  "Start Date & Time": start,
  "End Date & Time": start,
  Description: "Keep this description, audience and presenter unchanged.",
  "Booking Link": "https://4pointshealth.janeapp.com/locations/4-points-health-and-wellness/book#/staff_member/117/treatment/805",
  "CTA Label": "Book Your Spot",
  "Badge Text": "Health Workshop",
  "Display Order": 2,
};

test("correction is confined to the identified November 7 workshop", () => {
  const corrected = eventTimeCorrection("better-shoulders-dF5IhK", start);
  assert.equal(corrected.startIso, new Date("2026-11-07T09:00:00-06:00").toISOString());
  assert.equal(corrected.endIso, new Date("2026-11-07T12:00:00-06:00").toISOString());
  assert.equal(Date.parse(corrected.endIso) - Date.parse(corrected.startIso), 3 * 60 * 60 * 1000);
  assert.match(corrected.dateLine, /9 a\.m.–noon Edmonton/);
  assert.equal(eventTimeCorrection("other-event-dF5IhK", start), null);
  assert.equal(eventTimeCorrection("better-shoulders-OTHER1", start), null);
  assert.equal(eventTimeCorrection("better-shoulders-dF5IhK", "2026-11-14T16:00:00.000Z"), null);
  assert.equal(eventTimeCorrection("better-shoulders-dF5IhK", null), null);
});

test("Airtable generation preserves event data and writes a three-hour Google/Apple/Outlook interval", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "4points-calendar-test-"));
  try {
    const records = [
      { id: "recTestOnlydF5IhK", fields },
      { id: "recOtherOTHER1", fields: { ...fields, Title: "Other Workshop", "End Date & Time": "2026-11-07T17:00:00.000Z" } },
      { id: "recDraftDRAFT1", fields: { ...fields, Status: "Draft" } },
    ];
    const preload = path.join(root, "mock-airtable.mjs");
    await writeFile(preload, `globalThis.fetch = async (url) => {
      if (!String(url).startsWith("https://api.airtable.com/v0/")) throw new Error("Unexpected network request: " + url);
      return { ok: true, json: async () => (${JSON.stringify({ records })}) };
    };`);
    execFileSync(process.execPath, ["--import", pathToFileURL(preload).href, script], {
      cwd: root,
      env: { ...process.env, AIRTABLE_TOKEN: "test-fixture" },
      timeout: 15000,
    });
    const { events } = JSON.parse(await readFile(path.join(root, "src/data/events.json"), "utf8"));
    assert.equal(events.length, 2, "draft visibility must remain unchanged");
    const target = events.find(e => e.slug === "better-shoulders-dF5IhK");
    assert.equal(target.startIso, "2026-11-07T15:00:00.000Z");
    assert.equal(target.endIso, "2026-11-07T18:00:00.000Z");
    assert.equal(target.description, fields.Description);
    assert.equal(target.bookingLink, fields["Booking Link"]);
    assert.equal(target.status, fields.Status);
    assert.equal(target.section, fields.Section);
    assert.equal(target.badgeText, fields["Badge Text"]);
    assert.equal(target.ctaLabel, fields["CTA Label"]);
    assert.equal(target.icsPath, "/calendar/better-shoulders-dF5IhK.ics");
    const google = new URL(target.googleCalUrl);
    assert.equal(google.searchParams.get("dates"), "20261107T150000Z/20261107T180000Z");
    assert.equal(google.searchParams.get("details"), fields.Description);
    const ics = await readFile(path.join(root, "public", target.icsPath), "utf8");
    assert.match(ics, /^UID:better-shoulders-dF5IhK@4pointshealth\.com$/m);
    assert.match(ics, /^DTSTART:20261107T150000Z$/m);
    assert.match(ics, /^DTEND:20261107T180000Z$/m);
    assert.match(ics, /^METHOD:PUBLISH$/m);
    assert.ok(ics.includes(`URL:${fields["Booking Link"]}`));
    assert.doesNotMatch(ics, /VTIMEZONE|TZID=|RRULE|ATTENDEE|ORGANIZER/);
    const other = events.find(e => e.slug === "other-workshop-OTHER1");
    assert.equal(other.startIso, start);
    assert.equal(other.endIso, "2026-11-07T17:00:00.000Z");
    assert.equal(new URL(other.googleCalUrl).searchParams.get("dates"), "20261107T160000Z/20261107T170000Z");
    const otherIcs = await readFile(path.join(root, "public", other.icsPath), "utf8");
    assert.match(otherIcs, /^DTSTART;TZID=America\/Edmonton:/m);
    assert.match(otherIcs, /^BEGIN:VTIMEZONE$/m);
  } finally {
    assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
    assert.ok(path.basename(root).startsWith("4points-calendar-test-"));
    await rm(root, { recursive: true, force: true });
  }
});
