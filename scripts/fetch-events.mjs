// Pulls event data from Airtable and prepares everything the site needs at build time:
//   - src/data/events.json   (normalized event records, grouped/sorted)
//   - public/events-data/*.jpg   (flyer images, downloaded so the live site never depends
//                                  on a temporary Airtable attachment URL)
//   - public/calendar/*.ics   (one .ics file per dated event/class)
//
// Requires AIRTABLE_TOKEN in the environment (a Personal Access Token scoped to just
// the "4 Points Events" base, with the data.records:read scope).

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE_ID = "appJM0QU7prjT093v";
const TABLE_ID = "tbl4CnAJfx5r5VfE5";
const TOKEN = process.env.AIRTABLE_TOKEN || process.env.Airtable_Token;

const SITE_ORIGIN = "https://events.4pointshealth.com";
const VENUE_NAME = "4 Points Health and Wellness";
const VENUE_ADDRESS = "11634 142 Street NW, Edmonton, AB T5M 1V4";
const TIMEZONE = "America/Edmonton";

const ROOT = path.resolve(process.cwd());
const IMAGES_DIR = path.join(ROOT, "public", "events-data");
const CALENDAR_DIR = path.join(ROOT, "public", "calendar");
const DATA_DIR = path.join(ROOT, "src", "data");

if (!TOKEN) {
  console.error(
    "\n[fetch-events] AIRTABLE_TOKEN is not set. Skipping Airtable fetch — " +
      "keeping whatever is already in src/data/events.json (if anything).\n"
  );
  process.exit(0);
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function fetchAllRecords() {
  const records = [];
  let offset;
  do {
    const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`);
    url.searchParams.set("pageSize", "100");
    if (offset) url.searchParams.set("offset", offset);
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    if (!res.ok) {
      throw new Error(
        `Airtable fetch failed: ${res.status} ${res.statusText} — ${await res.text()}`
      );
    }
    const json = await res.json();
    records.push(...json.records);
    offset = json.offset;
  } while (offset);
  return records;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Image download failed: ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buf);
}

function icsEscape(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function toIcsDate(isoString) {
  // Airtable dateTime fields come back as UTC ISO strings (e.g. 2026-09-25T00:30:00.000Z).
  // We render them as a floating local time in America/Edmonton using TZID, matching the
  // hand-authored .ics files this replaces.
  const d = new Date(isoString);
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(fmt.formatToParts(d).map((p) => [p.type, p.value]));
  return `${parts.year}${parts.month}${parts.day}T${parts.hour}${parts.minute}${parts.second}`;
}

function buildIcs({ uid, title, description, startIso, endIso, url }) {
  const dtstamp =
    new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z";
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//4 Points Health and Wellness//Events//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:${TIMEZONE}
X-LIC-LOCATION:${TIMEZONE}
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:${uid}@4pointshealth.com
DTSTAMP:${dtstamp}
DTSTART;TZID=${TIMEZONE}:${toIcsDate(startIso)}
DTEND;TZID=${TIMEZONE}:${toIcsDate(endIso)}
SUMMARY:${icsEscape(title)}
DESCRIPTION:${icsEscape(description)}
LOCATION:${icsEscape(VENUE_NAME + ", " + VENUE_ADDRESS)}
URL:${url || ""}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR
`;
}

function googleCalendarUrl({ title, description, startIso, endIso }) {
  const fmt = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${fmt(startIso)}/${fmt(endIso)}`,
    details: description,
    location: `${VENUE_NAME}, ${VENUE_ADDRESS}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  await mkdir(CALENDAR_DIR, { recursive: true });
  await mkdir(DATA_DIR, { recursive: true });

  const rawRecords = await fetchAllRecords();
  console.log(`[fetch-events] Fetched ${rawRecords.length} records from Airtable.`);

  const events = [];

  for (const record of rawRecords) {
    const f = record.fields;
    const title = f["Title"];
    if (!title) continue;
    const status = f["Status"] || "Draft";
    if (status !== "Show") continue;

    const slug = slugify(title) + "-" + record.id.slice(-6);
    const startIso = f["Start Date & Time"] || null;
    const endIso = f["End Date & Time"] || null;

    let imagePath = null;
    const attachments = f["Flyer Image"];
    if (attachments && attachments.length > 0) {
      const att = attachments[0];
      const ext = (att.filename && path.extname(att.filename)) || ".jpg";
      const filename = `${slug}${ext || ".jpg"}`;
      const dest = path.join(IMAGES_DIR, filename);
      try {
        await downloadImage(att.url, dest);
        imagePath = `/events-data/${filename}`;
        console.log(`[fetch-events]   downloaded image for "${title}" -> ${imagePath}`);
      } catch (err) {
        console.error(`[fetch-events]   FAILED to download image for "${title}":`, err.message);
      }
    }

    let icsPath = null;
    let googleCalUrl = null;
    if (startIso && endIso) {
      const icsFilename = `${slug}.ics`;
      const description = f["Description"] || "";
      await writeFile(
        path.join(CALENDAR_DIR, icsFilename),
        buildIcs({
          uid: slug,
          title,
          description,
          startIso,
          endIso,
          url: f["Booking Link"] || SITE_ORIGIN,
        })
      );
      icsPath = `/calendar/${icsFilename}`;
      googleCalUrl = googleCalendarUrl({
        title,
        description,
        startIso,
        endIso,
      });
    }

    events.push({
      id: record.id,
      slug,
      title,
      section: f["Section"] || null,
      cardStyle: f["Card Style"] || "Teaser Card",
      status,
      startIso,
      endIso,
      price: f["Price"] || null,
      badgeText: f["Badge Text"] || null,
      description: f["Description"] || "",
      image: imagePath,
      bookingLink: f["Booking Link"] || null,
      ctaLabel: f["CTA Label"] || "Learn More",
      displayOrder: typeof f["Display Order"] === "number" ? f["Display Order"] : 999,
      icsPath,
      googleCalUrl,
    });
  }

  events.sort((a, b) => a.displayOrder - b.displayOrder);

  await writeFile(
    path.join(DATA_DIR, "events.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), events }, null, 2)
  );

  console.log(`[fetch-events] Wrote ${events.length} published events to src/data/events.json`);
}

main().catch((err) => {
  console.error("[fetch-events] FATAL:", err);
  process.exit(1);
});
