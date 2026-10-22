import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'

const description =
  'The WhiteScreen.vip disclaimer covers use of the screen tool, health considerations, and limitations of liability.'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description,
  alternates: { canonical: '/disclaimer' },
  openGraph: { title: 'Disclaimer | WhiteScreen.vip', description, url: '/disclaimer' },
}

export default function DisclaimerPage() {
  return (
    <ContentPage title="Disclaimer" description={description} updated="October 21, 2026">
      <h2>General use</h2>
      <p>
        WhiteScreen.vip is provided “as is” for general and informational purposes. We make no
        guarantees about its suitability for professional calibration, medical, or safety-critical
        use.
      </p>
      <h2>Health and comfort</h2>
      <p>
        Bright, solid colors at full brightness can cause eye strain. Take regular breaks and lower
        your screen brightness if you feel discomfort. If you are sensitive to bright light or
        flashing colors, use the tool with caution.
      </p>
      <h2>Display care</h2>
      <p>
        Displaying a static color for very long periods may contribute to image retention on some
        screens, especially OLED panels. You are responsible for how you use the tool on your device.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        We are not liable for any damage or loss resulting from the use of this website or tool.
      </p>
    </ContentPage>
  )
}
