import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Älypuhelin — Soita tekoälylle 24/7 | 0600 411 104",
  description:
    "Soita tekoälylle ja valitse oma gurusi. Vittuilupuhelin, IT-tuki, lemmikkineuvonta, ravitsemusneuvonta ja paljon muuta. 0,98 €/min, 24/7.",
  keywords:
    "älypuhelin, tekoäly, vittuilupuhelin, ai puhelin, soita tekoälylle, ai vittuilupuhelin, it-tuki, lemmikkineuvonta",
  authors: [{ name: "Valkomedia Oy" }],
  robots: "index, follow",
  openGraph: {
    title: "Älypuhelin — Soita tekoälylle 24/7",
    description:
      "Valitse oma gurusi ja soita. Vittuilupuhelin, IT-tuki, lemmikkineuvonta ja paljon muuta. 0,98 €/min.",
    url: "https://älypuhelin.fi",
    siteName: "Älypuhelin.fi",
    locale: "fi_FI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Älypuhelin — Soita tekoälylle 24/7",
    description:
      "Valitse oma gurusi ja soita. Vittuilupuhelin, IT-tuki, lemmikkineuvonta ja paljon muuta.",
  },
  metadataBase: new URL("https://xn--lypuhelin-u2a.fi"),
  alternates: {
    canonical: "https://xn--lypuhelin-u2a.fi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4F46E5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Älypuhelin — Soita tekoälylle",
              description:
                "Tekoälypohjainen puhelinpalvelu. Valitse oma gurusi: vittuilupuhelin, IT-tuki, lemmikkineuvonta ja lisää.",
              provider: {
                "@type": "Organization",
                name: "Valkomedia Oy",
                url: "https://kaupallinen.fi",
              },
              areaServed: "FI",
              serviceType: "AI Phone Service",
              offers: {
                "@type": "Offer",
                price: "0.98",
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "0.98",
                  priceCurrency: "EUR",
                  unitText: "minuutti",
                },
              },
              telephone: "+358600411104",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
