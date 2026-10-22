import { Section } from '@/components/section'
import { steps } from '@/lib/home-content'

export function HowToUse() {
  return (
    <Section
      id="how-to-use"
      eyebrow="How it works"
      title="How to use the white screen"
      description="Four quick steps from this page to a full-brightness screen."
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-xl border bg-card p-5">
            <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
              {index + 1}
            </span>
            <h3 className="font-medium">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
