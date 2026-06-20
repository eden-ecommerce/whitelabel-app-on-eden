const METRICS = [
  {
    value: "DAU / MAU",
    label: "Daily and monthly active readers",
  },
  {
    value: "Completion %",
    label: "eBook and audiobook completion rates",
  },
  {
    value: "P2FO rate",
    label: "Purchase-to-first-open — readers who actually read what they buy",
  },
  {
    value: "Chapter data",
    label: "Drop-off funnel showing where readers abandon each title",
  },
];

const WHAT_MARKETPLACES_GIVE = [
  "Number of copies sold",
  "Royalty payment",
  "Nothing else",
];

const WHAT_P360_GIVES = [
  "Which chapters readers abandon",
  "Average time spent per title",
  "Which purchases were never opened",
  "New vs. returning reader trends",
  "Daily active reader trend charts",
  "Top titles by engagement",
  "Tenant-wide download and stream activity log",
  "Period-on-period comparison badges",
];

export function P360Analytics() {
  return (
    <section className="bg-p360-panel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
              Analytics
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
              Marketplaces sell your books. Publish360 tells you how readers use them.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
              On Amazon, you know how many copies sold. On Publish360, you know which chapter
              32% of your clinical readers abandoned — and you can use that to improve the
              next edition. The analytics dashboard is built into the publisher admin hub,
              with no additional licence or third-party tool required.
            </p>

            {/* Side-by-side comparison */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-p360-border bg-p360-surface p-5">
                <p className="text-sm font-semibold text-p360-muted">A marketplace gives you</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {WHAT_MARKETPLACES_GIVE.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-p360-muted/70">
                      <span className="size-1.5 shrink-0 rounded-full bg-p360-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-p360-brand/30 bg-p360-accent p-5">
                <p className="text-sm font-semibold text-p360-brand">Publish360 gives you</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {WHAT_P360_GIVES.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-p360-ink">
                      <span className="size-1.5 shrink-0 rounded-full bg-p360-brand" />
                      {item}
                    </li>
                  ))}
                  <li className="text-sm font-medium text-p360-brand">
                    + {WHAT_P360_GIVES.length - 4} more metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: metric cards */}
          <div className="flex flex-col gap-4">
            {METRICS.map(({ value, label }) => (
              <div
                key={value}
                className="flex items-start gap-5 rounded-2xl border border-p360-border bg-p360-surface p-6"
              >
                <div className="flex-1">
                  <p className="font-serif text-2xl font-semibold text-p360-brand">{value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-p360-muted">{label}</p>
                </div>
              </div>
            ))}
            <p className="text-center text-xs text-p360-muted">
              All metrics available in the built-in hub dashboard. No additional tools or licences required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
