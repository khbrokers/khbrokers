import { Inter, Instrument_Serif } from "next/font/google";

/**
 * Project typography
 * Use: font-sans (Inter) | font-serif (Instrument Serif)
 * Or: className="font-serif" for serif, default is font-sans
 */
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

/** Combined className for layout (apply to body/html) */
export const fontVariables = `${fontSans.variable} ${fontSerif.variable}`;
