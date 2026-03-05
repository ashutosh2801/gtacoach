import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Charter Bus Rental Toronto | Group Transportation | GTACoach",
  description:
    "Reliable charter bus rentals in Toronto & GTA. Book group transportation for corporate events, airport transfers, tours & more. Safe, comfortable & on time.",
  keywords:
    "Toronto bus charter, GTA coach rental, charter bus Toronto, school bus rental Toronto, corporate transportation GTA, wedding bus rental Toronto",

  metadataBase: new URL("https://gtacoach.com"),

  alternates: {
    canonical: "/", 
    languages: {
      "en-ca": "https://gtacoach.com",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "Charter Bus Rental Toronto | Group Transportation | GTACoach",
    description:
      "Reliable charter bus rentals in Toronto & GTA. Book group transportation for corporate events, airport transfers, tours & more. Safe, comfortable & on time.",
    url: "https://gtacoach.com/",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/slide-2.jpg",
        width: 1920,
        height: 1080,
        alt: "GTACoach Toronto Bus Charter Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Charter Bus Rental Toronto | Group Transportation | GTACoach",
    description:
      "Reliable charter bus rentals in Toronto & GTA. Book group transportation for corporate events, airport transfers, tours & more. Safe, comfortable & on time.",
    images: ["https://gtacoach.com/slides/slide-2.jpg"],
  },

  other: {
    "DC.title":
      "Charter Bus Rental Toronto | Group Transportation | GTACoach",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
