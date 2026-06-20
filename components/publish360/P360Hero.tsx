import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { DEMO_HREF } from "./p360-config";
import Image from "next/image";

export function P360Hero() {
  return (
    <section className="relative overflow-hidden bg-p360-surface">
      {/* Decorative top border stripe */}
      <div className="h-1 w-full bg-p360-brand" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-p360-brand/30 bg-p360-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-p360-brand">
            Publish360 — White Label App
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-tight tracking-tight text-p360-ink sm:text-6xl">
            Your readers.
            <br />
            Your data.
            <br />
            Your margin.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-xl leading-relaxed text-p360-muted">
            A fully branded digital reading and listening platform — without surrendering your
            customer relationship to a marketplace. eBooks, audiobooks, video, and courses.
            Live in{" "}
            <strong className="font-semibold text-p360-ink">18–22 weeks.</strong>
          </p>

          <p className="mt-3 text-base font-medium text-p360-brand">
            See your app, with your books, in your colours — before committing a single pound.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEMO_HREF}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-p360-brand text-white hover:bg-p360-brand/90",
              )}
            >
              Request a free demo
            </a>
            <NsLink
              href="#how-it-works"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-p360-border text-p360-ink hover:bg-p360-panel",
              )}
            >
              How it works
            </NsLink>
          </div>

          {/* Proof points */}
          <ul className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-8">
            {[
              "No revenue share, ever",
              "18–22 weeks to launch",
              "No-commitment demo",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-p360-muted">
                <span className="size-1.5 shrink-0 rounded-full bg-p360-brand" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-p360-border bg-p360-panel shadow-xl">
            <Image
              src="/publish360/hero-app-mockup.png"
              alt="Publish360 reader app — unified library of eBooks and audiobooks"
              width={480}
              height={640}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
