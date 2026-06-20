"use client";

import { useState } from "react";
import { Search, Play } from "lucide-react";
import { cn } from "@lib/utils";
import { Screen, AppHeader, AppBody, TabBar } from "./chrome";

const CHIPS = ["All", "Series", "Speakers", "Recent"];

const TALKS = [
  { title: "Faith in the Wilderness", speaker: "Sarah Doyle", len: "38 min", progress: 0.45 },
  { title: "The Beatitudes · Pt 3", speaker: "Tom Adeyemi", len: "42 min" },
  { title: "Living Generously", speaker: "Ruth Bennett", len: "29 min" },
  { title: "Hope That Holds", speaker: "David Clark", len: "35 min" },
  { title: "Rooted in Grace", speaker: "Sarah Doyle", len: "31 min" },
];

export function TalksArchiveScreen() {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState("All");

  const talks = TALKS.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.speaker.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Screen>
      <AppHeader title="Talks Archive" />

      <div className="shrink-0 border-b border-border bg-card px-3 py-2">
        <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search talks, speakers"
            className="w-full bg-transparent text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <div className="mt-2 flex gap-1.5">
          {CHIPS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setChip(c)}
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors",
                chip === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <AppBody className="flex flex-col gap-2 p-3">
        {talks.map((t) => (
          <div key={t.title} className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-2.5">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Play className="size-4 fill-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">{t.title}</p>
              <p className="text-[10px] text-muted-foreground">
                {t.speaker} · {t.len}
              </p>
              {t.progress ? (
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${t.progress * 100}%` }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {talks.length === 0 ? (
          <p className="mt-6 text-center text-[11px] text-muted-foreground">No talks found.</p>
        ) : null}
      </AppBody>

      <TabBar active="explore" />
    </Screen>
  );
}
