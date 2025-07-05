import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { MetadataRoute } from 'next'

export const metadata: Metadata = {
  title: {
    default: "David Construct | Specialiști în Construcții din Lemn",
    template: "%s | David Construct",
  },
  description: "David Construct este specialistul tău în construcții din lemn. Realizăm case, cabane A-frame, foișoare și alte structuri din lemn de calitate superioară.",
  keywords: "case din lemn, cabane A-frame, foișoare, construcții din lemn, case pe structură de lemn, anexe din lemn, terase din lemn",
  authors: [{ name: "David Construct" }],
  creator: "David Construct",
  publisher: "David Construct",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.davidconstruct.ro',
    title: 'David Construct | Specialiști în Construcții din Lemn',
    description: 'David Construct este specialistul tău în construcții din lemn. Realizăm case, cabane A-frame, foișoare și alte structuri din lemn de calitate superioară.',
    siteName: 'David Construct',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Construct | Specialiști în Construcții din Lemn',
    description: 'David Construct este specialistul tău în construcții din lemn. Realizăm case, cabane A-frame, foișoare și alte structuri din lemn de calitate superioară.',
  },
  verification: {
    google: 'google-site-verification=Z-ChwzBNQIjHi69tL8jd4dc5eP-W9cYapM_Z4J7F_o4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

export function sitemap(): MetadataRoute.Sitemap {
  // ... return array cu url-urile ...
}
