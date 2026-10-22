import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { SCREEN_COLORS } from '@/lib/screen-colors'

type Route = { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }

const colorRoutes: Route[] = SCREEN_COLORS.filter((color) => color.id !== 'white').map(
  (color) => ({ path: color.path, priority: 0.8, changeFrequency: 'monthly' }),
)

const routes: Route[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  ...colorRoutes,
  { path: '/about', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/disclaimer', priority: 0.2, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-21')
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
