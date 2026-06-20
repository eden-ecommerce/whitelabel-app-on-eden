const AUDIENCES = [
  {
    label: "Trade & academic publishers",
    heading: "You have built a catalogue. Stop watching 30% disappear.",
    body: "You sell through Amazon and other marketplaces and watch the margin vanish. You have no idea how your readers engage with your content. Publish360 gives you a direct channel, operational in under six months, with analytics that tell you more about your readers than any marketplace ever will.",
  },
  {
    label: "Professional & specialist publishers",
    heading: "Fillable forms, institutional SSO, and chapter-level analytics.",
    body: "Your catalogue includes clinical resources, academic textbooks, or professional training content. The standard marketplace experience is too generic. Publish360 is designed for this: DRM that works seamlessly for professionals, supplementary materials in the same app, SAML for institutional buyers.",
  },
  {
    label: "Course creators & educational publishers",
    heading: "eBooks, audiobooks, video, and structured courses — one app.",
    body: "Your content includes video, guided pathways, and quizzes alongside or instead of traditional books. Publish360 handles multiple formats, tracks learner progress, and integrates with your existing ecommerce or LMS infrastructure.",
  },
  {
    label: "International publishers",
    heading: "Arabic, Chinese, Korean, Thai, Indonesian — and offline for variable connectivity.",
    body: "Your content serves readers across languages and regions. Publish360 handles RTL scripts correctly, supports localised interfaces, works offline in markets with patchy connectivity, and allows regional availability control from the admin hub.",
  },
  {
    label: "Publishers with a custom app nearing end of life",
    heading: "Migrate to a sustainable platform without losing your reader base.",
    body: "Custom-built apps have a lifespan. Architecture becomes dated, agencies move on, and iOS/Android maintenance costs grow every year. Publish360 supports migration of existing user accounts, purchase history, and entitlements as part of implementation.",
  },
  {
    label: "Charities & non-profits",
    heading: "Reach your audience directly with accessible, affordable distribution.",
    body: "Charitable organisations with publications, training resources, or pastoral content can use Publish360 to distribute directly to their communities — with the same professional DRM, analytics, and accessibility compliance as any commercial publisher.",
  },
];

export function P360WhoIsItFor() {
  return (
    <section className="bg-p360-panel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Who it is built for
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
            Built for publishers of every kind
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map(({ label, heading, body }) => (
            <div
              key={label}
              className="flex flex-col rounded-2xl border border-p360-border bg-p360-surface p-7 transition-colors hover:border-p360-brand/40"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
                {label}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-p360-ink">
                {heading}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-p360-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
