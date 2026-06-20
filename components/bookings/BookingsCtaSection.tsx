import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { BOOKINGS_DEMO_HREF } from "./bk-config";

export function BookingsCtaSection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
          Stop the moment from passing.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80">
          A booking link on your website and a QR code on your noticeboard mean anyone can take the first step toward your church — without having to knock on a door or find a phone number.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <NsLink
            href={BOOKINGS_DEMO_HREF}
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
            )}
          >
            Get started free
          </NsLink>
          <NsLink
            href="mailto:hello@eden.co.uk"
            className={cn(
              buttonVariants({ size: "lg" }),
              "border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            Talk to us first
          </NsLink>
        </div>
      </div>
    </section>
  );
}
