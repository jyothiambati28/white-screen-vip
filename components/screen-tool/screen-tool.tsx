'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Maximize, Minimize, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'
import { ColorSwatches } from './color-swatches'
import { CustomColorPicker } from './custom-color-picker'

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
}

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void
}

const HINT_DURATION_MS = 2500

function getFullscreenElement() {
  const doc = document as FullscreenDocument
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

type ScreenToolProps = {
  initialColorId?: string
}

export function ScreenTool({ initialColorId = 'white' }: ScreenToolProps) {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState<string>(initialColorId)
  const [customHex, setCustomHex] = useState('#F5F5F0')
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false)
  const [isFallbackFullscreen, setIsFallbackFullscreen] = useState(false)
  const [isHintVisible, setIsHintVisible] = useState(false)

  const screenRef = useRef<HTMLDivElement>(null)
  const hintTimerRef = useRef<number | undefined>(undefined)
  const wakeLockRef = useRef<WakeLockSentinel | null>(null)

  const isFullscreen = isNativeFullscreen || isFallbackFullscreen
  const preset = SCREEN_COLORS.find((color) => color.id === selectedId)
  const activeHex = preset ? preset.hex : customHex
  const activeName = preset ? preset.name : 'Custom'
  const isLight = isLightColor(activeHex)

  const revealHint = useCallback(() => {
    setIsHintVisible(true)
    window.clearTimeout(hintTimerRef.current)
    hintTimerRef.current = window.setTimeout(() => setIsHintVisible(false), HINT_DURATION_MS)
  }, [])

  const enterFullscreen = useCallback(async () => {
    const element = screenRef.current as FullscreenElement | null
    if (!element) return
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen({ navigationUI: 'hide' })
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen()
      } else {
        setIsFallbackFullscreen(true)
      }
    } catch {
      setIsFallbackFullscreen(true)
    }
    revealHint()
  }, [revealHint])

  const exitFullscreen = useCallback(async () => {
    setIsFallbackFullscreen(false)
    const doc = document as FullscreenDocument
    if (!getFullscreenElement()) return
    try {
      if (doc.exitFullscreen) await doc.exitFullscreen()
      else await doc.webkitExitFullscreen?.()
    } catch {
      // The browser already left fullscreen.
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) void exitFullscreen()
    else void enterFullscreen()
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  // Navigating remounts the tool and would drop fullscreen, so colors only change the URL outside it.
  const selectPreset = useCallback(
    (index: number) => {
      const color = SCREEN_COLORS[index]
      setSelectedId(color.id)
      if (!isFullscreen) router.push(color.path, { scroll: false })
    },
    [isFullscreen, router],
  )

  const cycleColor = useCallback(
    (direction: 1 | -1) => {
      const index = SCREEN_COLORS.findIndex((color) => color.id === selectedId)
      const nextIndex =
        index === -1 ? 0 : (index + direction + SCREEN_COLORS.length) % SCREEN_COLORS.length
      selectPreset(nextIndex)
    },
    [selectedId, selectPreset],
  )

  useEffect(() => {
    const handleChange = () => {
      setIsNativeFullscreen(getFullscreenElement() === screenRef.current)
    }
    document.addEventListener('fullscreenchange', handleChange)
    document.addEventListener('webkitfullscreenchange', handleChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleChange)
      document.removeEventListener('webkitfullscreenchange', handleChange)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return
      if (event.metaKey || event.ctrlKey || event.altKey) return

      const key = event.key
      if (key === 'f' || key === 'F') {
        event.preventDefault()
        toggleFullscreen()
      } else if (key === 'Escape' && isFallbackFullscreen) {
        setIsFallbackFullscreen(false)
      } else if (key === 'ArrowRight' || key === 'ArrowDown') {
        if (!isFullscreen && key === 'ArrowDown') return
        event.preventDefault()
        cycleColor(1)
        if (isFullscreen) revealHint()
      } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
        if (!isFullscreen && key === 'ArrowUp') return
        event.preventDefault()
        cycleColor(-1)
        if (isFullscreen) revealHint()
      } else if (/^[1-7]$/.test(key)) {
        selectPreset(Number(key) - 1)
        if (isFullscreen) revealHint()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleFullscreen, cycleColor, selectPreset, revealHint, isFullscreen, isFallbackFullscreen])

  useEffect(() => {
    if (!isFullscreen || !('wakeLock' in navigator)) return
    let cancelled = false
    navigator.wakeLock
      .request('screen')
      .then((sentinel) => {
        if (cancelled) void sentinel.release()
        else wakeLockRef.current = sentinel
      })
      .catch(() => {})
    return () => {
      cancelled = true
      void wakeLockRef.current?.release()
      wakeLockRef.current = null
    }
  }, [isFullscreen])

  useEffect(() => {
    if (!isFallbackFullscreen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isFallbackFullscreen])

  useEffect(() => () => window.clearTimeout(hintTimerRef.current), [])

  const overlayTextClass = isLight ? 'text-neutral-900' : 'text-white'
  const overlayChipClass = isLight
    ? 'bg-black/5 ring-black/10 text-neutral-900'
    : 'bg-white/10 ring-white/20 text-white'

  return (
    <div className="rounded-2xl border bg-card p-3 shadow-sm sm:p-4">
      <div
        ref={screenRef}
        role="region"
        aria-label={`${activeName} screen preview`}
        onMouseMove={isFullscreen ? revealHint : undefined}
        onTouchStart={isFullscreen ? revealHint : undefined}
        onDoubleClick={isFullscreen ? () => void exitFullscreen() : undefined}
        style={{ backgroundColor: activeHex }}
        className={cn(
          'relative flex items-center justify-center overflow-hidden',
          isFullscreen
            ? 'h-full w-full'
            : 'h-[42vh] min-h-56 max-h-[520px] w-full rounded-xl border',
          isFallbackFullscreen && 'fixed inset-0 z-[100] h-dvh rounded-none border-0',
          isFullscreen && !isHintVisible && 'cursor-none',
        )}
      >
        {isFullscreen ? (
          <div
            aria-live="polite"
            className={cn(
              'pointer-events-none absolute inset-x-0 top-4 flex justify-center px-4 transition-opacity duration-300',
              isHintVisible ? 'opacity-100' : 'opacity-0',
            )}
          >
            <div
              className={cn(
                'pointer-events-auto flex items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-sm ring-1 backdrop-blur',
                overlayChipClass,
              )}
            >
              <span>
                Press <kbd className="font-mono font-semibold">Esc</kbd> or double-click to exit
                <span className="hidden sm:inline"> · ← → to change color</span>
              </span>
              <button
                type="button"
                onClick={() => void exitFullscreen()}
                className={cn(
                  'inline-flex size-8 items-center justify-center rounded-full ring-1',
                  overlayChipClass,
                )}
                aria-label="Exit fullscreen"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => void enterFullscreen()}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium ring-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
                overlayChipClass,
                isLight ? 'hover:bg-black/10' : 'hover:bg-white/20',
              )}
            >
              <Maximize className="size-4" aria-hidden="true" />
              Open fullscreen
            </button>
            <p
              className={cn(
                'absolute bottom-3 left-4 font-mono text-xs opacity-70',
                overlayTextClass,
              )}
            >
              {activeName} · {activeHex}
            </p>
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 px-1 pt-4 lg:flex-row lg:items-center lg:justify-between">
        <ColorSwatches selectedId={selectedId} onSelect={setSelectedId} />
        <div className="flex flex-wrap items-center gap-3">
          <CustomColorPicker
            value={customHex}
            isSelected={!preset}
            onChange={(hex) => {
              setCustomHex(hex)
              setSelectedId('custom')
            }}
            onSelect={() => setSelectedId('custom')}
          />
          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {isFullscreen ? (
              <Minimize className="size-4" aria-hidden="true" />
            ) : (
              <Maximize className="size-4" aria-hidden="true" />
            )}
            Fullscreen
          </button>
        </div>
      </div>

      <p className="px-1 pt-4 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Shortcuts:</span>{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">F</kbd> fullscreen ·{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">1</kbd>–
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">7</kbd> pick color ·{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">←</kbd>
        <kbd className="ml-0.5 rounded border bg-muted px-1.5 py-0.5 font-mono">→</kbd> cycle ·{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono">Esc</kbd> exit
      </p>
    </div>
  )
}
