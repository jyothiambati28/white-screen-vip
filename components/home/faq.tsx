import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/section'
import { faqs } from '@/lib/home-content'

export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Frequently asked questions"
      className="border-t bg-muted/40"
    >
      <div className="divide-y overflow-hidden rounded-xl border bg-card">
        {faqs.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium transition-colors hover:bg-accent/60 [&::-webkit-details-marker]:hidden">
              <h3>{faq.question}</h3>
              <ChevronDown
                className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
