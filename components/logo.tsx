import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-md font-semibold tracking-tight"
      aria-label="WhiteScreen.vip home"
    >
      <span
        aria-hidden="true"
        className="flex size-7 items-center justify-center rounded-lg border bg-background shadow-sm"
      >
        <span className="size-3.5 rounded-[4px] border border-foreground/15 bg-white" />
      </span>
      <span>
        WhiteScreen<span className="text-muted-foreground">.vip</span>
      </span>
    </Link>
  )
}
