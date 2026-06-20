import { NsLink } from "@components/ns-link";
import { ArrowRight, Church, TreePine, Tent } from "lucide-react";
import { emHref } from "./em-config";

const AUDIENCES = [
  {
    icon: Tent,
    tag: "Large-scale",
    title: "Conferences & Festivals",
    description:
      "Multi-stage programmes, live translation and click-and-collect catering for thousands of delegates.",
    href: emHref("/conferences"),
  },
  {
    icon: Church,
    tag: "Weekly life",
    title: "Churches",
    description:
      "An affordable, easy-to-run app with a searchable talks archive and notifications that keep your church connected.",
    href: emHref("/churches"),
  },
  {
    icon: TreePine,
    tag: "Year-round",
    title: "Retreats & Holiday Parks",
    description:
      "Arrival-date filtering and on-site maintenance requests that make every guest's stay feel personal.",
    href: emHref("/retreats"),
  },
];

export function AudienceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {AUDIENCES.map(({ icon: Icon, tag, title, description, href }) => (
        <NsLink
          key={href}
          href={href}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tag}
          </span>
          <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Explore
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </NsLink>
      ))}
    </div>
  );
}
