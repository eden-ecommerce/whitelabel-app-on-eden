/** Absolute path to the Publish360 microsite root. */
export const P360_PATH = "/publish360";

/** Build an internal href within the Publish360 microsite. */
export function p360Href(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${P360_PATH}${normalized}`;
}

/** Primary conversion target — the dedicated demo request page. */
export const DEMO_HREF = `${P360_PATH}/demo`;

export const CONTACT_HREF = DEMO_HREF;
