import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SCREEN_COLORS, isLightColor } from '@/lib/screen-colors'

type ColorSwatchesProps = {
  selectedId: string
  onSelect: (id: string) => void
}

export function ColorSwatches({ selectedId, onSelect }: ColorSwatchesProps) {
  return (
    <nav aria-label="Screen color" className="flex flex-wrap items-center gap-2">
      {SCREEN_COLORS.map((color, index) => {
        const isSelected = color.id === selectedId
        return (
          <Link
            key={color.id}
            href={color.path}
            scroll={false}
            onClick={() => onSelect(color.id)}
            aria-current={isSelected ? 'page' : undefined}
            aria-keyshortcuts={String(index + 1)}
            title={`${color.name} screen (${index + 1})`}
            className={cn(
              'group flex h-10 items-center gap-2 rounded-lg border bg-background pl-1.5 pr-3 text-sm transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2',
              isSelected && 'border-foreground/40 bg-accent',
            )}
          >
            <span
              className="flex size-7 items-center justify-center rounded-md ring-1 ring-black/10"
              style={{ backgroundColor: color.hex }}
            >
              {isSelected && (
                <Check
                  className={cn('size-3.5', isLightColor(color.hex) ? 'text-black' : 'text-white')}
                  aria-hidden="true"
                />
              )}
            </span>
            <span className="font-medium">{color.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
