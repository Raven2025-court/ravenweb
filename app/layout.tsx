import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnel = Funnel_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenpadelgrowth.com"),
  title: {
    default: "Raven Padel",
    template: `%s | Raven Padel`,
  },
  description:
    "Raven Padel specializes in high-quality padel court installation across North America. We offer expert guidance, custom-built courts, and unbeatable pricing. Whether you're a club, resort, or private property owner, bring the fastest-growing sport to your location. Get a quote today!",
  keywords: [
    "Padel court installation",
    "Padel courts for sale",
    "Buy a padel court",
    "Custom padel courts",
    "Padel court builder",
    "Professional padel courts",
    "Padel construction company",
    "Padel court manufacturers",
    "Padel court installation USA",
    "Affordable padel courts",
    "Padel court suppliers",
    "Outdoor padel courts",
    "Indoor padel courts",
    "High-quality padel courts",
    "Padel court business opportunities",
    "Padel court materials",
    "Best padel courts in the US",
    "Padel court cost and pricing",
    "Invest in padel",
    "Padel court dimensions and design",
    "How much does a padel court cost?",
    "Where to buy a padel court in the US?",
    "Best padel court builders in North America",
    "How to start a padel club or business?",
    "Can I install a padel court in my backyard?",
    "Is padel court installation worth it?",
    "Fastest-growing sports in the US: Padel",
    "Padel court maintenance and durability",
    "Padel court installation near me",
    "How to invest in the padel industry?",
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Raven Padel",
    description:
      "Raven Padel specializes in high-quality padel court installation across North America. We offer expert guidance, custom-built courts, and unbeatable pricing. Whether you're a club, resort, or private property owner, bring the fastest-growing sport to your location. Get a quote today!",
    images: [""],
    url: "https://ravenpadelgrowth.com",
    siteName: "Raven Padel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnel.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
