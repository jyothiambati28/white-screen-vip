import Link from "next/link";
import { OtherColors } from "@/components/other-colors";

export default function NotFound() {
  return (
    <main id="main" className="container page">
      <header className="page-intro">
        <p className="kicker">404 · Page not found</p>
        <h1>This page isn&apos;t available.</h1>
        <p>The tool you were looking for has been removed or the address is incorrect.</p>
        <Link href="/" className="button button-primary">
          Back to the white screen
        </Link>
      </header>
      <OtherColors heading="Available colour screens" />
    </main>
  );
}
