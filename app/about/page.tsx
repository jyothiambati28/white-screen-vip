import type { Metadata } from 'next'
import Link from 'next/link'
import { ContentPage } from '@/components/content-page'

const description =
  'Learn about WhiteScreen.vip, a free and lightweight browser tool for fullscreen white and colored screens.'

export const metadata: Metadata = {
  title: 'About Us',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Us | WhiteScreen.vip', description, url: '/about' },
}

export default function AboutPage() {
  return (
    <ContentPage title="About Us" description={description}>
      <p>
        WhiteScreen.vip is a simple, focused tool that turns any screen into a solid, full-brightness
        color. We built it because most “white screen” sites are slow, cluttered with ads, or full of
        popups — when all you really want is a clean screen, instantly.
      </p>
      <h2>What we believe</h2>
      <ul>
        <li>Tools should load fast and do one thing well.</li>
        <li>Your privacy matters, so the tool runs entirely in your browser.</li>
        <li>Good design means fewer distractions, not more features.</li>
      </ul>
      <h2>What’s next</h2>
      <p>
        We plan to add more free browser utilities over time, such as display test patterns and
        screen timers, all with the same lightweight approach.
      </p>
      <p>
        Have a suggestion? <Link href="/contact">Get in touch</Link>.
      </p>
    </ContentPage>
  )
}
