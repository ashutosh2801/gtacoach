import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "GTACoach | Toronto Bus Charter & Transportation Services",
  description:
    "GTACoach provides reliable Toronto bus charter and transportation services for corporate events, schools, weddings, and group travel across the GTA. Safe, comfortable, and professional service.",
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
    title: "GTACoach | Toronto Bus Charter & Transportation Services",
    description:
      "Reliable and professional Toronto bus charter services for corporate events, schools, weddings, and group travel across the GTA.",
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
    title: "GTACoach | Toronto Bus Charter & Transportation Services",
    description:
      "Professional Toronto bus charter services for corporate, school, wedding, and group transportation across the GTA.",
    images: ["https://gtacoach.com/slides/slide-2.jpg"],
  },

  other: {
    "DC.title":
      "GTACoach | Toronto Bus Charter & Transportation Services",
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
