export const BK_PATH = "/events/bookings";

export const BOOKINGS_DEMO_HREF = BK_PATH + "/pricing";
export const EVENT_MANAGER_HREF = "/events/event-manager";
export const TICKETING_HREF = "/events/ticketing";

export function bkHref(path: string) {
  return BK_PATH + path;
}

export type BkNavItem = { label: string; href: string; exact?: boolean };

export const BK_NAV: BkNavItem[] = [
  { label: "Overview",       href: BK_PATH,                        exact: true },
  { label: "For Volunteers", href: bkHref("/volunteers")                       },
  { label: "Safeguarding",   href: bkHref("/safeguarding")                     },
  { label: "Booking Types",  href: bkHref("/booking-types")                    },
  { label: "LMS",            href: bkHref("/lms")                              },
  { label: "Pricing",        href: bkHref("/pricing")                          },
];
