import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for WhiteScreen.vip full-screen colour displays."
};

export default function Page() {
  return (
    <main id="main" className="container page prose">
      <h1>Terms of Use</h1>
      <p>
        WhiteScreen.vip provides free full-screen colour displays for general use. Use them at your own discretion. Colour
        screens are visual aids and do not guarantee the detection of display faults.
      </p>
      <h2>Using this website</h2>
      <p>
        You can leave fullscreen at any time by pressing Esc. Avoid prolonged viewing at maximum brightness. If you have a
        hardware concern, consult your device manufacturer or a qualified technician.
      </p>
    </main>
  );
}
