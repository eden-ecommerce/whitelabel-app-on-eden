import type { LucideIcon } from "lucide-react";

type BookingTypeCardProps = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  useCases: string[];
  highlight?: boolean;
};

export function BookingTypeCard({
  icon: Icon,
  name,
  tagline,
  description,
  useCases,
  highlight,
}: BookingTypeCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 ${
        highlight
          ? "border-primary bg-primary/5"
          : "border-border bg-card"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-xs font-medium text-primary">{tagline}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {useCases.map((uc) => (
          <li
            key={uc}
            className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {uc}
          </li>
        ))}
      </ul>
    </div>
  );
}
