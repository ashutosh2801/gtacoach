import Fleet from "./Fleet";

export const metadata = {
  title: "Bus Fleet | Charter Buses & Group Vehicles | GTACoach",
  description:
    "Explore GTACoach’s modern bus fleet including coach buses, mini buses, and sprinter vans. Comfortable, reliable, and ideal for group transportation across Toronto & GTA.",

  keywords:
    "bus fleet Toronto, charter bus vehicles GTA, coach bus rental Toronto, mini bus rental GTA, sprinter van rental Toronto, group transportation vehicles",

  alternates: {
    canonical: "https://gtacoach.com/fleet",
    languages: {
      "en-ca": "https://gtacoach.com/fleet",
    },
  },

  robots: "index, follow",

  openGraph: {
    title: "Bus Fleet | Charter Buses & Group Vehicles | GTACoach",
    description:
      "Discover our fleet of modern charter buses, mini buses, and sprinter vans for comfortable and reliable group travel in Toronto & GTA.",
    url: "https://gtacoach.com/fleet",
    siteName: "GTACoach",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://gtacoach.com/slides/fleet-slide.jpg",
        width: 1920,
        height: 1080,
        alt: "GTACoach Bus Fleet",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bus Fleet | Charter Buses & Group Vehicles | GTACoach",
    description:
      "View GTACoach fleet: coach buses, mini buses, and sprinter vans for group transportation in Toronto & GTA.",
    images: ["https://gtacoach.com/slides/fleet-slide.jpg"],
  },

  other: {
    "DC.title": "Bus Fleet | Charter Buses & Group Vehicles | GTACoach",
  },
};

export default function Page() {
  return <Fleet />;
}