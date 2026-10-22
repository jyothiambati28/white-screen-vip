import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/tools";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "White Screen – Full-Screen White & Colour Screens | WhiteScreen.vip",
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Turn your display into a bright white screen or any solid colour in one click. Free, fullscreen, and works on any device.",
  openGraph: {
    siteName: SITE_NAME,
    title: "WhiteScreen.vip – Full-Screen White & Colour Screens",
    description: "Free full-screen white and solid colour screens that run in your browser.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
