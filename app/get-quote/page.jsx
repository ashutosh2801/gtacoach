import GetQuote from "./GetQuote";

export const metadata = {
  title: "Request a Quote | Charter Bus Rental Toronto | GTACoach",
  description:
    "Get a fast, personalized quote for charter bus rentals in Toronto & GTA. Book group transportation for corporate events, airport transfers, tours, and more.",

  keywords:
    "charter bus quote Toronto, bus rental quote GTA, group transportation pricing Toronto, coach rental estimate, airport transfer quote GTA",

  alternates: {
    canonical: "https://gtacoach.com/get-quote",
    languages: {
      "en-ca": "https://gtacoach.com/get-quote",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "Request a Quote | Charter Bus Rental Toronto | GTACoach",
    description:
      "Request a custom quote for your group transportation needs in Toronto & GTA. Fast, reliable, and tailored to your trip.",
    url: "https://gtacoach.com/get-quote",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/quote-slide.jpg",
        width: 1920,
        height: 1080,
        alt: "GTACoach Request a Quote",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Request a Quote | Charter Bus Rental Toronto | GTACoach",
    description:
      "Get a quick and easy quote for charter bus rentals and group transportation in Toronto & GTA.",
    images: ["https://gtacoach.com/slides/quote-slide.jpg"],
  },

  other: {
    "DC.title": "Request a Quote | Charter Bus Rental Toronto | GTACoach",
  },
};

export default function Page() {
  return <GetQuote />;
}