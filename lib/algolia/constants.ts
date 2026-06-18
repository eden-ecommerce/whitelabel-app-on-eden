/**
 * Query live Algolia index before editing attributes or facets below.
 * Field names are not inferrable — copy from index browse/search output.
 */
import { ALGOLIA_INDEXES } from "@lib/algolia/client";

export const productsIndex = ALGOLIA_INDEXES.products;
export const organisationHubIndex = ALGOLIA_INDEXES.organisationHub;

/** Default indices for multi-index client search (e.g. header search). */
export const defaultSearchIndices = [ALGOLIA_INDEXES.products] as const;

/** Default store filter for product index queries. */
export const DEFAULT_STORE_FILTER = "stores:eden";

export const defaultSearchParams = {
  hitsPerPage: 25,
  filters: DEFAULT_STORE_FILTER,
} as const;

/** Placeholder — extend with fields your hit components need. */
export const productAttributesToRetrieve = [
  "objectID",
  "product_name",
  "product_id",
  "price",
  "image",
  "url",
  "stores",
] as const;
