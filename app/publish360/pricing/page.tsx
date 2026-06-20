import type { Metadata } from "next";
import { P360_PATH } from "@components/publish360/p360-config";
import { P360Monetisation } from "@components/publish360/P360Monetisation";
import { P360Comparison } from "@components/publish360/P360Comparison";

export const metadata: Metadata = {
  title: "Pricing — Publish360",
  description:
    "Fixed setup fee. Monthly platform licence. No revenue share on website sales. Understand the commercial model and how Publish360 compares to marketplaces and custom builds.",
  alternates: { canonical: `https://www.eden.co.uk${P360_PATH}/pricing` },
};

export default function PricingPage() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-p360-ink py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Commercial model
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Fixed fee. No revenue share.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            A setup fee that covers everything from discovery to live app store submission,
            plus a monthly platform licence. No per-sale commission on purchases made through
            your own website — ever.
          </p>
        </div>
      </div>

      <P360Monetisation />

      {/* Pricing callout */}
      <section className="bg-p360-panel py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-p360-border bg-p360-surface p-8 sm:p-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
              Pricing
            </span>
            <h2 className="mt-4 text-balance font-serif text-2xl font-semibold text-p360-ink">
              Pricing is agreed during the discovery call.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-p360-muted">
              Setup fee and monthly licence vary by catalogue size, required integrations, and
              custom configuration scope. There are no hidden costs — everything required to
              reach launch is included in the setup fee.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { stat: "One", label: "Fixed setup fee covering everything to launch" },
                { stat: "0%", label: "Commission on sales via your own website" },
                { stat: "Included", label: "iOS & Android maintenance, DRM, CDN, hosting" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <p className="font-serif text-3xl font-semibold text-p360-brand">{stat}</p>
                  <p className="text-sm leading-relaxed text-p360-muted text-center">{label}</p>
                </div>
              ))}
            </div>
            <a
              href="/publish360/demo"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-p360-brand px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-p360-brand/90"
            >
              Get a quote — book a demo
            </a>
          </div>
        </div>
      </section>

      <P360Comparison />
    </main>
  );
}
