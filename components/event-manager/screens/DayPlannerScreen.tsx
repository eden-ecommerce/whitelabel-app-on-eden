"use client";

import { useState } from "react";
import { Bookmark, MapPin } from "lucide-react";
import { cn } from "@lib/utils";
import { Screen, AppHeader, AppBody, TabBar } from "./chrome";

const FILTERS = ["All", "Main Stage", "Seminars", "Worship", "Kids"];

const SESSIONS = [
  { time: "09:00", title: "Morning Celebration", venue: "Main Auditorium", tag: "Main Stage" },
  { time: "10:30", title: "Bible Teaching: Romans", venue: "Big Top", tag: "Seminars" },
  { time: "12:00", title: "Lunch & Fellowship", venue: "Food Village", tag: "Main Stage" },
  { time: "14:00", title: "Parenting Seminar", venue: "Seminar Room B", tag: "Seminars" },
  { time: "16:00", title: "Worship Workshop", venue: "Venue 3", tag: "Worship" },
  { time: "17:30", title: "Kids Big Top", venue: "Kids Arena", tag: "Kids" },
  { time: "19:30", title: "Evening Worship", venue: "Main Auditorium", tag: "Worship" },
];

export function DayPlannerScreen() {
  const [filter, setFilter] = useState("All");
  const [saved, setSaved] = useState<Set<string>>(new Set(["10:30"]));

  const sessions = filter === "All" ? SESSIONS : SESSIONS.filter((s) => s.tag === filter);

  function toggleSave(time: string) {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(time)) next.delete(time);
      else next.add(time);
      return next;
    });
  }

  return (
    <Screen>
      <AppHeader title="Today&apos;s Programme" subtitle="Saturday 12 July" />

      <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-border bg-card px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors",
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <AppBody className="flex flex-col gap-2 p-3">
        {sessions.map((s) => (
          <div key={s.time} className="flex gap-2 rounded-xl border border-border bg-card p-2.5 shadow-sm">
            <div className="w-9 shrink-0 text-[11px] font-bold text-primary">{s.time}</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">{s.title}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground">
                <MapPin className="size-2.5" />
                {s.venue}
              </p>
            </div>
            <button
              type="button"
              aria-label={saved.has(s.time) ? "Remove from agenda" : "Save to agenda"}
              onClick={() => toggleSave(s.time)}
              className="self-start"
            >
              <Bookmark
                className={cn(
                  "size-3.5",
                  saved.has(s.time) ? "fill-primary text-primary" : "text-muted-foreground",
                )}
              />
            </button>
          </div>
        ))}
      </AppBody>

      <TabBar active="schedule" />
    </Screen>
  );
}
