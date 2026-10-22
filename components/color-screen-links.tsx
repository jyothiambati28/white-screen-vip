import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/section'
import { SCREEN_COLORS } from '@/lib/screen-colors'

type ColorScreenLinksProps = {
  currentId?: string
}

export function ColorScreenLinks({ currentId }: ColorScreenLinksProps) {
  const colors = SCREEN_COLORS.filter((color) => color.id !== currentId)
  return (
    <Section
      id="colors"
      eyebrow="More colors"
      title="Other color screens"
      description="Each color has its own page, so you can bookmark or share a direct link."
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {colors.map((color) => (
          <li key={color.id}>
            <Link
              href={color.path}
              className="group flex items-center gap-4 rounded-xl border bg-card p-3 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span
                className="size-12 shrink-0 rounded-lg ring-1 ring-black/10"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <span className="flex flex-1 flex-col">
                <span className="font-medium">{color.name} Screen</span>
                <span className="font-mono text-xs text-muted-foreground">{color.hex}</span>
              </span>
              <ArrowRight
                className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
