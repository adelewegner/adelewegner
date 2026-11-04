import type { Metadata } from "next";
import { Bricolage_Grotesque, Libre_Caslon_Text } from "next/font/google";
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

const DESCRIPTION =
  "Master's student at the IT University of Copenhagen with a passion for UX research, interaction design and creative data communication.";

// The title, text and picture shown when the site is shared, e.g. on
// LinkedIn. public/og-image.jpg is a magazine-like cover: "Adele" in a
// large serif over a lime circle on cream, with "an online portfolio,
// follow along", at 1200×627, the size LinkedIn and others expect.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.adelewegner.com"),
  title: "Adele Odderskov Wegner",
  description: DESCRIPTION,
  openGraph: {
    title: "Adele Odderskov Wegner – Portfolio",
    description: DESCRIPTION,
    url: "/",
    siteName: "Adele Odderskov Wegner",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 627,
        alt: "Adele Odderskov Wegner: an online portfolio, follow along",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
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
      </body>
    </html>
  );
}
