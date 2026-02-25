import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function AboutSection() {
  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="webText font-semibold mb-3 text-sm uppercase tracking-widest">
            About GTACoach
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
            More Than 37 Years We <br />
            Provide{" "}
            <span className="relative inline-block z-[5]">
              Bus Charter
              <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>{" "}
            <br />
            Service For You
          </h2>


          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip<br></br><br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip.
          </p>
          <div className="mt-6">
            <b>Our Trusted Partners</b>
            <div className="grid grid-cols-3 gap-2 md:gap-6 mt-3">
              <img src="../../partners/netflix.jpg" alt="netflix" className="object-cover border border-gray-200 rounded-lg px-5 py-3" />
              <img src="../../partners/air-canada.jpg" alt="air-canada" className="object-cover border border-gray-200 rounded-lg px-5 py-3" />
              <img src="../../partners/ax.jpg" alt="ax" className="object-cover border border-gray-200 rounded-lg px-5 py-3" />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center md:justify-start lg:justify-start">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="../../banners/home-abt-1.jpg"
              alt="Bus Service"
              width={420}
              height={520}
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Small Overlay Image */}
          <div className="absolute top-8 md:right-15 lg:-right-2 xl:-right-10 bg-white p-2 rounded-xl shadow-xl hidden md:block">
            <img
              src="../../banners/home-abt-2.jpg"
              alt="Passenger"
              width={250}
              height={260}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-12 left-8 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] px-7 py-6 flex items-center gap-4">
            
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
              <SparklesIcon className="h-7 w-7 webText" />
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-extrabold text-gray-900 leading-none">
                37 <span className="webText">+</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Feature item */
function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
      <span className="text-gray-700 text-sm font-medium">
        {text}
      </span>
    </div>
  );
}
