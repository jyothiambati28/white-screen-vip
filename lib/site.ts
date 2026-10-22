export const siteConfig = {
  name: 'WhiteScreen.vip',
  url: 'https://whitescreen.vip',
  title: 'White Screen – Free Fullscreen White Screen Tool',
  description:
    'Turn your display into a bright, fullscreen white screen in one click. Switch to black, red, green, blue, yellow, gray, or any custom color. Free, fast, and no sign-up.',
  contactEmail: 'hello@whitescreen.vip',
} as const

export const mainNav = [
  { label: 'Tool', href: '/#tool' },
  { label: 'Colors', href: '/#colors' },
  { label: 'Use cases', href: '/#use-cases' },
  { label: 'How to use', href: '/#how-to-use' },
  { label: 'FAQ', href: '/#faq' },
] as const

export const footerNav = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
] as const

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}
