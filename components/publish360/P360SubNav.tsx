"use client";

import { NsLink } from "@components/ns-link";
import { cn } from "@lib/utils";
import { usePathname } from "next/navigation";
import { P360_PATH, p360Href } from "./p360-config";

type NavItem = { label: string; href: string; exact?: boolean };

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: P360_PATH, exact: true },
  { label: "Features", href: p360Href("/features") },
  { label: "Pricing", href: p360Href("/pricing") },
  { label: "How it works", href: p360Href("/how-it-works") },
  { label: "Book a demo", href: p360Href("/demo") },
];

export function P360SubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-30 border-b border-p360-border bg-p360-surface/95 backdrop-blur-sm"
      aria-label="Publish360 navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <span className="text-sm font-bold tracking-tight text-p360-ink">
          Publish<span className="text-p360-brand">360</span>
        </span>
        <div className="flex items-center overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            return (
              <NsLink
                key={item.label}
                href={item.href}
                className={cn(
                  "shrink-0 whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-p360-brand"
                    : "text-p360-ink/70 hover:text-p360-ink",
                )}
              >
                {item.label}
              </NsLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
