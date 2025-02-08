import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || "https://miami-water-co.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    template: "%s | Miami Water Co.",
    default: "Miami Water Co.",
  },
  description:
    "Miami Water Co. presents a refined, non-carbonated RTD beverage crafted with premium ingredients, offering a refreshing experience with a contemporary edge. With its low ABV and sophisticated profile, it's the perfect balance of modern taste and quality.",
  keywords: [
    "Premium Beverages",
    "RTD Drinks",
    "Miami",
    "Low ABV",
    "Craft Beverages",
    "Luxury Drinks",
  ],
  authors: [{ name: "Miami Water Co." }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DOMAIN,
    siteName: "Miami Water Co.",
    title: "Miami Water Co. - Premium Ready-to-Drink Beverages",
    description:
      "Experience the refined taste of Miami's premium ready-to-drink beverage",
    images: [
      {
        url: "/full-layout.jpg",
        width: 1200,
        height: 630,
        alt: "Miami Water Co. Product Display",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Water Co.",
    description: "Premium Ready-to-Drink Beverages from Miami",
    images: ["/full-layout.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
