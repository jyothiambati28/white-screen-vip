export const benefits = [
  {
    icon: 'zap',
    title: 'Instant and free',
    description: 'No sign-up, downloads, or ads in your way. Open the page and your screen is ready.',
  },
  {
    icon: 'monitor',
    title: 'Works on any device',
    description: 'Runs in the browser on desktops, laptops, tablets, and phones of any size.',
  },
  {
    icon: 'palette',
    title: 'Any color you need',
    description: 'Seven preset colors plus a custom picker for exact hex values.',
  },
  {
    icon: 'shield',
    title: 'Private by design',
    description: 'Everything runs locally in your browser. Nothing is uploaded or stored.',
  },
] as const

export const useCases = [
  {
    title: 'Video calls and lighting',
    description: 'Use a bright white screen as a soft fill light for webcam calls, selfies, or product photos.',
  },
  {
    title: 'Dead pixel testing',
    description: 'Cycle through solid red, green, blue, black, and white to spot dead or stuck pixels.',
  },
  {
    title: 'Cleaning your display',
    description: 'A black screen reveals dust and smudges; a white screen shows streaks after wiping.',
  },
  {
    title: 'Tracing and drawing',
    description: 'Turn a tablet into a makeshift lightbox for tracing sketches or reading film negatives.',
  },
  {
    title: 'Monitor calibration',
    description: 'Check uniformity, backlight bleed, and color tint against solid, even backgrounds.',
  },
  {
    title: 'Focus and ambience',
    description: 'Set a calm solid color for a distraction-free screen or a gentle room glow.',
  },
] as const

export const steps = [
  {
    title: 'Pick a color',
    description: 'White is selected by default. Choose another preset or set a custom color.',
  },
  {
    title: 'Go fullscreen',
    description: 'Click “Open fullscreen” or press F on your keyboard.',
  },
  {
    title: 'Switch colors anytime',
    description: 'Use the arrow keys or number keys 1–7 to change colors while in fullscreen.',
  },
  {
    title: 'Exit when finished',
    description: 'Press Esc, double-click the screen, or tap the close button that appears.',
  },
] as const

export const faqs = [
  {
    question: 'What is a white screen tool?',
    answer:
      'A white screen tool fills your entire display with a solid white color. It is commonly used as a light source, for cleaning monitors, testing for dead pixels, and tracing drawings.',
  },
  {
    question: 'How do I make my screen fully white?',
    answer:
      'Keep White selected and click “Open fullscreen” or press F. Your browser will hide its toolbars and show only a solid white screen.',
  },
  {
    question: 'How do I exit fullscreen mode?',
    answer:
      'Press the Esc key on your keyboard. You can also double-click anywhere on the screen, or move your mouse or tap the screen to show the close button.',
  },
  {
    question: 'Can I use a color other than white?',
    answer:
      'Yes. Choose black, red, green, blue, yellow, or gray, or use the custom color picker to enter any hex color code.',
  },
  {
    question: 'Does it work on phones and tablets?',
    answer:
      'Yes. On browsers that support the Fullscreen API, the color fills the whole screen. On browsers that do not, such as Safari on iPhone, the color fills the browser window instead.',
  },
  {
    question: 'Will my screen turn off while using it?',
    answer:
      'On supported browsers, the tool asks your device to keep the screen awake while in fullscreen. If your device does not support this, adjust your display sleep settings.',
  },
  {
    question: 'Is a white screen bad for my display?',
    answer:
      'No. Showing a solid color is normal use for any display. For OLED screens, avoid leaving any static image at maximum brightness for many hours at a time.',
  },
] as const
