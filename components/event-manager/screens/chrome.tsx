import type { ReactNode } from "react";
import {
  Signal,
  Wifi,
  BatteryFull,
  Home,
  CalendarDays,
  LayoutGrid,
  User,
} from "lucide-react";
import { cn } from "@lib/utils";

/** iOS-style status bar pinned to the top of every screen. */
export function StatusBar({ light }: { light?: boolean }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-between px-4 pb-1 pt-2 text-[10px] font-semibold",
        light ? "text-primary-foreground" : "text-foreground",
      )}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Signal className="size-3" />
        <Wifi className="size-3" />
        <BatteryFull className="size-3.5" />
      </div>
    </div>
  );
}

/** Green app header bar with a title and optional trailing slot. */
export function AppHeader({
  title,
  subtitle,
  trailing,
}: {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
}) {
  return (
    <div className="shrink-0 bg-primary px-4 pb-3 pt-1 text-primary-foreground">
      <StatusBar light />
      <div className="flex items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold leading-tight">{title}</h4>
          {subtitle ? (
            <p className="text-[11px] leading-tight text-primary-foreground/80">{subtitle}</p>
          ) : null}
        </div>
        {trailing}
      </div>
    </div>
  );
}

/** Scrollable body region with a hidden scrollbar so it reads like a real phone. */
export function AppBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

type TabId = "home" | "schedule" | "explore" | "profile";

/** Fixed bottom tab bar. */
export function TabBar({ active = "home" }: { active?: TabId }) {
  const tabs: { id: TabId; label: string; icon: typeof Home }[] = [
    { id: "home", label: "Home", icon: Home },
    { id: "schedule", label: "Schedule", icon: CalendarDays },
    { id: "explore", label: "Explore", icon: LayoutGrid },
    { id: "profile", label: "Me", icon: User },
  ];
  return (
    <div className="flex shrink-0 items-center justify-around border-t border-border bg-card px-2 pb-2 pt-1.5">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const on = tab.id === active;
        return (
          <div
            key={tab.id}
            className={cn(
              "flex flex-col items-center gap-0.5 text-[9px] font-medium",
              on ? "text-primary" : "text-muted-foreground",
            )}
          >
            <Icon className="size-4" />
            <span>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Root wrapper that fills the phone frame with a vertical column layout. */
export function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex h-full w-full flex-col bg-card", className)}>{children}</div>;
}
