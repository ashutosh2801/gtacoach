"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Partners() {
  return (
    <section className="bg-gray-100 py-15">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
            <p className="webText font-semibold mb-3 text-sm uppercase tracking-widest">
                Our Partners
            </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Trusted by Industry {" "}
            <span className="relative inline-block z-[5]">
               Leaders
              <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>
          </h2>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
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
        </Swiper>
      </div>
    </section>
  );
}