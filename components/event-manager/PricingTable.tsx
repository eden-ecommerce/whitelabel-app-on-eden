import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { Check } from "lucide-react";
import { DEMO_HREF } from "./em-config";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Church",
    price: "£29",
    cadence: "per month",
    description: "For local churches that want a friendly, branded app without the fuss.",
    features: [
      "Branded iOS & Android app",
      "Weekly planner & events",
      "Talks archive CMS",
      "Push notifications",
      "Up to 1,000 members",
    ],
    cta: "Start with Church",
  },
  {
    name: "Growth",
    price: "£99",
    cadence: "per month",
    description: "For multi-site churches and mid-size events that need more reach.",
    features: [
      "Everything in Church",
      "Multi-site & multi-venue",
      "Click & collect ordering",
      "In-app giving",
      "Up to 10,000 members",
      "Priority support",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "let's talk",
    description: "For major conferences, festivals and holiday parks at full scale.",
    features: [
      "Everything in Growth",
      "Unlimited delegates",
      "Live translation",
      "Arrival-date filtering",
      "Maintenance requests",
      "Dedicated account manager",
    ],
    cta: "Talk to sales",
  },
];

export function PricingTable() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {TIERS.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "flex flex-col rounded-3xl border bg-card p-8",
            tier.highlighted
              ? "border-primary shadow-lg ring-1 ring-primary"
              : "border-border",
          )}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {tier.name}
            </h3>
            {tier.highlighted ? (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            ) : null}
          </div>

          <div className="mt-5 flex items-baseline gap-1.5">
            <span className="font-serif text-4xl font-semibold text-foreground">
              {tier.price}
            </span>
            <span className="text-sm text-muted-foreground">{tier.cadence}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {tier.description}
          </p>

          <ul className="mt-6 flex flex-1 flex-col gap-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <NsLink
            href={DEMO_HREF}
            className={cn(
              buttonVariants({
                variant: tier.highlighted ? "default" : "outline",
                size: "lg",
              }),
              "mt-8 w-full",
            )}
          >
            {tier.cta}
          </NsLink>
        </div>
      ))}
    </div>
  );
}
