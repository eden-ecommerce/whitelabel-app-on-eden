import type { Metadata } from "next";
import { P360_PATH } from "@components/publish360/p360-config";
import { P360WhatIsIt } from "@components/publish360/P360WhatIsIt";
import { P360WhoIsItFor } from "@components/publish360/P360WhoIsItFor";
import { P360Faq } from "@components/publish360/P360Faq";

export const metadata: Metadata = {
  title: "How it works — Publish360",
  description:
    "Platform, not a bespoke project. Signed contract to live app in 18–22 weeks. See the four-phase implementation timeline, who Publish360 is built for, and answers to common questions.",
  alternates: { canonical: `https://www.eden.co.uk${P360_PATH}/how-it-works` },
};

const PHASES = [
  {
    phase: "1",
    weeks: "Weeks 1–4",
    title: "Discovery & configuration",
    description:
      "Requirements confirmation, branding, ecommerce integration design, DRM registration, and developer account setup for Apple App Store and Google Play.",
  },
  {
    phase: "2",
    weeks: "Weeks 5–16",
    title: "Core platform build & testing",
    description:
      "eBook reader, audiobook player, library, authentication, ecommerce integration, DRM, offline access, and web reader. Internal QA across devices and OS versions.",
  },
  {
    phase: "3",
    weeks: "Weeks 17–22",
    title: "UAT, app store submission & launch",
    description:
      "Publisher User Acceptance Testing. App store submission under your developer accounts. Post-launch hypercare: elevated support, daily check-ins, and first usage report.",
  },
  {
    phase: "4",
    weeks: "Months 4–8",
    title: "Fast-follow enhancements",
    description:
      "Two structured enhancement rounds delivering features deferred to keep the launch timeline clean, and responding to real reader behaviour post-launch.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-p360-ink py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Implementation
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Signed contract to live app in 18–22 weeks.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            Publish360 is a production platform — not a build-from-scratch project. You configure
            and brand it as your own. The infrastructure is already live and serving readers.
          </p>
        </div>
      </div>

      <P360WhatIsIt />

      {/* Implementation timeline */}
      <section className="bg-p360-panel py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
              The four phases
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
              A clear, fixed-scope implementation plan
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
              The setup fee covers everything: discovery, branding, ecommerce integration,
              content ingestion, DRM, WCAG 2.2 AA accessibility review, cross-device QA,
              app store submission, and post-launch hypercare.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PHASES.map(({ phase, weeks, title, description }) => (
              <div
                key={phase}
                className="flex flex-col rounded-2xl border border-p360-border bg-p360-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-p360-brand text-xs font-bold text-white">
                    {phase}
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

      <P360WhoIsItFor />
      <P360Faq />

      {/* CTA */}
      <section className="bg-p360-ink py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="text-balance font-serif text-2xl font-semibold text-white">
            Ready to see how it works for your catalogue?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            Request a free demo — Eden Interactive builds a working version of your branded
            app before any commercial commitment is made.
          </p>
          <a
            href="/publish360/demo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-p360-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-p360-brand/90"
          >
            Request a free demo
          </a>
        </div>
      </section>
    </main>
  );
}
