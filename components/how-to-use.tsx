const steps = [
  { title: "Pick a colour", text: "Choose a preset or enter any HEX value with the custom picker." },
  { title: "Go fullscreen", text: "Click “Open fullscreen” or press F on your keyboard." },
  { title: "Switch anytime", text: "Use the arrow keys or number keys 1–9 to change colours." },
  { title: "Exit when done", text: "Press Esc, double-click the screen, or tap Exit." }
];

export function HowToUse({ colorName = "colour" }: { colorName?: string }) {
  return (
    <section className="section" aria-labelledby="how-heading">
      <h2 id="how-heading">How to use the {colorName} screen</h2>
      <ol className="steps">
        {steps.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step-number" aria-hidden="true">
              {index + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
