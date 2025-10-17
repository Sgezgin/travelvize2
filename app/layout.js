import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // 👈 font render'ı hızlandırır
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TravelVize - Vize Danışmanlık ve Başvuru Hizmetleri",
  description:
    "Profesyonel vize danışmanlık hizmetleri. Schengen vizesi, Amerika vizesi, İngiltere vizesi ve daha fazlası için uzman desteği alın.",
  keywords:
    "vize, vize başvurusu, schengen vizesi, amerika vizesi, vize danışmanlık, travel visa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Preconnect for better network performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* 👇 GA4 ve GTM'in etkisini azaltmak için: async yükleme */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PP9QSJGZ"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PP9QSJGZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* ✅ GTM Script (async, render bloklamaz) */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-PP9QSJGZ', { anonymize_ip: true });
            `,
          }}
        />
      </body>
    </html>
  );
}
