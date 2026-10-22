import Link from "next/link";
import { colorScreens } from "@/lib/tools";

export function OtherColors({ currentSlug, heading = "Other colour screens" }: { currentSlug?: string; heading?: string }) {
  return (
    <section className="section" aria-labelledby="other-colours-heading">
      <h2 id="other-colours-heading">{heading}</h2>
      <p className="muted">Each colour has its own page, so you can bookmark or share a direct link.</p>
      <ul className="color-grid">
        {colorScreens
          .filter((screen) => screen.slug !== currentSlug)
          .map((screen) => (
            <li key={screen.slug}>
              <Link href={`/${screen.slug}`} className="color-card">
                <span className="color-card-swatch" style={{ backgroundColor: screen.color }} aria-hidden="true" />
                <span className="color-card-text">
                  <strong>{screen.title}</strong>
                  <small>{screen.color.toUpperCase()}</small>
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
