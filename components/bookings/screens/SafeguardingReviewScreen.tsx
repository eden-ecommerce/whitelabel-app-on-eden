"use client";

import { useState } from "react";
import { AppBar, BottomBar, ScreenRoot } from "@components/event-manager/screens/chrome";
import { Shield, Check, Flag } from "lucide-react";

type Status = "idle" | "flagged" | "done";

export function SafeguardingReviewScreen() {
  const [status, setStatus] = useState<Status>("idle");

  return (
    <ScreenRoot>
      <AppBar title="Session review" subtitle="Post-meeting check-in" />
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

        {/* Session summary */}
        <div className="rounded-xl border border-[#e0e0e0] bg-[#f9f9f9] p-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-[#999]">Completed session</p>
          <p className="mt-1 text-[11px] font-semibold text-[#111]">Prayer & Pastoral Care</p>
          <p className="text-[10px] text-[#555]">Today · 14:30 · 30 minutes</p>
          <p className="text-[10px] text-[#555]">With: Margaret H. and David C.</p>
        </div>

        {/* Safeguarding icon */}
        <div className="flex items-center gap-2">
          <Shield className="size-4 text-[#2D8C3C]" />
          <p className="text-[10px] font-medium text-[#333]">How did the session go?</p>
        </div>

        {/* State */}
        {status === "idle" && (
          <div className="space-y-2">
            <button
              onClick={() => setStatus("done")}
              className="flex w-full items-center gap-2 rounded-xl border border-[#2D8C3C] bg-[#2D8C3C]/5 px-4 py-3 text-left text-[11px] font-medium text-[#2D8C3C]"
            >
              <Check className="size-4 shrink-0" />
              Session went well — nothing to report
            </button>
            <button
              onClick={() => setStatus("flagged")}
              className="flex w-full items-center gap-2 rounded-xl border border-[#d97706] bg-amber-50 px-4 py-3 text-left text-[11px] font-medium text-amber-700"
            >
              <Flag className="size-4 shrink-0" />
              Flag this session for coordinator review
            </button>
          </div>
        )}

        {status === "flagged" && (
          <div className="space-y-2">
            <textarea
              rows={4}
              placeholder="Briefly describe what happened..."
              className="w-full rounded-xl border border-[#d97706] bg-white p-3 text-[10px] text-[#333] placeholder:text-[#bbb] focus:outline-none"
            />
            <button
              onClick={() => setStatus("done")}
              className="w-full rounded-xl bg-amber-500 py-2.5 text-[11px] font-semibold text-white"
            >
              Submit flag for review
            </button>
          </div>
        )}

        {status === "done" && (
          <div className="flex flex-col items-center gap-2 py-4 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-[#2D8C3C] text-white">
              <Check className="size-6" />
            </span>
            <p className="text-[11px] font-semibold text-[#111]">Thank you</p>
            <p className="text-[10px] text-[#555]">
              {status === "done"
                ? "Your response has been recorded."
                : "Your flag has been sent to the coordinator."}
            </p>
          </div>
        )}
      </div>
      <BottomBar />
    </ScreenRoot>
  );
}
