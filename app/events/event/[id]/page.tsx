import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock,
  MapPin,
  Tag,
  Users,
  Globe,
  Car,
  Building2,
} from "lucide-react";
import { NsLink } from "@components/ns-link";
import { Breadcrumbs } from "@components/events/Breadcrumbs";
import { EventCard } from "@components/events/EventCard";
import { getEventById, searchEvents } from "@lib/algolia/events";
import { formatDateRange, formatPrice } from "@lib/format";
import { NAMESPACE_PATH } from "@lib/config";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.description.slice(0, 155) || undefined,
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = await getEventById(id);
  if (!event) notFound();

  const location = [
    event.locationName,
    event.locationStreet,
    event.locationCity,
    event.locationState,
    event.locationPostalCode,
  ]
    .filter(Boolean)
    .join(", ");

  // Nearby events (exclude this one).
  let nearby = [] as Awaited<ReturnType<typeof searchEvents>>["hits"];
  if (typeof event.lat === "number" && typeof event.lng === "number") {
    const res = await searchEvents({
      lat: event.lat,
      lng: event.lng,
      radiusMeters: 80000,
      hitsPerPage: 4,
    });
    nearby = res.hits.filter((e) => e.objectID !== event.objectID).slice(0, 3);
  }

  const mapSrc =
    typeof event.lat === "number" && typeof event.lng === "number"
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${event.lng - 0.02}%2C${event.lat - 0.012}%2C${event.lng + 0.02}%2C${event.lat + 0.012}&layer=mapnik&marker=${event.lat}%2C${event.lng}`
      : null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Events", href: NAMESPACE_PATH },
          { label: "Search", href: `${NAMESPACE_PATH}/search` },
          { label: event.title },
        ]}
      />

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <article>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
            {event.thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={event.thumbnailUrl}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <Building2
                  className="h-12 w-12 text-muted-foreground/40"
                  aria-hidden="true"
                />
              </div>
            )}
            {event.categoryLvl0 && (
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {event.categoryLvl0}
              </span>
            )}
          </div>

          <h1 className="mt-6 text-balance text-3xl font-bold text-foreground">
            {event.title}
          </h1>

          {event.organisationName && (
            <p className="mt-2 text-sm text-muted-foreground">
              Hosted by{" "}
              <span className="font-medium text-foreground">
                {event.organisationName}
              </span>
            </p>
          )}

          {event.description && (
            <div className="mt-6 border-t border-border pt-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                About this event
              </h2>
              <p className="whitespace-pre-line text-pretty leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>
          )}

          {(event.ageRange || event.parkingInstructions) && (
            <div className="mt-6 border-t border-border pt-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Good to know
              </h2>
              <dl className="flex flex-col gap-3">
                {event.ageRange && (
                  <div className="flex items-start gap-3">
                    <Users
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-foreground">
                        Suitable for
                      </dt>
                      <dd className="text-sm text-muted-foreground">
                        {event.ageRange}
                      </dd>
                    </div>
                  </div>
                )}
                {event.parkingInstructions && (
                  <div className="flex items-start gap-3">
                    <Car
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-foreground">
                        Parking
                      </dt>
                      <dd className="text-sm text-muted-foreground">
                        {event.parkingInstructions}
                      </dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>
          )}

          {mapSrc && (
            <div className="mt-6 border-t border-border pt-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Location
              </h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title={`Map showing the location of ${event.title}`}
                  src={mapSrc}
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
              {location && (
                <p className="mt-2 text-sm text-muted-foreground">{location}</p>
              )}
            </div>
          )}
        </article>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-5">
            <dl className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <CalendarDays
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Date
                  </dt>
                  <dd className="text-sm font-medium text-foreground">
                    {formatDateRange(event.date, event.endDate) ??
                      "See organiser"}
                  </dd>
                </div>
              </div>

              {event.time && (
                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Time
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {event.time}
                    </dd>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                {event.online ? (
                  <Globe
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                ) : (
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                )}
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {event.online ? "Format" : "Where"}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">
                    {event.online
                      ? "Online event"
                      : location || "See organiser"}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Price
                  </dt>
                  <dd className="text-sm font-medium text-foreground">
                    {formatPrice(event.price)}
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href="https://www.eden.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full rounded-md bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View on Eden
            </a>
          </div>
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className="mt-12 border-t border-border pt-8">
          <h2 className="mb-5 text-xl font-bold text-foreground">
            More events nearby
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((e) => (
              <EventCard key={e.objectID} event={e} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
