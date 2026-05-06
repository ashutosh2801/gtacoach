import Careers from "./Careers";

export const metadata = {
  title: "Careers | Bus Driver Jobs & Transportation Careers | GTACoach",
  description:
    "Join GTACoach and build a career in professional transportation. Apply for bus driver and support roles in Toronto & GTA. Competitive opportunities and a safety-first culture.",

  keywords:
    "bus driver jobs Toronto, transportation careers GTA, coach driver jobs Toronto, driving jobs GTA, chauffeur jobs Toronto, bus company careers",

  alternates: {
    canonical: "https://gtacoach.com/careers",
    languages: {
      "en-ca": "https://gtacoach.com/careers",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "Careers | Bus Driver Jobs & Transportation Careers | GTACoach",
    description:
      "Explore career opportunities at GTACoach. Join a professional team focused on safety, reliability, and customer service.",
    url: "https://gtacoach.com/careers",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/careers-slide.jpg",
        width: 1920,
        height: 1080,
        alt: "GTACoach Careers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | Bus Driver Jobs & Transportation Careers | GTACoach",
    description:
      "Apply for transportation and bus driver jobs in Toronto & GTA. Join the GTACoach team today.",
    images: ["https://gtacoach.com/slides/careers-slide.jpg"],
  },

  other: {
    "DC.title":
      "Careers | Bus Driver Jobs & Transportation Careers | GTACoach",
  },
};

export default function Page() {
  return <Careers />;
}