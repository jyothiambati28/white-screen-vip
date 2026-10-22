import Link from "next/link";
import { Logo } from "@/components/Logo";
import { colorScreens } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="WhiteScreen.vip home">
            <Logo />
          </Link>
          <p>Free full-screen colour displays that run in your browser.</p>
        </div>
        <nav aria-label="Colour screens" className="footer-colours">
          {colorScreens.map((screen) => (
            <Link key={screen.slug} href={`/${screen.slug}`}>
              {screen.title}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WhiteScreen.vip</p>
          <nav aria-label="Site" className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
