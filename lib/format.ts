/** Shared display formatters for events. */

export function formatEventDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/London",
  });
}

export function formatEventDateLong(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
  });
}

export function formatDateRange(
  start: string | null,
  end: string | null,
): string | null {
  const startLong = formatEventDateLong(start);
  if (!startLong) return null;
  const endLong = formatEventDateLong(end);
  if (!endLong || endLong === startLong) return startLong;
  return `${startLong} – ${endLong}`;
}

export function formatPrice(price: string | null): string {
  if (price === null) return "See organiser";
  const value = Number(price);
  if (Number.isNaN(value)) return price;
  if (value === 0) return "Free";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export function formatDistance(meters: number | null): string | null {
  if (meters === null) return null;
  const miles = meters / 1609.344;
  if (miles < 0.1) return "Nearby";
  return `${miles.toFixed(miles < 10 ? 1 : 0)} miles away`;
}

/** Compose a short, human location line from event location fields. */
export function locationLine(parts: {
  online: boolean;
  locationName: string | null;
  locationCity: string | null;
  locationState: string | null;
}): string {
  if (parts.online) return "Online event";
  const segments = [parts.locationCity, parts.locationState].filter(
    (s): s is string => Boolean(s),
  );
  if (segments.length > 0) return segments.join(", ");
  return parts.locationName ?? "Location to be confirmed";
}
