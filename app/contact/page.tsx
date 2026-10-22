import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { siteConfig } from '@/lib/site'

const description =
  'Contact the WhiteScreen.vip team with feedback, feature ideas, bug reports, or partnership questions.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact | WhiteScreen.vip', description, url: '/contact' },
}

export default function ContactPage() {
  return (
    <ContentPage title="Contact" description={description}>
      <p>
        We read every message. The fastest way to reach us is by email at{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
      <h2>Reporting a problem</h2>
      <p>If something isn’t working, it helps to include:</p>
      <ul>
        <li>Your device and operating system</li>
        <li>Your browser name and version</li>
        <li>What you expected to happen and what happened instead</li>
      </ul>
      <p>We typically reply within a few business days.</p>
    </ContentPage>
  )
}
