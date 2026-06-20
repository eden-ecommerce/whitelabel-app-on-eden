"use client";

import { useState } from "react";
import { AppHeader, TabBar, Screen } from "@components/event-manager/screens/chrome";
import { Check } from "lucide-react";

const DAYS = [
  { day: "Monday", slots: ["9:00–11:00", "14:00–16:00"] },
  { day: "Tuesday", slots: ["10:00–12:00"] },
  { day: "Wednesday", slots: ["14:00–16:00", "19:00–21:00"] },
  { day: "Thursday", slots: [] },
  { day: "Friday", slots: ["9:00–11:00"] },
];

export function VolunteerMagicLinkScreen() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["Monday-9:00–11:00", "Wednesday-19:00–21:00"]),
  );
  const [submitted, setSubmitted] = useState(false);

  const toggle = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  if (submitted) {
    return (
      <Screen>
        <AppHeader title="Your availability" subtitle="Week of 7 July" />
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#2D8C3C] text-white">
            <Check className="size-7" />
          </span>
          <p className="font-semibold text-[#111]">Availability saved</p>
          <p className="text-[10px] leading-relaxed text-[#555]">
            {selected.size} slot{selected.size !== 1 ? "s" : ""} submitted for the week of 7 July.
            <br />We&apos;ll be in touch if you&apos;re assigned a session.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 rounded-full border border-[#2D8C3C] px-4 py-1.5 text-[10px] font-semibold text-[#2D8C3C]"
          >
            Edit
          </button>
        </div>
        <TabBar />
      </Screen>
    );
  }

  return (
    <Screen>
      <AppHeader title="Your availability" subtitle="Week of 7 July" />
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <p className="mb-3 text-[10px] leading-relaxed text-[#555]">
          Hi Margaret — tap the times you&apos;re free this week. No account needed.
        </p>
        <div className="space-y-3">
          {DAYS.map(({ day, slots }) => (
            <div key={day}>
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-[#999]">{day}</p>
              {slots.length === 0 ? (
                <p className="text-[9px] text-[#bbb]">No slots available</p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {slots.map((slot) => {
                    const key = `${day}-${slot}`;
                    const on = selected.has(key);
                    return (
                      <button
                        key={key}
                        onClick={() => toggle(key)}
                        className={`flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-medium transition-colors
                          ${on
                            ? "border-[#2D8C3C] bg-[#2D8C3C] text-white"
                            : "border-[#e0e0e0] text-[#444] hover:border-[#2D8C3C]"
                          }`}
                      >
                        {on && <Check className="size-2.5" />}
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="mt-5 w-full rounded-xl bg-[#2D8C3C] py-2.5 text-[11px] font-semibold text-white"
        >
          Submit availability — {selected.size} slot{selected.size !== 1 ? "s" : ""}
        </button>
      </div>
      <TabBar />
    </Screen>
  );
}
