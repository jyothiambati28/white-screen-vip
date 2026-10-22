import { ColorScreenTool } from "@/components/color-screen";
import { OtherColors } from "@/components/other-colors";
import { HowToUse } from "@/components/how-to-use";

export default function HomePage() {
  return (
    <main id="main" className="container page">
      <header className="page-intro">
        <h1>White Screen</h1>
        <p>Turn your display into a clean, bright white screen in one click — or switch to any other colour.</p>
      </header>
      <ColorScreenTool initialColor="#ffffff" />
      <HowToUse />
      <OtherColors currentSlug="white-screen" heading="More colour screens" />
    </main>
  );
}
