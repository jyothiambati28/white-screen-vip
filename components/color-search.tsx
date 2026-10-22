"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { colorScreens } from "@/lib/tools";

export function ColorSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().replace("grey", "gray");
    if (!q) return [];
    return colorScreens.filter((screen) => `${screen.title} ${screen.color}`.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="search-wrap" ref={wrapRef}>
      <form
        role="search"
        className="search-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (results[0]) {
            router.push(`/${results[0].slug}`);
            close();
          }
        }}
      >
        <Search size={16} className="search-icon" aria-hidden="true" />
        <input
          type="search"
          className="search-input"
          placeholder="Search colours"
          aria-label="Search colour screens"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        />
      </form>
      {open && query.trim() && (
        <div className="popover search-popover">
          {results.length > 0 ? (
            <ul className="colours-list single">
              {results.map((screen) => (
                <li key={screen.slug}>
                  <Link href={`/${screen.slug}`} className="colour-option" onClick={close}>
                    <span className="swatch-dot" style={{ backgroundColor: screen.color }} aria-hidden="true" />
                    {screen.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="search-empty">No matching colour.</p>
          )}
        </div>
      )}
    </div>
  );
}
