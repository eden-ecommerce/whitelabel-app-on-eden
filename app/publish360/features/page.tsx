import type { Metadata } from "next";
import { P360_PATH } from "@components/publish360/p360-config";
import { P360Formats } from "@components/publish360/P360Formats";
import { P360ReaderExperience } from "@components/publish360/P360ReaderExperience";
import { P360Drm } from "@components/publish360/P360Drm";
import { P360Cta } from "@components/publish360/P360Cta";

export const metadata: Metadata = {
  title: "Features — Publish360",
  description:
    "eBooks, audiobooks, video, and courses in one branded app. Professional EPUB reader, download-first audio player, Readium LCP DRM, and offline-first architecture.",
  alternates: { canonical: `https://www.eden.co.uk${P360_PATH}/features` },
};

export default function FeaturesPage() {
  return (
    <main>
      {/* Page header */}
      <div className="bg-p360-ink py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Platform features
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Everything your readers need. One app.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            Publish360 handles every format your catalogue contains — EPUB, PDF, audiobooks,
            video, and structured courses — in a single branded app with professional DRM and
            offline-first architecture.
          </p>
        </div>
      </div>

      <P360Formats />
      <P360ReaderExperience />
      <P360Drm />

      {/* Mini CTA */}
      <section className="bg-p360-ink py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="text-balance font-serif text-2xl font-semibold text-white">
            See these features in your own branded app — for free.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            Eden Interactive builds a working demo of your app before any commercial commitment.
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
