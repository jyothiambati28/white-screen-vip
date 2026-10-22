import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/home/hero'
import { Section } from '@/components/section'
import { ColorScreenLinks } from '@/components/color-screen-links'
import { JsonLd } from '@/components/json-ld'
import { SCREEN_COLORS, getColorBySlug } from '@/lib/screen-colors'
import { colorPages } from '@/lib/color-pages'
import { absoluteUrl } from '@/lib/site'

type ColorPageProps = {
  params: Promise<{ color: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return SCREEN_COLORS.filter((color) => color.id !== 'white').map((color) => ({
    color: color.path.slice(1),
  }))
}

export async function generateMetadata({ params }: ColorPageProps): Promise<Metadata> {
  const { color: slug } = await params
  const color = getColorBySlug(slug)
  if (!color) return {}
  const title = `${color.name} Screen – Free Fullscreen ${color.name} Screen Tool`
  const description = colorPages[color.id].description
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: color.path },
    openGraph: { title, description, url: color.path },
    twitter: { title, description },
  }
}

export default async function ColorPage({ params }: ColorPageProps) {
  const { color: slug } = await params
  const color = getColorBySlug(slug)
  if (!color) notFound()
  const content = colorPages[color.id]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${color.name} Screen`,
    url: absoluteUrl(color.path),
    description: content.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <>
      <JsonLd data={schema} />
      <Hero colorId={color.id} title={`${color.name} Screen`} intro={content.intro} />
      <Section
        id="use-cases"
        eyebrow="Use cases"
        title={`What you can use a ${color.name.toLowerCase()} screen for`}
        className="border-y bg-muted/40"
      >
        <ul className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {content.uses.map((use) => (
            <li key={use.title} className="bg-card p-6">
              <h3 className="font-medium">{use.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {use.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <ColorScreenLinks currentId={color.id} />
    </>
  )
}
