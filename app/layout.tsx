import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from 'next/head';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Energo Expert Plus - Profesjonalne usługi elektryczne",
  description: "Energo Expert Plus - Profesjonalna firma zajmująca się elektryką, instalacjami przemysłowymi, serwisem i konserwacją. Oferujemy szeroki zakres usług elektrycznych dla klientów prywatnych i firmowych.",
  openGraph: {
    title: "Energo Expert Plus - Profesjonalne usługi elektryczne",
    description: "Profesjonalna firma elektryczna specjalizująca się w instalacjach przemysłowych, serwisie oraz konserwacji systemów elektrycznych.",
    url: "https://energo-expert-plus.pl",
    siteName: "Energo Expert Plus",
    images: [
      {
        url: "/metadata/ENERGO.png", // Ścieżka do obrazu Open Graph
        width: 1200,
        height: 630,
        alt: "Energo Expert Plus - Profesjonalne usługi elektryczne",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@energoexpertplus",
    title: "Energo Expert Plus - Profesjonalne usługi elektryczne",
    description: "Energo Expert Plus oferuje szeroki zakres usług elektrycznych, instalacji przemysłowych oraz serwisu.",
    images: ["/metadata/ENERGO.png"],
  },
  favicon: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/metadata/expert.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* SEO Meta Tags */}
        <meta name="description" content="Energo Expert Plus - Profesjonalna firma zajmująca się elektryką, instalacjami przemysłowymi, serwisem i konserwacją." />
        <meta name="keywords" content="elektryka, instalacje elektryczne, serwis elektryczny, Energo Expert Plus, instalacje przemysłowe" />
        <meta name="author" content="Energo Expert Plus" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://energoexpertplus.com" />
        <meta property="og:title" content="Energo Expert Plus - Profesjonalne usługi elektryczne" />
        <meta property="og:description" content="Profesjonalna firma elektryczna specjalizująca się w instalacjach przemysłowych, serwisie oraz konserwacji systemów elektrycznych." />
        <meta property="og:image" content="https://energoexpertplus.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://energoexpertplus.com" />
        <meta name="twitter:title" content="Energo Expert Plus - Profesjonalne usługi elektryczne" />
        <meta name="twitter:description" content="Energo Expert Plus oferuje szeroki zakres usług elektrycznych, instalacji przemysłowych oraz serwisu." />
        <meta name="twitter:image" content="https://energoexpertplus.com/og-image.jpg" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Umieszczamy Header na górze */}
        <Header />
        {/* Reszta zawartości strony */}
        {children}
        {/* Footer na dole */}
        <Footer />
      </body>
    </html>
  );
}
