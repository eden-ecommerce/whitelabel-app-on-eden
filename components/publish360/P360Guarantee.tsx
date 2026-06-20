import { DEMO_HREF } from "./p360-config";

export function P360Guarantee() {
  return (
    <section className="bg-p360-brand py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
          The no-commitment guarantee
        </span>
        <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
          See your app before you pay for anything
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          Eden Interactive will build a working demo of your branded app — populated with a
          sample of your actual catalogue, applying your branding — before any commercial
          agreement is signed. You see your app, in your colours, with your content, on your
          phone. If it is not what you expected, you walk away without having paid anything.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              heading: "Your catalogue",
              body: "Demo built from your actual titles and cover art — not placeholder content.",
            },
            {
              heading: "Your brand",
              body: "Your logo, your colour scheme, your app name on the store listing.",
            },
            {
              heading: "Zero commitment",
              body: "No contract. No deposit. Walk away if it is not right for you.",
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 text-left"
            >
              <h3 className="font-semibold text-white">{heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
            </div>
          ))}
        </div>

        <a
          href={DEMO_HREF}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-p360-brand transition-colors hover:bg-white/90"
        >
          Request your free demo
        </a>
      </div>
    </section>
  );
}
