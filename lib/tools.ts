export const SITE_NAME = "WhiteScreen.vip";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://whitescreen-vip-starter.vercel.app";

export type ColorScreen = {
  slug: string;
  name: string;
  title: string;
  color: string;
  description: string;
  details: string;
};

export const colorScreens: ColorScreen[] = [
  { slug: "white-screen", name: "White", title: "White Screen", color: "#ffffff", description: "Display a clean white screen to check brightness, dust, and screen uniformity.", details: "A full white screen can help you spot visible dust, smudges, uneven brightness, and differences in display tint. It also works as a soft fill light for video calls. Clean your display gently before testing." },
  { slug: "black-screen", name: "Black", title: "Black Screen", color: "#000000", description: "Show a full black screen to inspect dark-room glow and pixels.", details: "A black screen is useful for viewing dark-room glow, checking whether pixels appear lit when they should be dark, and spotting dust on glossy panels. Results vary by display technology and brightness settings." },
  { slug: "red-screen", name: "Red", title: "Red Screen", color: "#ff0000", description: "Display solid red to inspect colour pixels and screen uniformity.", details: "Use this solid red field to inspect visible colour inconsistencies and pixels that look different from the surrounding area." },
  { slug: "green-screen", name: "Green", title: "Green Screen", color: "#00c853", description: "Display solid green across your screen.", details: "A solid green field can make some pixel and colour irregularities easier to see. View the screen from a normal distance and avoid staring at high brightness." },
  { slug: "blue-screen", name: "Blue", title: "Blue Screen", color: "#075bff", description: "Display solid blue for a simple colour and pixel check.", details: "A solid blue field helps you visually inspect the display for obvious colour inconsistencies and pixel anomalies." },
  { slug: "yellow-screen", name: "Yellow", title: "Yellow Screen", color: "#ffe600", description: "Fill your display with a bright yellow colour field.", details: "Yellow is one of several primary test colours that can help reveal visible display uniformity issues." },
  { slug: "orange-screen", name: "Orange", title: "Orange Screen", color: "#ff7900", description: "Display a solid orange screen for visual inspection.", details: "Use orange as an additional colour field when comparing how evenly your display renders different colours." },
  { slug: "pink-screen", name: "Pink", title: "Pink Screen", color: "#ff5bbd", description: "Display a solid pink screen.", details: "A pink field provides another simple colour for checking visible tint and uniformity, or for a soft ambient glow." },
  { slug: "purple-screen", name: "Purple", title: "Purple Screen", color: "#8b35ff", description: "Display a solid purple screen for display checks.", details: "Compare purple with other solid colours to check for visible tint or patchiness." },
  { slug: "cyan-screen", name: "Cyan", title: "Cyan Screen", color: "#00e5ff", description: "Display a bright cyan test colour.", details: "A cyan field is useful as part of a broader visual check across several colours." },
  { slug: "magenta-screen", name: "Magenta", title: "Magenta Screen", color: "#ff00c8", description: "Display a solid magenta test colour.", details: "Use magenta with red, green, blue, cyan, yellow, and white fields for a simple visual display check." },
  { slug: "gray-screen", name: "Gray", title: "Gray Screen", color: "#808080", description: "Show a neutral gray field to inspect gradients and uniformity.", details: "Gray fields can make some uniformity issues easier to notice, especially when viewed in a dim room. This is a visual aid, not a calibrated measurement." }
];

export const colorBySlug: Record<string, ColorScreen> = Object.fromEntries(colorScreens.map((screen) => [screen.slug, screen]));

export function isDarkColor(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}
