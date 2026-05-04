import AboutUs from "./AboutUs";

export const metadata = {
  title: "About GTACoach | Charter Bus Company in Toronto & GTA",
  description:
    "Learn about GTACoach, a trusted charter bus company in Toronto & the GTA. Discover our experience, modern fleet, and commitment to safe, reliable group transportation.",

  keywords:
    "about GTACoach, charter bus company Toronto, GTA transportation company, bus rental company Toronto, group travel experts GTA",

  alternates: {
    canonical: "https://gtacoach.com/about-us",
    languages: {
      "en-ca": "https://gtacoach.com/about-us",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "About GTACoach | Charter Bus Company in Toronto & GTA",
    description:
      "Discover GTACoach’s story, experience, and commitment to providing safe and reliable charter bus transportation in Toronto & GTA.",
    url: "https://gtacoach.com/about-us",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/about-slide.jpg",
        width: 1920,
        height: 1080,
        alt: "About GTACoach",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About GTACoach | Charter Bus Company in Toronto & GTA",
    description:
      "Learn more about GTACoach, a reliable charter bus and group transportation provider in Toronto & the GTA.",
    images: ["https://gtacoach.com/slides/about-slide.jpg"],
  },

  other: {
    "DC.title": "About GTACoach | Charter Bus Company in Toronto & GTA",
  },
};

export default function Page() {
  return <AboutUs />;
}