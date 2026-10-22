import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How WhiteScreen.vip handles your data. The colour screens run entirely in your browser."
};

export default function Page() {
  return (
    <main id="main" className="container page prose">
      <h1>Privacy Policy</h1>
      <p>
        WhiteScreen.vip runs entirely in your browser. The colour screens do not capture your screen contents, use your
        camera or microphone, or require an account. Nothing you choose on this site is uploaded or stored.
      </p>
      <h2>Hosting data</h2>
      <p>
        Standard hosting infrastructure may process technical request data such as IP address, browser information, and
        request logs. If analytics, advertising, or third-party services are added, this policy will be updated to
        describe them.
      </p>
    </main>
  );
}
