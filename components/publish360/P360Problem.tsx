const PAIN_POINTS = [
  {
    stat: "30–70%",
    label: "Commission taken by Amazon, Apple and Audible on every sale",
  },
  {
    stat: "0",
    label: "Reader relationship data a marketplace shares with you",
  },
  {
    stat: "12–18 mo",
    label: "Typical time to launch a bespoke custom-built app",
  },
  {
    stat: "£100k+",
    label: "Typical six-figure minimum for a custom build",
  },
];

export function P360Problem() {
  return (
    <section className="border-y border-p360-border bg-p360-ink py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            The problem
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Publishers hand over content. Platforms hand back a royalty report.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/60">
            The dominant digital channels strip out the reader relationship, withhold engagement
            data, and take a cut of every sale — indefinitely. The alternative — a bespoke
            custom build — costs six figures and twelve to eighteen months. Neither is good
            enough.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-p360-brand/20 bg-p360-brand/20 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map(({ stat, label }) => (
            <div key={stat} className="bg-p360-ink px-8 py-10 text-center">
              <p className="font-serif text-4xl font-semibold text-white sm:text-5xl">{stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold text-white">
            Publish360 is the third option.
          </p>
          <p className="mt-2 text-base leading-relaxed text-white/60">
            A production-ready platform. Publisher-branded. Direct to reader. No commission,
            no custom build, no surrendering your audience to someone else&apos;s platform.
          </p>
        </div>
      </div>
    </section>
  );
}
