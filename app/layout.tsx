import type { Metadata } from "next";
import { Bricolage_Grotesque, Libre_Caslon_Text } from "next/font/google";
import HomeLink from "@/app/components/home-link";
import "./globals.css";

// Fallback for the big name on devices without Skia (see globals.css).
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display-face",
});

// The serif for everything else: the status line, the intro and the buttons.
const serif = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif-face",
});

export const metadata: Metadata = {
  title: "Adele O. Wegner",
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
        <HomeLink />
        {children}
      </body>
    </html>
  );
}
