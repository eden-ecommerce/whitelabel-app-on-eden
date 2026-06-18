import { Breadcrumbs, type Crumb } from "@components/events/Breadcrumbs";
import { EventCard } from "@components/events/EventCard";
import { NsLink } from "@components/ns-link";
import { NAMESPACE_PATH } from "@lib/config";
import { searchEvents } from "@lib/algolia/events";
import {
  getCounty,
  getRegion,
  getRegions,
  getTown,
} from "@lib/locations";
import { ChevronRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

const BROWSE = `${NAMESPACE_PATH}/browse`;

type Props = {
  params: Promise<{ path?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path = [] } = await params;
  const [regionSlug, countySlug, townSlug] = path;

  if (townSlug) {
    const match = getTown(regionSlug, countySlug, townSlug);
    if (match) {
      return {
        title: `Christian events in ${match.town.name}`,
        description: `Find Christian events near ${match.town.name}, ${match.county.name}.`,
      };
    }
  }
  if (countySlug) {
    const match = getCounty(regionSlug, countySlug);
    if (match) {
      return { title: `Christian events in ${match.county.name}` };
    }
  }
  if (regionSlug) {
    const region = getRegion(regionSlug);
    if (region) return { title: `Christian events in ${region.name}` };
  }
  return { title: "Browse Christian events by location" };
}

function LinkGrid({
  items,
}: {
  items: { name: string; href: string; subtitle?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <NsLink
          key={item.href}
          href={item.href}
          className="flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary"
        >
          <span className="flex flex-col">
            <span className="font-medium text-foreground">{item.name}</span>
            {item.subtitle ? (
              <span className="text-sm text-muted-foreground">{item.subtitle}</span>
            ) : null}
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
        </NsLink>
      ))}
    </div>
  );
}

function PageShell({
  crumbs,
  title,
  description,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </main>
  );
}

export default async function BrowsePage({ params }: Props) {
  const { path = [] } = await params;
  const [regionSlug, countySlug, townSlug] = path;

  // Level 0: all regions
  if (!regionSlug) {
    const regions = getRegions();
    return (
      <PageShell
        crumbs={[{ label: "Events", href: NAMESPACE_PATH }, { label: "Browse" }]}
        title="Browse Christian events by location"
        description="Choose a UK nation to drill down through counties and towns."
      >
        <LinkGrid
          items={regions.map((r) => ({
            name: r.name,
            href: `${BROWSE}/${r.slug}`,
            subtitle: `${r.counties.length} counties`,
          }))}
        />
      </PageShell>
    );
  }

  // Level 1: region -> counties
  const region = getRegion(regionSlug);
  if (!region) notFound();

  if (!countySlug) {
    return (
      <PageShell
        crumbs={[
          { label: "Events", href: NAMESPACE_PATH },
          { label: "Browse", href: BROWSE },
          { label: region.name },
        ]}
        title={`Christian events in ${region.name}`}
        description={`Select a county in ${region.name} to find local events.`}
      >
        <LinkGrid
          items={region.counties.map((c) => ({
            name: c.name,
            href: `${BROWSE}/${region.slug}/${c.slug}`,
            subtitle: `${c.townCount} towns`,
          }))}
        />
      </PageShell>
    );
  }

  // Level 2: county -> towns
  const countyMatch = getCounty(regionSlug, countySlug);
  if (!countyMatch) notFound();
  const { county } = countyMatch;

  if (!townSlug) {
    return (
      <PageShell
        crumbs={[
          { label: "Events", href: NAMESPACE_PATH },
          { label: "Browse", href: BROWSE },
          { label: region.name, href: `${BROWSE}/${region.slug}` },
          { label: county.name },
        ]}
        title={`Christian events in ${county.name}`}
        description={`Choose a town in ${county.name} to see events nearby.`}
      >
        <LinkGrid
          items={county.towns.map((t) => ({
            name: t.name,
            href: `${BROWSE}/${region.slug}/${county.slug}/${t.slug}`,
          }))}
        />
      </PageShell>
    );
  }

  // Level 3: town -> nearby events (geo search)
  const townMatch = getTown(regionSlug, countySlug, townSlug);
  if (!townMatch) notFound();
  const { town } = townMatch;

  const results = await searchEvents({
    lat: town.lat,
    lng: town.lng,
    radiusMeters: 48000,
    hitsPerPage: 24,
  });

  return (
    <PageShell
      crumbs={[
        { label: "Events", href: NAMESPACE_PATH },
        { label: "Browse", href: BROWSE },
        { label: region.name, href: `${BROWSE}/${region.slug}` },
        { label: county.name, href: `${BROWSE}/${region.slug}/${county.slug}` },
        { label: town.name },
      ]}
      title={`Christian events near ${town.name}`}
      description={`Showing events within about 30 miles of ${town.name}, ${county.name}.`}
    >
      {results.hits.length > 0 ? (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            {results.nbHits} event{results.nbHits === 1 ? "" : "s"} found
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.hits.map((event) => (
              <EventCard key={event.objectID} event={event} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">
            No events found near {town.name} right now. Try a wider search.
          </p>
          <NsLink
            href={`${NAMESPACE_PATH}/search?lat=${town.lat}&lng=${town.lng}&place=${encodeURIComponent(town.name)}`}
            className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
          >
            Search a wider radius around {town.name}
          </NsLink>
        </div>
      )}
    </PageShell>
  );
}
