import Link from "next/link";
import { ColorsMenu } from "@/components/colors-menu";
import { ColorSearch } from "@/components/color-search";
import { Logo } from "@/components/Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="WhiteScreen.vip home">
          <Logo />
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <ColorsMenu />
          <ColorSearch />
        </nav>
      </div>
    </header>
  );
}
