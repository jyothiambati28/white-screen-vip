import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { Benefits } from '@/components/home/benefits'
import { UseCases } from '@/components/home/use-cases'
import { HowToUse } from '@/components/home/how-to-use'
import { Faq } from '@/components/home/faq'
import { ColorScreenLinks } from '@/components/color-screen-links'
import { JsonLd } from '@/components/json-ld'
import { faqs } from '@/lib/home-content'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'White Screen',
  url: absoluteUrl('/'),
  description: siteConfig.description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires a modern web browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <Benefits />
      <UseCases />
      <HowToUse />
      <ColorScreenLinks currentId="white" />
      <Faq />
    </>
  )
}
