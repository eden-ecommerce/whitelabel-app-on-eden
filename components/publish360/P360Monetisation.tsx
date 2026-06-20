import { CircleDollarSign, Store, RefreshCw, Users, Tag, Key } from "lucide-react";

const PURCHASE_MODELS = [
  {
    icon: CircleDollarSign,
    title: "Reader app model (recommended)",
    badge: "No Apple/Google commission",
    description:
      "All purchases made on your website, using your payment processing. The app is free to download. When a reader buys, a webhook communicates the entitlement to Publish360 and the content appears immediately in their library.",
  },
  {
    icon: Store,
    title: "In-app purchases",
    badge: "Apple Pay / Google Pay",
    description:
      "Purchases processed inside the app via Apple or Google. Subject to 15–30% platform commission depending on your revenue level. Can run in parallel with the website purchase model.",
  },
  {
    icon: RefreshCw,
    title: "Subscription tiers",
    badge: "Monthly, annual, or custom",
    description:
      "Recurring subscriptions with access to full catalogue or defined collections. Trial periods, promotional codes, and coupon-based access all supported.",
  },
];

const EXTRA_MONETISATION = [
  { icon: Users, text: "Bulk licensing for institutions and organisations" },
  { icon: Tag, text: "Single-item purchase and promotional codes" },
  { icon: Key, text: "Access codes for controlled or gifted distribution" },
];

export function P360Monetisation() {
  return (
    <section className="bg-p360-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Monetisation
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
            No revenue share. Sell your way.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
            Publish360 is built around a publisher-first commercial model: sell through your
            own ecommerce infrastructure and keep the full margin. There is no commission on
            sales made through your website — no cut going to Apple, Google, or Eden
            Interactive.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PURCHASE_MODELS.map(({ icon: Icon, title, badge, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-p360-border bg-p360-panel p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-p360-accent text-p360-brand">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-p360-accent px-2.5 py-1 text-xs font-semibold text-p360-brand">
                {badge}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-p360-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-p360-muted">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Extra options */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {EXTRA_MONETISATION.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 rounded-full border border-p360-border bg-p360-panel px-5 py-3"
            >
              <Icon className="size-4 text-p360-brand" aria-hidden="true" />
              <span className="text-sm text-p360-muted">{text}</span>
            </div>
          ))}
        </div>

        {/* Integrations callout */}
        <div className="mt-12 rounded-2xl border border-p360-border bg-p360-panel p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
            <div className="flex-1">
              <h3 className="font-semibold text-p360-ink">
                Works with your existing ecommerce
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-p360-muted">
                Publishers do not need to replace their current commerce infrastructure.
                Eden provides a documented REST API and webhook schema that integrates with
                whatever you already operate.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:shrink-0">
              {["Shopify", "WooCommerce", "ONIX 3.1", "Custom REST API", "Zapier / Make"].map(
                (int) => (
                  <span
                    key={int}
                    className="rounded-lg border border-p360-border bg-p360-surface px-3 py-1.5 text-xs font-medium text-p360-ink"
                  >
                    {int}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
