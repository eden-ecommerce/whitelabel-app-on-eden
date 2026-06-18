import { NsLink } from "@components/ns-link";
import { NAMESPACE_PATH } from "@lib/config";
import type { EventHit } from "@lib/algolia/events";
import {
  formatDistance,
  formatEventDate,
  formatPrice,
  locationLine,
} from "@lib/format";
import { CalendarDays, MapPin, Wifi } from "lucide-react";

export function EventCard({ event }: { event: EventHit }) {
  const date = formatEventDate(event.date);
  const location = locationLine(event);
  const distance = formatDistance(event.distanceMeters);
  const category = event.categoryLvl0;

  return (
    <NsLink
      href={`${NAMESPACE_PATH}/event/${event.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {event.thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.thumbnailUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <CalendarDays className="h-10 w-10" />
          </div>
        )}
        {category ? (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
            {category}
          </span>
        ) : null}
        {event.online ? (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
            <Wifi className="h-3 w-3" /> Online
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          {event.organiserLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={event.organiserLogo}
              alt=""
              className="h-6 w-6 shrink-0 rounded-full object-contain"
              loading="lazy"
            />
          ) : null}
          <span className="truncate text-xs font-medium text-muted-foreground">
            {event.organisationName ?? "Christian event"}
          </span>
        </div>

        <h3 className="text-pretty text-base font-semibold leading-snug text-foreground group-hover:text-primary">
          {event.title}
        </h3>

        <div className="mt-auto flex flex-col gap-1.5 text-sm text-muted-foreground">
          {date ? (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
              {date}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{location}</span>
          </span>
          {distance ? (
            <span className="text-xs text-primary">{distance}</span>
          ) : null}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-sm font-semibold text-foreground">
            {formatPrice(event.price)}
          </span>
          <span className="text-sm font-medium text-primary group-hover:underline">
            View details
          </span>
        </div>
      </div>
    </NsLink>
  );
}
