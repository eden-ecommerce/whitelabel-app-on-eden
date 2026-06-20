const ADVANTAGES = [
  {
    number: "01",
    title: "18–22 weeks to launch",
    description:
      "The platform is already built, tested, and serving publishers. Configuration, branding, and integration — not months of architecture work.",
  },
  {
    number: "02",
    title: "Fixed setup fee",
    description:
      "One agreed cost covers everything from discovery to live app store submission. No day-rate overruns, no change order risk within scope.",
  },
  {
    number: "03",
    title: "Maintenance included",
    description:
      "iOS and Android updates, security patching, DRM management, CDN and hosting — all covered in the platform licence. No developer retainer needed.",
  },
];

export function P360WhatIsIt() {
  return (
    <section id="how-it-works" className="bg-p360-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: editorial statement */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
              Platform, not a bespoke project
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
              Already live. Already serving readers. Ready for your brand.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-p360-muted">
              Publish360 is a production platform that independent publishers configure and
              brand as their own. When you join, you benefit from the investment already made
              in the eBook reader, audiobook player, DRM integration, offline architecture, and
              analytics engine — rather than paying to build it from scratch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-p360-muted">
              The distinction matters: a bespoke build creates technical debt and requires ongoing
              maintenance funding. The Publish360 platform licence includes everything your platform
              needs to stay current, compliant, and performant.
            </p>
          </div>

          {/* Right: three differentiators */}
          <div className="flex flex-col gap-8">
            {ADVANTAGES.map(({ number, title, description }) => (
              <div key={number} className="flex gap-6">
                <div className="shrink-0">
                  <span className="font-serif text-3xl font-semibold text-p360-border">
                    {number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-p360-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-p360-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
