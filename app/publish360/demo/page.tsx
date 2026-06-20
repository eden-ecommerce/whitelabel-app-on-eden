import type { Metadata } from "next";
import { P360_PATH } from "@components/publish360/p360-config";
import { P360DemoForm } from "@components/publish360/P360DemoForm";

export const metadata: Metadata = {
  title: "Request a free demo — Publish360",
  description:
    "See Publish360 with your books, your brand, your app — before any commercial commitment. Eden Interactive builds a working demo for your organisation at no cost.",
  alternates: { canonical: `https://www.eden.co.uk${P360_PATH}/demo` },
};

const WHAT_TO_EXPECT = [
  {
    number: "01",
    title: "We build your demo — for free",
    description:
      "Eden Interactive configures a working version of Publish360 with your branding and a sample of your actual catalogue. No design mockup — a real, installable app.",
  },
  {
    number: "02",
    title: "You see it on your phone",
    description:
      "We walk you through the app on iOS and Android. You experience your readers' journey first-hand, before signing anything or spending a pound.",
  },
  {
    number: "03",
    title: "No commitment required",
    description:
      "If Publish360 is right for you, implementation begins. If it is not what you expected, you walk away having paid nothing. That is the no-commitment guarantee.",
  },
];

export default function DemoPage() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-p360-ink py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Free demo
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            See Publish360 with your books, your brand, your app.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            We build a working version of your branded app before any commercial commitment
            is made. Fill in the form below and we will be in touch within one working day.
          </p>
        </div>
      </div>

      {/* How the demo works */}
      <section className="bg-p360-panel py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            {WHAT_TO_EXPECT.map(({ number, title, description }) => (
              <div key={number} className="flex gap-5">
                <span className="font-serif text-3xl font-semibold leading-none text-p360-border shrink-0">
                  {number}
                </span>
                <div>
                  <h3 className="font-semibold text-p360-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-p360-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-p360-surface py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-2xl border border-p360-border bg-p360-panel p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-p360-ink">
              Request your free demo
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-p360-muted">
              Tell us a little about your organisation and catalogue. We will follow up
              within one working day.
            </p>
            <P360DemoForm />
          </div>
        </div>
      </section>
    </main>
  );
}
