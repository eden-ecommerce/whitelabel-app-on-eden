import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { PhoneMockup } from "./PhoneMockup";
import { DEMO_HREF, emHref } from "./em-config";

type Img = { src: string; alt: string };

type HeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  mockup: Img;
  secondaryMockup?: Img;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  mockup,
  secondaryMockup,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/40 to-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NsLink href={DEMO_HREF} className={cn(buttonVariants({ size: "lg" }))}>
              Book a demo
            </NsLink>
            <NsLink
              href={emHref("/pricing")}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View pricing
            </NsLink>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <PhoneMockup src={mockup.src} alt={mockup.alt} className="z-10" />
          {secondaryMockup ? (
            <PhoneMockup
              src={secondaryMockup.src}
              alt={secondaryMockup.alt}
              className="-ml-10 mt-16 hidden max-w-[210px] opacity-95 sm:block"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
