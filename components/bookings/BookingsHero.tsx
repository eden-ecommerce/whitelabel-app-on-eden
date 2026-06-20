import type { ReactNode } from "react";
import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { PhoneMockup } from "@components/event-manager/PhoneMockup";
import { BOOKINGS_DEMO_HREF } from "./bk-config";

type BookingsHeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  screen: ReactNode;
  secondaryScreen?: ReactNode;
};

export function BookingsHero({
  eyebrow,
  headline,
  subheadline,
  screen,
  secondaryScreen,
}: BookingsHeroProps) {
  return (
    <section className="overflow-hidden bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        {/* Text */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NsLink
              href={BOOKINGS_DEMO_HREF}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get started free
            </NsLink>
            <NsLink
              href="#how-it-works"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              See how it works
            </NsLink>
          </div>
        </div>

        {/* Phone mockup(s) */}
        <div className="relative flex items-center justify-center">
          <PhoneMockup className="z-10">{screen}</PhoneMockup>
          {secondaryScreen && (
            <PhoneMockup className="-ml-10 mt-16 hidden max-w-[210px] opacity-95 sm:block">
              {secondaryScreen}
            </PhoneMockup>
          )}
        </div>
      </div>
    </section>
  );
}
