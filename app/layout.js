import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TravelVize - Vize Danışmanlık ve Başvuru Hizmetleri",
  description: "Profesyonel vize danışmanlık hizmetleri. Schengen vizesi, Amerika vizesi, İngiltere vizesi ve daha fazlası için uzman desteği alın.",
  keywords: "vize, vize başvurusu, schengen vizesi, amerika vizesi, vize danışmanlık, travel visa",
};

export default function RootLayout({ children }) {
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
