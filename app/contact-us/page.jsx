import ContactUs from "./ContactUs";

export const metadata = {
  title: "Contact Us | Charter Bus Rental Toronto | GTACoach",
  description:
    "Contact GTACoach for reliable charter bus rentals in Toronto & GTA. Call, email, or send us a message for group transportation, airport transfers, and corporate travel.",

  keywords:
    "contact GTACoach, charter bus Toronto contact, bus rental phone number Toronto, GTA transportation contact, coach rental inquiry Toronto",

  alternates: {
    canonical: "https://gtacoach.com/contact-us",
    languages: {
      "en-ca": "https://gtacoach.com/contact-us",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "Contact Us | Charter Bus Rental Toronto | GTACoach",
    description:
      "Get in touch with GTACoach for charter bus rentals and group transportation services in Toronto & GTA.",
    url: "https://gtacoach.com/contact-us",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/contact-slide.jpg",
        width: 1920,
        height: 1080,
        alt: "Contact GTACoach",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Charter Bus Rental Toronto | GTACoach",
    description:
      "Reach out to GTACoach for bus rentals, group transportation, and travel services in Toronto & GTA.",
    images: ["https://gtacoach.com/slides/contact-slide.jpg"],
  },

  other: {
    "DC.title": "Contact Us | Charter Bus Rental Toronto | GTACoach",
  },
};

export default function Page() {
  return <ContactUs />;
}