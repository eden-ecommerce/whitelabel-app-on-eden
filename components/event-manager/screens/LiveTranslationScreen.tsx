"use client";

import { useState } from "react";
import { Headphones, Play, Pause, Globe } from "lucide-react";
import { cn } from "@lib/utils";
import { Screen, AppHeader, AppBody } from "./chrome";

const LANGUAGES = ["Spanish", "French", "Portuguese", "Mandarin", "Polish"];

export function LiveTranslationScreen() {
  const [language, setLanguage] = useState("Spanish");
  const [playing, setPlaying] = useState(true);

  return (
    <Screen>
      <AppHeader title="Live Translation" subtitle="Main Auditorium" />

      <AppBody className="flex flex-col items-center gap-4 px-4 py-6">
        <div className="flex items-center gap-1.5 rounded-full bg-destructive/10 px-2.5 py-1 text-[10px] font-semibold text-destructive">
          <span className="size-1.5 rounded-full bg-destructive" />
          Live now
        </div>

        {/* Pulsing audio ring */}
        <div className="relative my-2 flex size-28 items-center justify-center">
          {playing ? (
            <>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/20" />
              <span className="absolute inline-flex size-20 animate-pulse rounded-full bg-primary/20" />
            </>
          ) : null}
          <div className="relative flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Headphones className="size-8" />
          </div>
        </div>

        <p className="text-center text-xs font-medium text-foreground">
          English <span className="text-muted-foreground">to</span> {language}
        </p>

        <div className="flex w-full flex-wrap justify-center gap-1.5">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors",
                language === lang
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground",
              )}
            >
              <Globe className="size-2.5" />
              {lang}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-xs font-semibold text-primary-foreground"
        >
          {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          {playing ? "Listening" : "Tap to listen"}
        </button>
      </AppBody>
    </Screen>
  );
}
