import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/metadata";
import BackToTop from "@/components/ui/BackToTop";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import BackgroundMusicPlayer from "@/components/ui/BackgroundMusicPlayer";

// Load Google Fonts using variable font config & display swap for optimum compatibility & performance
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = constructMetadata({ path: "/" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="antialiased bg-brand-cream text-brand-charcoal min-h-screen flex flex-col">
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1V07C8MJY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Y1V07C8MJY');
          `}
        </Script>

        <SmoothScroll>
          {children}
          <FloatingWhatsAppButton />
          <BackgroundMusicPlayer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
