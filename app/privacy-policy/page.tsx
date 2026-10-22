import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { siteConfig } from '@/lib/site'

const description =
  'Read how WhiteScreen.vip handles your data. The screen tool runs locally in your browser and does not collect personal information.'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description,
  alternates: { canonical: '/privacy-policy' },
  openGraph: { title: 'Privacy Policy | WhiteScreen.vip', description, url: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <ContentPage title="Privacy Policy" description={description} updated="October 21, 2026">
      <h2>Information we collect</h2>
      <p>
        The white screen tool runs entirely in your browser. Your color choices and settings are not
        sent to our servers, and we do not require an account.
      </p>
      <h2>Analytics</h2>
      <p>
        We use privacy-friendly, aggregated analytics to understand overall traffic, such as page
        views and approximate country. This data does not identify you personally and does not use
        advertising cookies.
      </p>
      <h2>Cookies</h2>
      <p>We do not use cookies for tracking or advertising.</p>
      <h2>Third parties</h2>
      <p>
        Our site is hosted on infrastructure that may process standard request data, such as IP
        address and browser type, to deliver the site securely.
      </p>
      <h2>Changes to this policy</h2>
      <p>If we update this policy, we will change the date at the top of this page.</p>
      <h2>Contact</h2>
      <p>
        Questions about privacy? Email{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </ContentPage>
  )
}
