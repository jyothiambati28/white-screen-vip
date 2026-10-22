import { ImageResponse } from 'next/og'

export const alt = 'White Screen – free fullscreen white screen tool by WhiteScreen.vip'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const swatches = ['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#808080']

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F7F7F8',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 32, fontWeight: 600, color: '#18181B' }}>
          WhiteScreen<span style={{ color: '#71717A' }}>.vip</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, fontWeight: 700, color: '#18181B', letterSpacing: -3 }}>
            White Screen
          </div>
          <div style={{ fontSize: 36, color: '#52525B', marginTop: 12 }}>
            Free fullscreen white and color screens, instantly.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {swatches.map((hex) => (
            <div
              key={hex}
              style={{
                width: 72,
                height: 72,
                borderRadius: 16,
                background: hex,
                border: '2px solid #E4E4E7',
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  )
}
