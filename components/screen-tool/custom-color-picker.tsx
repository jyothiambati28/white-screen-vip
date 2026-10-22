'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'
import { normalizeHex } from '@/lib/screen-colors'

type CustomColorPickerProps = {
  value: string
  isSelected: boolean
  onChange: (hex: string) => void
  onSelect: () => void
}

export function CustomColorPicker({ value, isSelected, onChange, onSelect }: CustomColorPickerProps) {
  const pickerId = useId()
  const hexId = useId()
  const [draft, setDraft] = useState(value)
  const [lastValue, setLastValue] = useState(value)

  if (value !== lastValue) {
    setLastValue(value)
    setDraft(value)
  }

  const isDraftValid = normalizeHex(draft) !== null

  const commitDraft = () => {
    const hex = normalizeHex(draft)
    if (hex) onChange(hex)
    else setDraft(value)
  }

  return (
    <div
      className={cn(
        'flex h-10 items-center gap-2 rounded-lg border bg-background pl-1.5 pr-1',
        isSelected && 'border-foreground/40 bg-accent',
      )}
    >
      <label htmlFor={pickerId} className="relative size-7 cursor-pointer">
        <span className="sr-only">Choose a custom color</span>
        <span
          className="absolute inset-0 rounded-md ring-1 ring-black/10"
          style={{ backgroundColor: value }}
          aria-hidden="true"
        />
        <input
          id={pickerId}
          type="color"
          value={value.toLowerCase()}
          onChange={(event) => onChange(event.target.value.toUpperCase())}
          onClick={onSelect}
          className="absolute inset-0 size-full cursor-pointer opacity-0"
        />
      </label>
      <label htmlFor={hexId} className="sr-only">
        Custom color hex code
      </label>
      <input
        id={hexId}
        type="text"
        inputMode="text"
        autoComplete="off"
        spellCheck={false}
        maxLength={7}
        value={draft}
        aria-invalid={!isDraftValid}
        onChange={(event) => setDraft(event.target.value)}
        onFocus={onSelect}
        onBlur={commitDraft}
        onKeyDown={(event) => {
          if (event.nativeEvent.isComposing || event.keyCode === 229) return
          if (event.key === 'Enter') commitDraft()
        }}
        className="h-8 w-20 rounded-md bg-transparent px-1.5 font-mono text-sm uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:text-destructive"
      />
    </div>
  )
}
