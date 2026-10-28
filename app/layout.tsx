import type { Metadata } from "next";
import { Bricolage_Grotesque, Libre_Caslon_Text } from "next/font/google";
import HeartCursor from "@/app/components/heart-cursor";
import "./globals.css";

// Fallback for the big name on devices without Skia (see globals.css).
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display-face",
});

// The serif for everything else, upright and italic.
const serif = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
});

export const metadata: Metadata = {
  title: "Adele Odderskov Wegner",
  description:
    "Masters student at IT-university of copenhagen, with passion for UX-research, Interaction design and creative data dissemination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body className="relative antialiased">
        {children}
        <HeartCursor />
      </body>
    </html>
  );
}
