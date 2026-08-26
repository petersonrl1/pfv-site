"use client";

import { useEffect, useState } from "react";

export interface ChecklistItemData {
  id: string;
  title: string;
}

interface ChecklistProps {
  storageKey: string;
  items: ChecklistItemData[];
  note?: string;
}

// Ticks are stored per-device in localStorage, not synced — two operators
// ticking one shared list would be worse than none.
export function Checklist({ storageKey, items, note }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Reads from localStorage, an external client-only store the server can't see —
  // starting from {} keeps SSR and the first client render in sync, which a lazy
  // useState initializer can't do (the checkbox DOM node never gets patched to
  // match on hydration even though the initializer reads the right value).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from an external store on mount, not a derived render value
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // localStorage unavailable — ticks just won't persist
    }
  }, [storageKey]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <label
            key={item.id}
            className="grid grid-cols-[28px_32px_1fr] items-start gap-3 py-3.5 border-t border-divider cursor-pointer text-base"
          >
            <input
              type="checkbox"
              checked={!!checked[item.id]}
              onChange={() => toggle(item.id)}
              className="mt-0.5 w-[18px] h-[18px] accent-accent"
            />
            <span className="tabular-nums text-xs text-neutral-600 pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item.title}</span>
          </label>
        ))}
        <div className="border-t border-divider" />
      </div>
      {note && <p className="text-[13px] text-neutral-600 mt-5">{note}</p>}
    </div>
  );
}
