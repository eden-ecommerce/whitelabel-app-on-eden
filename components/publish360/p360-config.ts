/** Absolute path to the Publish360 microsite root. */
export const P360_PATH = "/publish360";

/** Build an internal href within the Publish360 microsite. */
export function p360Href(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${P360_PATH}${normalized}`;
}

/** Primary conversion target — "Book a call". */
export const DEMO_HREF = "mailto:publish360@edeninteractive.com?subject=Publish360%20Demo%20Request";

export const CONTACT_HREF = DEMO_HREF;
