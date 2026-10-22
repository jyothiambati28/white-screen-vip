import { ScreenTool } from '@/components/screen-tool/screen-tool'

type HeroProps = {
  colorId?: string
  title?: string
  intro?: string
}

export function Hero({
  colorId = 'white',
  title = 'White Screen',
  intro = 'Turn your display into a clean, bright white screen in one click. Use it as a light source, to test for dead pixels, or to clean your monitor — or switch to any other color.',
}: HeroProps) {
  return (
    <section id="tool" aria-labelledby="hero-heading" className="scroll-mt-20 pb-8 pt-10 sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        </div>
        <ScreenTool key={colorId} initialColorId={colorId} />
      </div>
    </section>
  )
}
