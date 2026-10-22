type ColorUse = { title: string; description: string }

type ColorPageContent = {
  intro: string
  description: string
  uses: ColorUse[]
}

export const colorPages: Record<string, ColorPageContent> = {
  black: {
    intro:
      'Turn your display into a pure, fullscreen black screen. Great for spotting bright stuck pixels, checking backlight bleed, or dimming a screen without turning it off.',
    description:
      'Free fullscreen black screen tool. Check for stuck pixels and backlight bleed, test OLED contrast, or keep a display dark without sleeping. No sign-up.',
    uses: [
      {
        title: 'Backlight bleed & IPS glow',
        description:
          'In a dark room, a black screen shows any light leaking around the edges of an LCD panel.',
      },
      {
        title: 'Stuck pixel detection',
        description:
          'Stuck pixels that stay lit show up clearly as bright dots on a solid black background.',
      },
      {
        title: 'OLED contrast check',
        description:
          'OLED pixels switch fully off on true black, so you can check for uniformity and true black levels.',
      },
      {
        title: 'Dim without sleeping',
        description:
          'Keep a computer awake during a download or presentation while the screen stays dark.',
      },
      {
        title: 'Focus & reduce distraction',
        description:
          'Blank out a second monitor so it stops pulling your attention while you work.',
      },
      {
        title: 'Clean your screen',
        description:
          'Dust and fingerprints are easiest to spot on a dark background, so cleaning goes faster.',
      },
    ],
  },
  red: {
    intro:
      'Fill your display with a solid, fullscreen red screen. Useful for testing red subpixels, as a soft night light, or as a simple color backdrop.',
    description:
      'Free fullscreen red screen tool. Test red subpixels and dead pixels, use a soft red light at night, or create a red backdrop. Works on any device.',
    uses: [
      {
        title: 'Red subpixel test',
        description:
          'Dead or stuck pixels in the red channel show up as dark or off-colored dots.',
      },
      {
        title: 'Night vision–friendly light',
        description:
          'Red light has less impact on dark-adapted eyes, which is handy for stargazing or reading at night.',
      },
      {
        title: 'Mood & party lighting',
        description: 'Use a phone or tablet as a quick red ambient light for photos or events.',
      },
      {
        title: 'Photography backdrop',
        description: 'Use a large monitor as a small red background or accent light for product shots.',
      },
      {
        title: 'Color calibration check',
        description: 'Compare how pure red looks across different screens and settings.',
      },
      {
        title: 'Signal & alert screen',
        description: 'Show a clear "stop" or "busy" signal on a spare screen.',
      },
    ],
  },
  green: {
    intro:
      'Show a bright, fullscreen green screen. Use it for chroma key backdrops, testing green subpixels, or checking how evenly your display lights up.',
    description:
      'Free fullscreen green screen tool. Use as a chroma key background, test green subpixels and dead pixels, or check screen uniformity. No download needed.',
    uses: [
      {
        title: 'Chroma key background',
        description:
          'Use a monitor or tablet as a small green screen for keying out objects in video.',
      },
      {
        title: 'Green subpixel test',
        description: 'Spot dead or stuck pixels in the green channel against a solid green fill.',
      },
      {
        title: 'Uniformity check',
        description: 'Green is where the eye is most sensitive, which makes uneven brightness easier to see.',
      },
      {
        title: 'Signal & status screen',
        description: 'Show a clear "go" or "available" signal on a spare screen.',
      },
      {
        title: 'Color calibration check',
        description: 'Compare how pure green looks across different screens and settings.',
      },
      {
        title: 'Ambient lighting',
        description: 'Add a quick green glow to a room or a photo setup.',
      },
    ],
  },
  blue: {
    intro:
      'Display a solid, fullscreen blue screen. Handy for testing blue subpixels, creating a cool-toned backdrop, or checking how your display handles saturated color.',
    description:
      'Free fullscreen blue screen tool. Test blue subpixels and dead pixels, check color accuracy, or use a blue backdrop or ambient light on any device.',
    uses: [
      {
        title: 'Blue subpixel test',
        description: 'Spot dead or stuck pixels in the blue channel against a solid blue fill.',
      },
      {
        title: 'Chroma key background',
        description: 'Blue works as a keying color when your subject contains green.',
      },
      {
        title: 'Color calibration check',
        description: 'Compare how pure blue looks across different screens and settings.',
      },
      {
        title: 'Cool ambient light',
        description: 'Add a calm blue glow to a room, desk setup, or photo.',
      },
      {
        title: 'Photography backdrop',
        description: 'Use a monitor as a small blue background for product or macro shots.',
      },
      {
        title: 'Night mode comparison',
        description: 'Check how night-light and blue-light filters change your display.',
      },
    ],
  },
  yellow: {
    intro:
      'Fill your screen with a bright, fullscreen yellow. Useful for testing red and green subpixels at once, as a warm light source, or as a cheerful backdrop.',
    description:
      'Free fullscreen yellow screen tool. Test red and green subpixels together, use a warm light source, or create a yellow backdrop. Works on any device.',
    uses: [
      {
        title: 'Combined subpixel test',
        description:
          'Yellow lights red and green subpixels together, so a failure in either one stands out.',
      },
      {
        title: 'Warm light source',
        description: 'Use a tablet or phone as a warm, soft fill light.',
      },
      {
        title: 'Caution & status screen',
        description: 'Show a clear "wait" or "caution" signal on a spare screen.',
      },
      {
        title: 'Photography backdrop',
        description: 'Use a monitor as a small, bright yellow background for photos.',
      },
      {
        title: 'Color calibration check',
        description: 'Check for any green or orange tint in how your display shows yellow.',
      },
      {
        title: 'Mood lighting',
        description: 'Add a sunny glow to a room or event.',
      },
    ],
  },
  gray: {
    intro:
      'Show a neutral, fullscreen gray screen. Ideal for checking panel uniformity, clouding, banding, and dirty-screen effect on TVs and monitors.',
    description:
      'Free fullscreen gray screen tool. Check monitor uniformity, clouding, banding, and dirty screen effect, or use a neutral backdrop. No sign-up.',
    uses: [
      {
        title: 'Dirty screen effect (DSE)',
        description:
          'A mid-gray fill shows the blotchy patches or vertical bands that some panels have.',
      },
      {
        title: 'Uniformity & clouding',
        description: 'Uneven brightness and vignetting are easiest to see on a neutral gray.',
      },
      {
        title: 'Color tint check',
        description: 'True gray should look neutral, so any pink or green tint means calibration is off.',
      },
      {
        title: 'Neutral backdrop',
        description: 'Use a monitor as a soft, neutral background for photos or video calls.',
      },
      {
        title: 'Eye-friendly dim light',
        description: 'A gray screen gives off soft light that is easier on the eyes than full white.',
      },
      {
        title: 'Screen cleaning',
        description: 'Mid-gray shows both dark smudges and light dust while you clean.',
      },
    ],
  },
}
