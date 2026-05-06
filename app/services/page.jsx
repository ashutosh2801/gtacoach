import Services from "./Services";

export const metadata = {
  title: "Transportation Services | Charter Bus & Group Travel | GTACoach",
  description:
    "Explore GTACoach transportation services including charter buses, airport transfers, corporate travel, city tours, and group trips across Toronto & the GTA.",
  keywords:
    "charter bus services Toronto, group transportation GTA, airport shuttle Toronto, corporate travel bus, city tours Toronto, bus rental services GTA",

  alternates: {
    canonical: "https://gtacoach.com/services",
    languages: {
      "en-ca": "https://gtacoach.com/services",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "Transportation Services | Charter Bus & Group Travel | GTACoach",
    description:
      "Discover reliable charter bus and group transportation services in Toronto & GTA. Airport transfers, corporate travel, tours, and more.",
    url: "https://gtacoach.com/services",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/service-slide.jpg",
        width: 1920,
        height: 1080,
        alt: "GTACoach Transportation Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Transportation Services | Charter Bus & Group Travel | GTACoach",
    description:
      "Explore GTACoach services including charter buses, airport transfers, and corporate transportation across Toronto & GTA.",
    images: ["https://gtacoach.com/slides/service-slide.jpg"],
  },

  other: {
    "DC.title":
      "Transportation Services | Charter Bus & Group Travel | GTACoach",
  },
};

export default function Page() {
  return <Services />;
}