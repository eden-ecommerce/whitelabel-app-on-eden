import { DEMO_HREF } from "./p360-config";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";

const IMPLEMENTATION_PHASES = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1–4",
    title: "Discovery & configuration",
    description:
      "Requirements confirmation, branding, ecommerce integration design, DRM registration, and developer account setup for Apple App Store and Google Play.",
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 5–16",
    title: "Core platform build & testing",
    description:
      "eBook reader, audiobook player, library, authentication, ecommerce integration, DRM, offline access, and web reader. Internal QA across devices and OS versions.",
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 17–22",
    title: "UAT, app store submission & launch",
    description:
      "Publisher User Acceptance Testing. App store submission under your developer accounts. Post-launch hypercare: elevated support, daily check-ins, and first usage report.",
  },
  {
    phase: "Phase 4",
    weeks: "Months 4–8",
    title: "Fast-follow enhancements",
    description:
      "Two structured enhancement rounds delivering features deferred to keep the launch timeline clean, and responding to real reader behaviour post-launch.",
  },
];

export function P360Cta() {
  return (
    <>
      {/* Implementation timeline */}
      <section className="bg-p360-panel py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
              How implementation works
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
              Signed contract to live app in 18–22 weeks
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
              The setup fee covers everything: discovery, branding, ecommerce integration,
              content ingestion, DRM, WCAG 2.2 AA accessibility review, cross-device QA,
              app store submission, and post-launch hypercare.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IMPLEMENTATION_PHASES.map(({ phase, weeks, title, description }) => (
              <div
                key={phase}
                className="flex flex-col rounded-2xl border border-p360-border bg-p360-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-p360-brand text-xs font-bold text-white">
                    {phase.slice(-1)}
                  </span>
                  <span className="text-xs font-semibold text-p360-muted">{weeks}</span>
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-p360-ink">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-p360-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-p360-ink py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Get started
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            See Publish360 with your books, your brand, your app.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            Request a free demo. Eden Interactive will build a working version of your branded
            app — no commercial commitment required. If it is right for you, the implementation
            begins. If not, you walk away having paid nothing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={DEMO_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-p360-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-p360-brand/90"
            >
              Request a free demo
            </a>
            <a
              href="https://edeninteractive.com"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-white/30 text-white hover:bg-white/10",
              )}
            >
              Learn about Eden Interactive
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { stat: "18–22", label: "Weeks to launch" },
              { stat: "0%", label: "Revenue share on website sales" },
              { stat: "20+", label: "Years of publisher technology experience" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-3xl font-semibold text-white">{stat}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
