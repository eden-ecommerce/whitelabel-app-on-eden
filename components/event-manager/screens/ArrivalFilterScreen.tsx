"use client";

import { useState } from "react";
import { MapPin, Bookmark } from "lucide-react";
import { cn } from "@lib/utils";
import { Screen, AppHeader, AppBody, TabBar } from "./chrome";

const DAYS = [
  { id: "mon", label: "Mon", date: "8" },
  { id: "tue", label: "Tue", date: "9" },
  { id: "wed", label: "Wed", date: "10" },
  { id: "thu", label: "Thu", date: "11" },
  { id: "fri", label: "Fri", date: "12" },
];

const ACTIVITIES: Record<string, { time: string; title: string; venue: string }[]> = {
  mon: [
    { time: "16:00", title: "Welcome & Check-in", venue: "Reception" },
    { time: "18:30", title: "Welcome BBQ", venue: "Lakeside Lawn" },
    { time: "20:00", title: "Evening Worship", venue: "Big Marquee" },
  ],
  tue: [
    { time: "09:30", title: "Morning Devotions", venue: "Chapel" },
    { time: "11:00", title: "Family Worship", venue: "Big Marquee" },
    { time: "14:00", title: "Lakeside Walk", venue: "Meet at Jetty" },
    { time: "16:30", title: "Kids Club", venue: "Activity Barn" },
  ],
  wed: [
    { time: "09:30", title: "Morning Devotions", venue: "Chapel" },
    { time: "10:30", title: "Seminar: Rest & Rhythm", venue: "Lodge Room" },
    { time: "19:30", title: "Quiz Night", venue: "The Barn" },
  ],
  thu: [
    { time: "10:00", title: "Craft Workshop", venue: "Activity Barn" },
    { time: "15:00", title: "Afternoon Tea", venue: "Café" },
    { time: "20:00", title: "Worship Night", venue: "Big Marquee" },
  ],
  fri: [
    { time: "09:30", title: "Closing Celebration", venue: "Big Marquee" },
    { time: "11:00", title: "Check-out", venue: "Reception" },
  ],
};

export function ArrivalFilterScreen() {
  const [day, setDay] = useState("tue");
  const activities = ACTIVITIES[day];

  return (
    <Screen>
      <AppHeader title="Your Stay" subtitle="Arriving Mon 8 — Leaving Fri 12" />

      <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-border bg-card px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {DAYS.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setDay(d.id)}
            className={cn(
              "flex shrink-0 flex-col items-center rounded-xl px-2.5 py-1.5 text-[10px] font-semibold transition-colors",
              day === d.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
            )}
          >
            <span>{d.label}</span>
            <span className="text-sm font-bold leading-none">{d.date}</span>
          </button>
        ))}
      </div>

      <div className="shrink-0 bg-accent/40 px-3 py-1.5 text-center text-[10px] font-medium text-primary">
        Showing activities during your stay
      </div>

      <AppBody className="flex flex-col gap-2 p-3">
        {activities.map((a) => (
          <div key={a.time + a.title} className="flex gap-2 rounded-xl border border-border bg-card p-2.5 shadow-sm">
            <div className="w-9 shrink-0 text-[11px] font-bold text-primary">{a.time}</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">{a.title}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground">
                <MapPin className="size-2.5" />
                {a.venue}
              </p>
            </div>
            <Bookmark className="size-3.5 self-start text-muted-foreground" />
          </div>
        ))}
      </AppBody>

      <TabBar active="schedule" />
    </Screen>
  );
}
