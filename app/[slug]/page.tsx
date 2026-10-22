import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { colorBySlug, colorScreens } from "@/lib/tools";
import { ColorScreenTool } from "@/components/color-screen";
import { HowToUse } from "@/components/how-to-use";
import { OtherColors } from "@/components/other-colors";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return colorScreens.map((screen) => ({ slug: screen.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const screen = colorBySlug[slug];
  if (!screen) return { title: "Page not found" };
  const title = `${screen.title} – Full-Screen ${screen.name} Display Online`;
  const description = `${screen.description} Free fullscreen ${screen.name.toLowerCase()} screen (${screen.color.toUpperCase()}) that works on any device.`;
  return {
    title,
    description,
    alternates: { canonical: `/${screen.slug}` },
    openGraph: { title, description, type: "website", url: `/${screen.slug}` }
  };
}

export default async function ColorPage({ params }: Props) {
  const { slug } = await params;
  const screen = colorBySlug[slug];
  if (!screen) notFound();

  return (
    <main id="main" className="container page">
      <header className="page-intro">
        <h1>{screen.title}</h1>
        <p>{screen.description}</p>
      </header>
      <ColorScreenTool key={screen.slug} initialColor={screen.color} />
      <section className="section about-card" aria-labelledby="about-heading">
        <h2 id="about-heading">About the {screen.title.toLowerCase()}</h2>
        <p>{screen.details}</p>
        <p className="muted">Screen colour pages are visual aids, not professional diagnostics.</p>
      </section>
      <HowToUse colorName={screen.name.toLowerCase()} />
      <OtherColors currentSlug={screen.slug} />
    </main>
  );
}
