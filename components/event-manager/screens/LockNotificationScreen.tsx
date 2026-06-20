import { CalendarDays } from "lucide-react";
import { Screen } from "./chrome";

/** A phone lock screen showing a branded push notification. */
export function LockNotificationScreen() {
  return (
    <Screen className="bg-primary">
      <div className="flex h-full w-full flex-col items-center px-4 pt-10 text-primary-foreground">
        <p className="text-xs font-medium text-primary-foreground/80">Saturday 12 July</p>
        <p className="mt-1 text-6xl font-light tracking-tight">9:41</p>

        {/* Notification banner */}
        <div className="mt-10 w-full rounded-2xl bg-card/95 p-3 text-foreground shadow-lg backdrop-blur">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CalendarDays className="size-4" />
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Christian360 Events
            </span>
            <span className="ml-auto text-[10px] text-muted-foreground">now</span>
          </div>
          <p className="mt-2 text-xs font-bold text-foreground">Worship starts in 15 minutes</p>
          <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
            Main Stage — make your way over now.
          </p>
        </div>

        <div className="mt-3 w-full rounded-2xl bg-card/80 p-3 text-foreground shadow-lg backdrop-blur">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CalendarDays className="size-4" />
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Christian360 Events
            </span>
            <span className="ml-auto text-[10px] text-muted-foreground">8m ago</span>
          </div>
          <p className="mt-2 text-xs font-bold text-foreground">Prayer request added</p>
          <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
            Tap to pray with the team this morning.
          </p>
        </div>

        <div className="mt-auto mb-6 flex flex-col items-center gap-2">
          <div className="h-1 w-24 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </Screen>
  );
}
