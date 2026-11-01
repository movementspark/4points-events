// Confirmed schedule for this November 7 workshop only. Alberta stays at UTC-06
// from November 1, 2026: https://www.alberta.ca/albertas-new-time-system-abt
// Keep the explicit offset independent of the build machine's timezone database.
const betterShoulders = Object.freeze({
  startIso: "2026-11-07T15:00:00.000Z",
  endIso: "2026-11-07T18:00:00.000Z",
  dateLine: "Saturday, November 7, 2026 · 9 a.m.–noon Edmonton (UTC−06)",
});

export function eventTimeCorrection(slug, startIso) {
  if (slug === "better-shoulders-dF5IhK" && startIso?.startsWith("2026-11-07T")) {
    return betterShoulders;
  }
  return null;
}
