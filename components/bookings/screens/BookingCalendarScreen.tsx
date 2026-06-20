"use client";

import { useState } from "react";
import { AppHeader, TabBar, Screen } from "@components/event-manager/screens/chrome";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTH_DATES = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, null, null, null],
];
const AVAILABLE = new Set([3, 8, 9, 10, 15, 16, 17, 22, 23, 24]);
const TIMES = ["10:00", "10:30", "11:00", "14:00", "14:30", "15:00"];

export function BookingCalendarScreen() {
  const [selectedDate, setSelectedDate] = useState<number | null>(9);
  const [selectedTime, setSelectedTime] = useState<string | null>("10:30");
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <Screen>
        <AppHeader title="Prayer Ministry" subtitle="Book a slot" />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-[#2D8C3C] text-white">
            <Check className="size-8" />
          </span>
          <p className="font-semibold text-[#111]">Booking confirmed</p>
          <p className="text-[10px] leading-relaxed text-[#555]">
            Wednesday 9 July · {selectedTime}
            <br />A calendar invite has been sent to your email.
          </p>
          <button
            onClick={() => { setConfirmed(false); setSelectedTime("10:30"); setSelectedDate(9); }}
            className="mt-2 rounded-full bg-[#2D8C3C] px-5 py-2 text-[11px] font-semibold text-white"
          >
            Book another
          </button>
        </div>
        <TabBar />
      </Screen>
    );
  }

  return (
    <Screen>
      <AppHeader title="Prayer Ministry" subtitle="Book a slot" />
      <div className="flex-1 overflow-y-auto px-3 py-3 text-[#111]">
        {/* Month header */}
        <div className="mb-2 flex items-center justify-between">
          <button aria-label="Previous month"><ChevronLeft className="size-4 text-[#555]" /></button>
          <span className="text-[11px] font-semibold">July 2025</span>
          <button aria-label="Next month"><ChevronRight className="size-4 text-[#555]" /></button>
        </div>
        {/* Day labels */}
        <div className="mb-1 grid grid-cols-7 gap-0.5">
          {DAYS.map((d) => (
            <span key={d} className="text-center text-[8px] font-medium text-[#999]">{d}</span>
          ))}
        </div>
        {/* Calendar grid */}
        <div className="space-y-0.5">
          {MONTH_DATES.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-0.5">
              {week.map((d, di) => {
                if (!d) return <span key={di} />;
                const avail = AVAILABLE.has(d);
                const sel = selectedDate === d;
                return (
                  <button
                    key={di}
                    disabled={!avail}
                    onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                    className={`mx-auto flex size-7 items-center justify-center rounded-full text-[10px] font-medium transition-colors
                      ${sel ? "bg-[#2D8C3C] text-white" : avail ? "hover:bg-[#e8f5e9] text-[#111]" : "text-[#ccc]"}`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Time slots */}
        {selectedDate && (
          <div className="mt-4">
            <p className="mb-2 text-[10px] font-semibold text-[#555]">
              Available times — {selectedDate} July
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {TIMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`rounded-lg border py-1.5 text-[10px] font-medium transition-colors
                    ${selectedTime === t
                      ? "border-[#2D8C3C] bg-[#2D8C3C] text-white"
                      : "border-[#e0e0e0] text-[#333] hover:border-[#2D8C3C]"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Confirm button */}
        {selectedTime && (
          <button
            onClick={() => setConfirmed(true)}
            className="mt-4 w-full rounded-xl bg-[#2D8C3C] py-2.5 text-[11px] font-semibold text-white"
          >
            Confirm — {selectedDate} July · {selectedTime}
          </button>
        )}
      </div>
      <TabBar />
    </Screen>
  );
}
