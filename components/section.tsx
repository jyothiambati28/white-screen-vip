import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('scroll-mt-20 py-16 sm:py-20', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium text-muted-foreground">{eyebrow}</p>
          )}
          <h2 id={headingId} className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
