"use client";

import { Hits, type HitsProps } from "react-instantsearch";

type HitRecord = Record<string, unknown>;

function DefaultHit({ hit }: { hit: HitRecord }) {
  const title =
    (hit.product_name as string | undefined) ??
    (hit.title as string | undefined) ??
    (hit.objectID as string | undefined) ??
    "Untitled";

  return (
    <li className="rounded-md border border-border px-3 py-2 text-sm">
      {title}
    </li>
  );
}

/** Minimal Hits wrapper with a generic fallback hit renderer. */
export function AlgoliaHits(props: Omit<HitsProps<HitRecord>, "hitComponent">) {
  return (
    <Hits
      hitComponent={DefaultHit}
      classNames={{ list: "flex flex-col gap-2", root: "mt-4" }}
      {...props}
    />
  );
}
