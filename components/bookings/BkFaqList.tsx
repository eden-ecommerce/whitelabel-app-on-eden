type FaqItem = { q: string; a: string };

export function BkFaqList({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-border">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <dt className="font-medium text-foreground">{item.q}</dt>
            <span
              aria-hidden
              className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
        </details>
      ))}
    </dl>
  );
}
