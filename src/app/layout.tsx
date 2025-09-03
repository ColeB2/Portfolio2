import type { Metadata } from "next";
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

const pageTitle = "Cole's Portfolio"
const pageDescription = "Showcasing projects in web development, music theory tools, and data science."
const pageUrl = "https://coleb.pages.dev"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Cole B's Portfolio",
    images: [
        {
            url: pageUrl + '/images/avatar.png',
            width: 221,
            height: 68,
        },
    ],
    locale: 'en_US',
    type: 'website',
},
twitter: {
    card: 'summary',
    title: pageTitle,
    description: pageDescription,
    images: pageUrl + '/images/avatar.png',
},
}


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
