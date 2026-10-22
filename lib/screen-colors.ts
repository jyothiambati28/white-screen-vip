export type ScreenColor = {
  id: string
  name: string
  hex: string
  path: string
}

export const SCREEN_COLORS: readonly ScreenColor[] = [
  { id: 'white', name: 'White', hex: '#FFFFFF', path: '/' },
  { id: 'black', name: 'Black', hex: '#000000', path: '/black-screen' },
  { id: 'red', name: 'Red', hex: '#FF0000', path: '/red-screen' },
  { id: 'green', name: 'Green', hex: '#00FF00', path: '/green-screen' },
  { id: 'blue', name: 'Blue', hex: '#0000FF', path: '/blue-screen' },
  { id: 'yellow', name: 'Yellow', hex: '#FFFF00', path: '/yellow-screen' },
  { id: 'gray', name: 'Gray', hex: '#808080', path: '/gray-screen' },
]

export function getColorBySlug(slug: string) {
  return SCREEN_COLORS.find((color) => color.id !== 'white' && color.path === `/${slug}`)
}

const HEX_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i

export function normalizeHex(value: string): string | null {
  const match = value.trim().match(HEX_PATTERN)
  if (!match) return null
  let hex = match[1]
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }
  return `#${hex.toUpperCase()}`
}

export function isLightColor(hex: string): boolean {
  const value = normalizeHex(hex) ?? '#FFFFFF'
  const r = parseInt(value.slice(1, 3), 16)
  const g = parseInt(value.slice(3, 5), 16)
  const b = parseInt(value.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 150
}
