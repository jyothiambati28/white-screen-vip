import Link from 'next/link'
import { Logo } from './logo'
import { mainNav } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {mainNav.map((item, index) => (
              <li key={item.href} className={index > 1 ? 'hidden sm:block' : undefined}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
