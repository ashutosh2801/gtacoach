import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <section className="relative w-full h-[520px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="../../banners/quote-banner.jpg"
        alt="Bus Rental"
        className="absolute w-full h-[520px] md:h-full object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Small Heading */}
        <p className="webText uppercase tracking-widest text-sm font-semibold mb-4">
          Premium Bus Charter
        </p>

        {/* Main Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6">
          Group Transportation Just Got <br /> Easier With Our {" "}
          <span className="relative inline-block z-[5]">
            Bus Rental
            <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-sm">
          With our premium rentals, you can book the right vehicle for your needs, from luxury coach buses to smaller vans. We offer hourly and long-distance packages to fit your schedule and budget.
        </p>

        {/* Button */}
        <div className="flex justify-center flex-col md:flex-row text-center">
        <a
          href="/get-quote"
          className="inline-flex justify-center webBG border-3 webBorderColor text-white font-semibold px-9 py-3 rounded transition text-base mr-0 md:mr-3"
        >
          Get a Quote
        </a>
        <a
          href="tel:4165039794"
          className="inline-flex justify-center border-3 webBorderColor text-white font-semibold px-6 py-3 rounded transition text-base mt-2 md:mt-0"
        >
          <PhoneIcon className="h-5 w-5 text-white mr-2" /> (416) 503-9794
        </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
