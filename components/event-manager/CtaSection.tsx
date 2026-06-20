import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { DEMO_HREF, emHref } from "./em-config";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export function CtaSection({
  title = "See Christian360 Events in action",
  description = "Book a personalised demo and we'll show you how to run your next gathering — conference, church or retreat — from one app.",
}: CtaSectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <NsLink
            href={DEMO_HREF}
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Book a demo
          </NsLink>
          <NsLink
            href={emHref("/case-studies")}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
            )}
          >
            Read case studies
          </NsLink>
        </div>
      </div>
    </section>
  );
}
