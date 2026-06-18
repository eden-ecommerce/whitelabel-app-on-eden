import type { Metadata } from "next";
import { Search } from "lucide-react";
import { NsLink } from "@components/ns-link";
import { Breadcrumbs } from "@components/events/Breadcrumbs";
import { EventCard } from "@components/events/EventCard";
import { AdvancedFilters } from "@components/events/AdvancedFilters";
import { SearchPagination } from "@components/events/SearchPagination";
import {
  searchEvents,
  type EventSort,
  type SearchEventsParams,
} from "@lib/algolia/events";
import { getAllTowns } from "@lib/locations";
import { dateFromMs, dateToMs } from "@lib/date-range";
import { NAMESPACE_PATH } from "@lib/config";

export const metadata: Metadata = {
  title: "Search Christian events",
};

type SearchParams = Record<string, string | string[] | undefined>;

function one(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;

  const query = one(sp.q) ?? "";
  const place = one(sp.place) ?? "";
  const latRaw = one(sp.lat);
  const lngRaw = one(sp.lng);
  const category = one(sp.category);
  const org = one(sp.org);
  const onlineRaw = one(sp.online);
  const radiusRaw = one(sp.radius);
  const pageRaw = one(sp.page);
  const fromRaw = one(sp.from);
  const toRaw = one(sp.to);
  const sortRaw = one(sp.sort) as EventSort | undefined;

  const lat = latRaw ? Number(latRaw) : undefined;
  const lng = lngRaw ? Number(lngRaw) : undefined;
  const hasGeo =
    typeof lat === "number" &&
    Number.isFinite(lat) &&
    typeof lng === "number" &&
    Number.isFinite(lng);

  const page = pageRaw ? Math.max(0, Number(pageRaw) - 1) : 0;
  const sort: EventSort = sortRaw ?? (hasGeo ? "distance" : "date_asc");

  const params: SearchEventsParams = {
    query,
    category,
    organisationType: org,
    sort,
    page,
    hitsPerPage: 12,
    dateFrom: dateFromMs(fromRaw),
    dateTo: dateToMs(toRaw),
  };
  if (hasGeo) {
    params.lat = lat;
    params.lng = lng;
    params.radiusMeters = radiusRaw ? Number(radiusRaw) : 40000;
  }
  if (onlineRaw === "true") params.online = true;
  if (onlineRaw === "false") params.online = false;

  const result = await searchEvents(params);
  const towns = getAllTowns().map((t) => ({
    name: t.name,
    slug: t.slug,
    lat: t.lat,
    lng: t.lng,
    countyName: t.countyName,
    countySlug: t.countySlug,
    regionName: t.regionName,
    regionSlug: t.regionSlug,
  }));

  const headline = place
    ? `Events near ${place}`
    : query
      ? `Results for “${query}”`
      : "All events";

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[{ label: "Events", href: NAMESPACE_PATH }, { label: "Search" }]}
      />

      <div className="mt-4 flex flex-col gap-1">
        <h1 className="text-pretty text-2xl font-bold text-foreground sm:text-3xl">
          {headline}
        </h1>
        <p className="text-sm text-muted-foreground">
          {result.configured
            ? `${result.nbHits} ${result.nbHits === 1 ? "event" : "events"} found`
            : "Search is not configured yet."}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
        <AdvancedFilters
          categories={result.facets.categories}
          organisationTypes={result.facets.organisationTypes}
          towns={towns}
          hasGeo={hasGeo}
        />

        <div>
          {result.hits.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-card px-6 py-16 text-center">
              <Search
                className="h-8 w-8 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="text-base font-medium text-foreground">
                No events match your search
              </p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Try widening your distance, clearing filters, or browsing by
                region instead.
              </p>
              <NsLink
                href={`${NAMESPACE_PATH}/browse`}
                className="mt-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Browse by location
              </NsLink>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {result.hits.map((event) => (
                  <EventCard key={event.objectID} event={event} />
                ))}
              </div>
              <SearchPagination
                page={result.page}
                nbPages={result.nbPages}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
