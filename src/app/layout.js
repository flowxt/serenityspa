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
  title:
    "Serenity Spa Noémie Saddier - Spa Privatif La Roche-sur-Foron | Institut de Beauté Haute-Savoie",
  description:
    "Serenity Spa Noémie Saddier à La Roche-sur-Foron : spa privatif avec hammam, sauna, jacuzzi. Institut de beauté, soins esthétiques, massages bien-être en Haute-Savoie. Réservation en ligne.",
  keywords:
    "spa privatif, La Roche-sur-Foron, Noémie Saddier, institut beauté, Haute-Savoie, hammam, sauna, jacuzzi, massages, soins esthétiques",
  authors: [{ name: "Noémie Saddier" }],
  openGraph: {
    title: "Serenity Spa Noémie Saddier - Spa Privatif La Roche-sur-Foron",
    description:
      "Spa privatif avec hammam, sauna, jacuzzi à La Roche-sur-Foron. Institut de beauté et massages bien-être.",
    url: "https://serenity-spa-laroche.fr",
    siteName: "Serenity Spa",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
