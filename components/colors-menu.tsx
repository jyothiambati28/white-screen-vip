"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { colorScreens } from "@/lib/tools";

export function ColorsMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="menu-wrap" ref={wrapRef}>
      <button
        type="button"
        className="nav-button"
        aria-expanded={open}
        aria-controls="colours-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Colours
        <ChevronDown size={16} aria-hidden="true" className={open ? "chevron open" : "chevron"} />
      </button>
      {open && (
        <div id="colours-menu" className="popover colours-popover">
          <ul className="colours-list">
            {colorScreens.map((screen) => (
              <li key={screen.slug}>
                <Link
                  href={`/${screen.slug}`}
                  className="colour-option"
                  aria-current={pathname === `/${screen.slug}` ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="swatch-dot" style={{ backgroundColor: screen.color }} aria-hidden="true" />
                  {screen.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
