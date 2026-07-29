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

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
