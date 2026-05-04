"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
            A Legacy of  {" "}
            <span className="relative inline-block z-[5]">
              Experience!
              <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>{" "}
          </h2>


          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl text-sm">
            GTACoach operates with the strong foundation and operational support of GTA Crew Services, a company that has been serving the transportation industry for decades.<br></br><br></br>
            With over 37 years of combined experience, our team understands the importance of punctuality, safety, and professionalism in group transportation. From coordinating transportation for corporate teams to managing logistics for large productions and events, we bring deep industry expertise to every booking.<br></br><br></br>
            Our experience allows us to anticipate challenges, plan efficiently, and deliver a smooth travel experience every time.
          </p>
          <div className="mt-6">
            <b>Our Trusted Partners</b>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="mt-3"
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/netflix.jpg"
                    alt="Netflix"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/air-canada.jpg"
                    alt="Air Canada"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/ax.jpg"
                    alt="American Express"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/aero-logic.jpg"
                    alt="Aero Logic"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/ban-air.jpg"
                    alt="Bangladesh Airline"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/eva-air.jpg"
                    alt="Eva Air"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/cathay-pacific.jpg"
                    alt="Cathay Pacific"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/condor.jpg"
                    alt="Condor"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/emirates.jpg"
                    alt="Emirates"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/etihad.jpg"
                    alt="Etihad"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/lufthansa.jpg"
                    alt="Lufthansa"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/swiss.jpg"
                    alt="Swiss Airlines"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/egyptair.jpg"
                    alt="Egyptair"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/azores.jpg"
                    alt="Sata Azores"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/turkish.jpg"
                    alt="Turkish"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/tap-portugal.jpg"
                    alt="Tap Portugal"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="border border-gray-200 rounded-lg px-6 py-6 bg-gray-50 hover:bg-white transition">
                  <img
                    src="../../partners/american-airlines.jpg"
                    alt="American Airlines"
                    className="mx-auto h-12 object-contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center md:justify-start lg:justify-start">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="../../banners/home-abt-1.jpg"
              alt="Luxury coach bus parked outdoors representing GTACoach transportation services"
              width={420}
              height={520}
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Small Overlay Image */}
          <div className="absolute top-8 md:right-15 lg:-right-2 xl:-right-5 bg-white p-2 rounded-xl shadow-xl hidden md:block">
            <img
              src="../../banners/home-abt-2.jpg"
              alt="Passenger seated comfortably inside modern coach bus interior"
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
