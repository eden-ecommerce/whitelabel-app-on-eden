"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingBasket } from "lucide-react";
import { cn } from "@lib/utils";
import { Screen, AppHeader, AppBody } from "./chrome";

const CATEGORIES = ["Hot Food", "Drinks", "Snacks", "Vegan"];

const ITEMS = [
  { id: "potato", name: "Loaded Jacket Potato", price: 4.5, cat: "Hot Food" },
  { id: "roll", name: "Bacon Roll", price: 3.2, cat: "Hot Food" },
  { id: "coffee", name: "Flat White", price: 2.8, cat: "Drinks" },
  { id: "tea", name: "Pot of Tea", price: 2.2, cat: "Drinks" },
  { id: "flapjack", name: "Flapjack", price: 1.8, cat: "Snacks" },
  { id: "wrap", name: "Falafel Wrap", price: 4.9, cat: "Vegan" },
];

export function ClickCollectScreen() {
  const [category, setCategory] = useState("Hot Food");
  const [qty, setQty] = useState<Record<string, number>>({ coffee: 1, potato: 1 });

  const items = ITEMS.filter((i) => i.cat === category);
  const total = ITEMS.reduce((sum, i) => sum + (qty[i.id] ?? 0) * i.price, 0);
  const count = Object.values(qty).reduce((a, b) => a + b, 0);

  function update(id: string, delta: number) {
    setQty((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  }

  return (
    <Screen>
      <AppHeader
        title="Order &amp; Collect"
        subtitle="Café Tent"
        trailing={
          <div className="relative">
            <ShoppingBasket className="size-5" />
            {count > 0 ? (
              <span className="absolute -right-1.5 -top-1.5 flex size-3.5 items-center justify-center rounded-full bg-card text-[8px] font-bold text-primary">
                {count}
              </span>
            ) : null}
          </div>
        }
      />

      <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-border bg-card px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors",
              category === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <AppBody className="flex flex-col gap-2 p-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2 rounded-xl border border-border bg-card p-2.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground">{item.name}</p>
              <p className="text-[11px] font-medium text-primary">£{item.price.toFixed(2)}</p>
            </div>
            {qty[item.id] ? (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label={`Remove one ${item.name}`}
                  onClick={() => update(item.id, -1)}
                  className="flex size-5 items-center justify-center rounded-full bg-muted text-foreground"
                >
                  <Minus className="size-3" />
                </button>
                <span className="w-4 text-center text-xs font-semibold">{qty[item.id]}</span>
                <button
                  type="button"
                  aria-label={`Add one ${item.name}`}
                  onClick={() => update(item.id, 1)}
                  className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Plus className="size-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                aria-label={`Add ${item.name}`}
                onClick={() => update(item.id, 1)}
                className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                <Plus className="size-3.5" />
              </button>
            )}
          </div>
        ))}
      </AppBody>

      <div className="shrink-0 border-t border-border bg-card p-3">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground"
        >
          <span>Collect at 12:30</span>
          <span>View Basket · £{total.toFixed(2)}</span>
        </button>
      </div>
    </Screen>
  );
}
