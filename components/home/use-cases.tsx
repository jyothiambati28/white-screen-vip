import { Section } from '@/components/section'
import { useCases } from '@/lib/home-content'

export function UseCases() {
  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="What you can use a white screen for"
      className="border-y bg-muted/40"
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <li key={useCase.title} className="bg-card p-6">
            <h3 className="font-medium">{useCase.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {useCase.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
