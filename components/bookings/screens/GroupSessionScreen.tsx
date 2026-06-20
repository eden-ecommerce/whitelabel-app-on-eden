"use client";

import { useState } from "react";
import { Screen, AppHeader, TabBar } from "@components/event-manager/screens/chrome";
import { Users, Clock, Check } from "lucide-react";

const SESSIONS = [
  { id: "tue-am", day: "Tue 8 July", time: "10:00–11:30", spots: 2, capacity: 6 },
  { id: "wed-pm", day: "Wed 9 July", time: "14:00–15:30", spots: 0, capacity: 6 },
  { id: "fri-am", day: "Fri 11 July", time: "10:00–11:30", spots: 4, capacity: 6 },
];

export function GroupSessionScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const [registered, setRegistered] = useState(false);

  if (registered && selected) {
    const sess = SESSIONS.find((s) => s.id === selected)!;
    return (
      <Screen>
        <AppHeader title="Supervision group" subtitle="Monthly cohort session" />
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#2D8C3C] text-white">
            <Check className="size-7" />
          </span>
          <p className="font-semibold text-[#111]">You&apos;re registered</p>
          <p className="text-[10px] leading-relaxed text-[#555]">
            {sess.day} · {sess.time}
            <br />A calendar invite is on its way.
          </p>
          <button
            onClick={() => { setRegistered(false); setSelected(null); }}
            className="mt-2 rounded-full border border-[#2D8C3C] px-4 py-1.5 text-[10px] font-semibold text-[#2D8C3C]"
          >
            Back
          </button>
        </div>
        <TabBar />
      </Screen>
    );
  }

  return (
    <Screen>
      <AppHeader title="Supervision group" subtitle="Monthly cohort session" />
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <p className="mb-3 text-[10px] leading-relaxed text-[#555]">
          Choose a session time. Places are limited — register now to secure yours.
        </p>
        <div className="space-y-2">
          {SESSIONS.map((sess) => {
            const full = sess.spots === 0;
            const isSel = selected === sess.id;
            return (
              <button
                key={sess.id}
                disabled={full}
                onClick={() => setSelected(isSel ? null : sess.id)}
                className={`w-full rounded-xl border p-3 text-left transition-colors
                  ${full
                    ? "border-[#e0e0e0] opacity-50"
                    : isSel
                      ? "border-[#2D8C3C] bg-[#2D8C3C]/5"
                      : "border-[#e0e0e0] hover:border-[#2D8C3C]"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#111]">{sess.day}</span>
                  {full ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-medium text-amber-700">Waitlist</span>
                  ) : (
                    <span className="rounded-full bg-[#e8f5e9] px-2 py-0.5 text-[9px] font-medium text-[#2D8C3C]">{sess.spots} left</span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-3 text-[10px] text-[#555]">
                  <span className="flex items-center gap-1"><Clock className="size-3" />{sess.time}</span>
                  <span className="flex items-center gap-1"><Users className="size-3" />{sess.capacity} max</span>
                </div>
              </button>
            );
          })}
        </div>
        {selected && (
          <button
            onClick={() => setRegistered(true)}
            className="mt-4 w-full rounded-xl bg-[#2D8C3C] py-2.5 text-[11px] font-semibold text-white"
          >
            Register for this session
          </button>
        )}
      </div>
      <TabBar />
    </Screen>
  );
}
