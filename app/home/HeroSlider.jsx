"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "../../slides/slide-1.jpg",
    title: "Comfort in Every Mile",
    highlight: "Reliability in Every Ride",
    subtitle: "",
    desc:
      "Premium charter bus services across Toronto & beyond",
  },
  {
    image: "../../slides/slide-2.jpg",
    title: "Travel Together",
    highlight: "Arrive On Time",
    subtitle: "Ride in Style",
    desc:
      "Your trusted partner for group transportation",
  },
  {
    image: "../../slides/slide-3.jpg",
    title: "Where Safety",
    highlight: "Meets Comfort",
    subtitle: "",
    desc:
      "Over 37 years of delivering seamless charter experiences",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] lg:h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${
              index === current
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-105 z-10"
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Centered Text */}
          <div className="relative z-30 flex h-full items-center justify-center text-center text-white px-6 top-2 md:top-15">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
                {slide.title} <br />
                <span className="webText">{slide.highlight}</span>{" "}
                <br />
                {slide.subtitle}
              </h1>

              <p className="mt-6 text-gray-200 text-sm px-0 md:px-20">
                {slide.desc}
              </p>

              {/* Buttons */}
              {/* <div className="mt-8 flex justify-center gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-semibold">
                  Get Started
                </button>

                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-md">
                  ▶ Watch Video
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}
