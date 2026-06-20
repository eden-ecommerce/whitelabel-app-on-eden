import { ShieldCheck, Wifi, SmartphoneNfc, Globe } from "lucide-react";

const DRM_POINTS = [
  {
    icon: ShieldCheck,
    title: "Invisible to legitimate readers",
    description:
      "Readers open their purchase on their phone, tablet, or the web — without knowing any protection is in place. Files are locked to their account and device, making extracted copies non-functional outside the app.",
  },
  {
    icon: Wifi,
    title: "Works fully offline",
    description:
      "Downloaded eBooks are protected and readable without connectivity. No separate account or device authorisation step required — a reader clicks their title and it opens.",
  },
  {
    icon: SmartphoneNfc,
    title: "No device registration",
    description:
      "Unlike Adobe Digital Editions, Readium LCP requires no frustrating device authorisation steps that created support overhead and damaged customer relationships.",
  },
  {
    icon: Globe,
    title: "Open, interoperable standard",
    description:
      "Developed and audited by EDRLab — the non-profit digital publishing consortium. Eden Interactive is an EDRLab member. LCP is not locked to any single vendor.",
  },
];

export function P360Drm() {
  return (
    <section className="bg-p360-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
              DRM & content protection
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
              Protection that readers never see. Security that content always has.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
              Publish360 uses{" "}
              <strong className="font-semibold text-p360-ink">Readium LCP</strong> — the
              industry standard for EPUB DRM, developed by EDRLab to replace the friction
              and failure modes of Adobe Digital Editions. If your readers have ever struggled
              with DRM before, this is the technology built specifically to solve that.
            </p>
            <p className="mt-4 text-base leading-relaxed text-p360-muted">
              Audiobook files are encrypted at rest with signed URLs that expire after use.
              Supplementary materials use social DRM — a watermark containing the
              purchaser&apos;s identity — a proportionate deterrent for clinical and
              professional content that must remain editable.
            </p>
          </div>

          {/* Right: feature list */}
          <div className="flex flex-col gap-8">
            {DRM_POINTS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-p360-accent text-p360-brand">
                  <Icon className="size-5" aria-hidden="true" />
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
