"use client";

import { usePathname } from "next/navigation";
import { NsLink } from "@components/ns-link";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@lib/utils";
import { EM_NAV, EM_PATH, DEMO_HREF } from "./em-config";

export function SubNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <NsLink
          href={EM_PATH}
          className="font-serif text-base font-semibold tracking-tight text-foreground"
        >
          Christian360 <span className="text-primary">Events</span>
        </NsLink>

        <ul className="hidden items-center gap-1 md:flex">
          {EM_NAV.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <NsLink
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </NsLink>
              </li>
            );
          })}
        </ul>

        <NsLink
          href={DEMO_HREF}
          className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
        >
          Book a demo
        </NsLink>
      </nav>
    </div>
  );
}
