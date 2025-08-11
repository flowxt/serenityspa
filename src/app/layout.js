import { Inter, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default:
      "Serenity Spa Noémie Saddier - Spa Privatif La Roche-sur-Foron | Institut de Beauté Haute-Savoie",
    template: "%s | Serenity Spa Noémie Saddier",
  },
  description:
    "🌸 Serenity Spa Noémie Saddier à La Roche-sur-Foron : spa privatif luxueux avec hammam, sauna, jacuzzi. Institut de beauté premium, soins esthétiques MySpa, HydraFace, LED thérapie, Skinnéo, massages bien-être en Haute-Savoie. Réservation en ligne disponible.",
  keywords:
    "spa privatif La Roche-sur-Foron, Noémie Saddier, institut beauté Haute-Savoie, hammam sauna jacuzzi, massages bien-être, soins visage MySpa, HydraFace Yumi Beauty, LED thérapie, Skinnéo stimulation, épilation, manucure pédicure, soins esthétiques, spa privatif 74, détente relaxation, centre bien-être La Roche, massage pierre chaude, soin anti-âge, cure beauté",
  authors: [
    { name: "Noémie Saddier", url: "https://serenityspanoemiesaddier.fr" },
  ],
  creator: "Noémie Saddier",
  publisher: "Serenity Spa Noémie Saddier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://serenityspanoemiesaddier.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Serenity Spa Noémie Saddier - Spa Privatif Luxueux à La Roche-sur-Foron",
    description:
      "🌸 Découvrez notre spa privatif unique avec hammam, sauna, jacuzzi à La Roche-sur-Foron. Institut de beauté premium proposant soins visage MySpa, HydraFace, LED thérapie, massages bien-être. Réservez votre moment de détente en Haute-Savoie.",
    url: "https://serenityspanoemiesaddier.fr",
    siteName: "Serenity Spa Noémie Saddier",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/image/accueil-serenityspa.jpeg",
        width: 1200,
        height: 630,
        alt: "Serenity Spa Noémie Saddier - Spa Privatif La Roche-sur-Foron",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenity Spa Noémie Saddier - Spa Privatif La Roche-sur-Foron",
    description:
      "🌸 Spa privatif luxueux avec hammam, sauna, jacuzzi. Institut de beauté premium en Haute-Savoie.",
    images: ["/image/accueil-serenityspa.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Ajoutez vos codes de vérification ici quand vous les aurez
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SpaOrBeautyShop",
        "@id": "https://serenityspanoemiesaddier.fr/#spa",
        name: "Serenity Spa Noémie Saddier",
        alternateName: "Serenity Spa",
        description:
          "Spa privatif luxueux avec hammam, sauna, jacuzzi et institut de beauté premium à La Roche-sur-Foron en Haute-Savoie",
        url: "https://serenityspanoemiesaddier.fr",
        telephone: "+33450256867",
        email: "ns.serenityspa@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "43 rue Perrine",
          addressLocality: "La Roche-sur-Foron",
          postalCode: "74800",
          addressRegion: "Haute-Savoie",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "46.06593347110843",
          longitude: "6.309228576584996",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Monday",
            opens: "10:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "17:30",
          },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: ["Cash", "Credit Card"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Spa et Beauté",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Spa Privatif",
                description:
                  "Espace spa privatif avec hammam, sauna et jacuzzi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Soins Visage MySpa",
                description:
                  "Soins visage traditionnels avec option LED thérapie",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HydraFace by Yumi Beauty",
                description:
                  "Technologie HydraFace pour nettoyage profond et régénération",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Massages Bien-être",
                description: "Massages relaxants et thérapeutiques",
              },
            },
          ],
        },
        founder: {
          "@type": "Person",
          name: "Noémie Saddier",
        },
        sameAs: [
          "https://www.kalendes.com/site/serenityspanoemiesaddier/welcome",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://serenityspanoemiesaddier.fr/#website",
        url: "https://serenityspanoemiesaddier.fr",
        name: "Serenity Spa Noémie Saddier",
        description:
          "Site officiel du Serenity Spa Noémie Saddier à La Roche-sur-Foron",
        inLanguage: "fr-FR",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://serenityspanoemiesaddier.fr/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#c4a484" />
        <meta name="msapplication-TileColor" content="#c4a484" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
