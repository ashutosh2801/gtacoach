"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Group Charters to Canada/USA",
    image: "/services/1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "Group Sporting Events",
    image: "/services/2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "Airport Shuttles & Transfers",
    image: "/services/3.jpg",
    desc: "Lorem ipsum dolor sit ametconse ctetur adipiscing elit. dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "Corporate Events",
    image: "/services/4.jpg",
    desc: "Lorem ipsum dolor sitamet consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "City Tours",
    image: "/services/5.jpg",
    desc: "Lorem ipsum dolor sit am etconsec tetur adipiscing elit. dolor sit amet consectetur adipiscing elit",
  },
  {
    title: "Casino Charters",
    image: "/services/6.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. dolor sit amet consectetur adipiscing elit",
  },
];

export default function Services() {
  return (
    <main className="bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[500px] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <img
            src="../../slides/service-slide.jpg"
            alt="Transportation Services"
            className="absolute w-full h-[500px] md:h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 mt-25">
            <p className="font-semibold tracking-widest uppercase text-sm text-gray-200">
                <a href="/">Home</a>
                <span className="px-2">/</span>
                Our Services
            </p>

            <h1 className="text-4xl lg:text-4xl font-semibold mt-4 leading-tight">
            Professional Transportation
            {" "}
            <span className="relative inline-block z-[5]">
                Services
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>{" "}
            </h1>

            <p className="mt-6 text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pt-15">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="py-6 px-4 text-white bg-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-15">
        <div className="container mx-auto px-6">
          <div className="bg-[#091622] rounded-2xl text-center py-16 px-6 text-white">

            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              Ready to Work With the Best?
            </h2>

            <p className="max-w-3xl mx-auto text-sm text-gray-200 mb-8">
              Get started by completing a short overview of what your needs are
              and we will reach out immediately to get started crafting the
              perfect bus transportation service for you.
            </p>

            <Link
              href="/get-quote"
              className="inline-block webBG transition duration-300 webBorderColor text-white font-semibold px-8 py-3 rounded"
            >
              REQUEST A QUOTE
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
