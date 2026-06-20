"use client";

import { useState } from "react";
import { Camera, Check, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@lib/utils";
import { Screen, AppHeader, AppBody } from "./chrome";

const STEPS = ["Submitted", "In progress", "Resolved"];

export function MaintenanceRequestScreen() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Screen>
      <AppHeader title="Report an Issue" subtitle="Lodge 24" />

      <AppBody className="flex flex-col gap-3 p-3">
        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Category
          </span>
          <div className="mt-1 flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-foreground">
            Plumbing
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </div>
        </label>

        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Describe the issue
          </span>
          <div className="mt-1 rounded-lg border border-border bg-card px-3 py-2 text-[11px] leading-snug text-foreground">
            The tap in the bathroom is dripping constantly and won&apos;t turn off fully.
          </div>
        </label>

        <div className="flex items-center gap-2">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-dashed border-border bg-muted text-muted-foreground">
            <Camera className="size-4" />
          </div>
          <div className="size-12 overflow-hidden rounded-lg bg-primary/10">
            <div className="flex h-full items-center justify-center text-[9px] font-medium text-primary">
              photo.jpg
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-2 text-[11px] font-medium text-foreground">
          <MapPin className="size-3.5 text-primary" />
          Lodge 24 · Bathroom
        </div>

        {/* Status timeline */}
        <div className="rounded-xl border border-border bg-card p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Status
          </p>
          <ol className="mt-2 flex flex-col gap-2">
            {STEPS.map((step, i) => {
              const done = submitted ? i <= 1 : false;
              return (
                <li key={step} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex size-4 items-center justify-center rounded-full",
                      done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {done ? <Check className="size-2.5" /> : <span className="size-1.5 rounded-full bg-current" />}
                  </span>
                  <span className={cn("text-[11px]", done ? "font-semibold text-foreground" : "text-muted-foreground")}>
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </AppBody>

      <div className="shrink-0 border-t border-border bg-card p-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="w-full rounded-full bg-primary py-2.5 text-xs font-semibold text-primary-foreground"
        >
          {submitted ? "Request submitted ✓" : "Submit Request"}
        </button>
      </div>
    </Screen>
  );
}
