"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { colorScreens, isDarkColor } from "@/lib/tools";

const HEX_PATTERN = /^#[0-9a-f]{6}$/i;

function normalizeHex(input: string) {
  const trimmed = input.trim().replace(/^#?/, "#");
  if (/^#[0-9a-f]{3}$/i.test(trimmed)) {
    return `#${trimmed.slice(1).split("").map((c) => c + c).join("")}`.toLowerCase();
  }
  return HEX_PATTERN.test(trimmed) ? trimmed.toLowerCase() : null;
}

export function ColorScreenTool({ initialColor = "#ffffff" }: { initialColor?: string }) {
  const [color, setColor] = useState(initialColor);
  const [hexDraft, setHexDraft] = useState(initialColor.toUpperCase());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const activePreset = colorScreens.find((screen) => screen.color === color);
  const label = activePreset?.name ?? "Custom";
  const dark = isDarkColor(color);

  const applyColor = useCallback((next: string) => {
    setColor(next);
    setHexDraft(next.toUpperCase());
  }, []);

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setIsFullscreen(false);
  }, []);

  const enterFullscreen = useCallback(() => {
    const stage = stageRef.current;
    if (stage?.requestFullscreen) {
      stage.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => setIsFullscreen(true));
    } else {
      setIsFullscreen(true);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) exitFullscreen();
    else enterFullscreen();
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  const cycle = useCallback(
    (step: number) => {
      const index = colorScreens.findIndex((screen) => screen.color === color);
      const nextIndex = index === -1 ? 0 : (index + step + colorScreens.length) % colorScreens.length;
      applyColor(colorScreens[nextIndex].color);
    },
    [color, applyColor]
  );

  useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "Escape" && isFullscreen) exitFullscreen();
      else if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        toggleFullscreen();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        cycle(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        cycle(-1);
      } else if (/^[1-9]$/.test(event.key)) {
        applyColor(colorScreens[Number(event.key) - 1].color);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen, exitFullscreen, toggleFullscreen, cycle, applyColor]);

  const commitHex = () => {
    const normalized = normalizeHex(hexDraft);
    if (normalized) applyColor(normalized);
    else setHexDraft(color.toUpperCase());
  };

  return (
    <section className="tool-card" aria-label="Colour screen tool">
      <div
        ref={stageRef}
        className={`screen-stage${isFullscreen ? " is-fullscreen" : ""}`}
        style={{ backgroundColor: color }}
        onDoubleClick={isFullscreen ? exitFullscreen : undefined}
        role="img"
        aria-label={`${label} screen preview, ${color.toUpperCase()}`}
      >
        {isFullscreen ? (
          <button type="button" className={`stage-exit${dark ? " on-dark" : ""}`} onClick={exitFullscreen}>
            <X size={16} aria-hidden="true" />
            Exit
            <span className="sr-only"> fullscreen</span>
          </button>
        ) : (
          <div className={`stage-overlay${dark ? " on-dark" : ""}`}>
            <span className="stage-label">
              {label} · {color.toUpperCase()}
            </span>
            <button type="button" className="button button-primary" onClick={enterFullscreen}>
              <Maximize2 size={17} aria-hidden="true" />
              Open fullscreen
            </button>
          </div>
        )}
      </div>

      <div className="tool-controls">
        <fieldset className="swatch-group">
          <legend className="control-label">Colours</legend>
          <div className="swatches">
            {colorScreens.map((screen) => (
              <button
                key={screen.slug}
                type="button"
                className="swatch"
                aria-pressed={color === screen.color}
                onClick={() => applyColor(screen.color)}
              >
                <span className="swatch-dot" style={{ backgroundColor: screen.color }} aria-hidden="true" />
                {screen.name}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="custom-row">
          <span className="control-label" id="custom-colour-label">Custom colour</span>
          <div className="custom-inputs" role="group" aria-labelledby="custom-colour-label">
            <input
              type="color"
              className="color-input"
              value={color}
              onChange={(event) => applyColor(event.target.value)}
              aria-label="Choose a custom colour"
            />
            <input
              type="text"
              className="hex-input"
              value={hexDraft}
              maxLength={7}
              spellCheck={false}
              autoComplete="off"
              aria-label="Custom colour HEX code"
              onChange={(event) => setHexDraft(event.target.value)}
              onBlur={commitHex}
              onKeyDown={(event) => {
                if (event.key !== "Enter" || event.nativeEvent.isComposing || event.keyCode === 229) return;
                commitHex();
              }}
            />
          </div>
        </div>

        <p className="shortcuts">
          <strong>Shortcuts:</strong> <kbd>F</kbd> fullscreen · <kbd>1</kbd>–<kbd>9</kbd> pick colour · <kbd>←</kbd> <kbd>→</kbd> cycle ·{" "}
          <kbd>Esc</kbd> exit
        </p>
      </div>
    </section>
  );
}
