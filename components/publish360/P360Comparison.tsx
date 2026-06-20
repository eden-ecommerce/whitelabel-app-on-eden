import { Check, X, Minus } from "lucide-react";

type CompRow = {
  dimension: string;
  marketplace: string;
  custom: string;
  p360: string;
};

const ROWS: CompRow[] = [
  {
    dimension: "Commission on sales",
    marketplace: "15–70%",
    custom: "None",
    p360: "None",
  },
  {
    dimension: "Time to market",
    marketplace: "Immediate listing",
    custom: "12–18 months",
    p360: "18–22 weeks",
  },
  {
    dimension: "Reader relationship",
    marketplace: "Owned by platform",
    custom: "Publisher's",
    p360: "Publisher's",
  },
  {
    dimension: "Reader data & analytics",
    marketplace: "Royalty report only",
    custom: "If built",
    p360: "Full, chapter-level",
  },
  {
    dimension: "Cost structure",
    marketplace: "% per sale, forever",
    custom: "Open-ended build cost",
    p360: "Fixed setup fee",
  },
  {
    dimension: "DRM included",
    marketplace: "N/A",
    custom: "Requires integration",
    p360: "Readium LCP included",
  },
  {
    dimension: "Ongoing maintenance",
    marketplace: "Platform's",
    custom: "Publisher-funded",
    p360: "Included in licence",
  },
  {
    dimension: "Branding",
    marketplace: "Marketplace brand",
    custom: "Publisher's",
    p360: "Publisher's",
  },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  return (
    <td
      className={
        highlight
          ? "bg-p360-accent px-5 py-4 text-sm font-medium text-p360-brand"
          : "px-5 py-4 text-sm text-p360-muted"
      }
    >
      {value}
    </td>
  );
}

export function P360Comparison() {
  return (
    <section className="bg-p360-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            How it compares
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
            A third option — between the marketplace and the custom build
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-p360-border">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-p360-border bg-p360-panel">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-p360-muted">
                  Dimension
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-p360-muted">
                  Major marketplace
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-p360-muted">
                  Custom build
                </th>
                <th className="bg-p360-accent px-5 py-4 text-xs font-semibold uppercase tracking-widest text-p360-brand">
                  Publish360
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.dimension}
                  className={i % 2 === 0 ? "border-b border-p360-border" : "border-b border-p360-border bg-p360-panel/40"}
                >
                  <td className="px-5 py-4 text-sm font-medium text-p360-ink">
                    {row.dimension}
                  </td>
                  <Cell value={row.marketplace} />
                  <Cell value={row.custom} />
                  <Cell value={row.p360} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-p360-muted">
          Publish360 does not replace marketplace distribution — publishers can sell through
          both simultaneously. It adds a direct channel the publisher controls.
        </p>
      </div>
    </section>
  );
}
