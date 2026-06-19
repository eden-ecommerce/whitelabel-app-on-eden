"use client";

import { useCallback, useEffect, useState } from "react";

export const STORAGE_KEY = "eden_favourite_events";

export function readFavouriteIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function writeFavouriteIds(ids: string[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function useFavourites() {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setIds(readFavouriteIds());
    setHydrated(true);
  }, []);

  const toggle = useCallback((eventId: string) => {
    setIds((prev) => {
      const next = prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId];
      writeFavouriteIds(next);
      return next;
    });
  }, []);

  const isFav = useCallback((eventId: string) => ids.includes(eventId), [ids]);

  return { ids, hydrated, toggle, isFav };
}
