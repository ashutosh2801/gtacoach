"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    text: `Excellent service from planning to drop-off. The drivers were professional and punctual.`,
    name: "Susan H.",
  },
  {
    text: `Comfortable buses, great amenities, and smooth travel — highly recommend for any group event.`,
    name: "John C.",
  },
  {
    text: `GTACoach handled our corporate conference transportation flawlessly. The bus arrived early, the driver was professional, and the entire experience was smooth from start to finish. Highly recommended!`,
    name: "Michael R.",
  },
  {
    text: `We booked GTACoach for our wedding guests, and they exceeded expectations. The buses were clean, comfortable, and perfectly on schedule. It took so much stress off our special day.`,
    name: "Amanda L.",
  },
  {
    text: `Our group airport transfer was seamless. Plenty of luggage space, comfortable seating, and punctual service. We’ll definitely use them again.`,
    name: "David S.",
  },
  {
    text: `Safety was our biggest concern for our school trip, and GTACoach delivered. The driver was courteous and professional, and the students had a comfortable ride.`,
    name: "Sarah T.",
  },
  {
    text: `We hired GTACoach for our team’s tournament travel, and the experience was excellent. Reliable, affordable, and very well organized. Great service!`,
    name: "Jason M.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-15">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="../../banners/testimonial.jpg"
              alt="Testimonial"
              className="w-full md:min-h-[500px] rounded-t-xl md:rounded-l-xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative rounded-md p-10 md:p-14 bg-gray-100 min-h-[500px] rounded-b-xl md:rounded-r-xl">
            
            <span className="webText font-semibold mb-3 text-sm uppercase tracking-widest">
              TESTIMONIALS
            </span>

            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900 mt-2">
              What are they saying
            </h2>

            <p className="text-gray-600 text-sm mt-3 max-w-md">
              Hear from our clients about their experiences and the results we’ve delivered.
            </p>

            {/* SWIPER */}
            <div className="mt-8">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-md p-8 shadow-lg">
                      <p className="italic text-gray-700 leading-relaxed text-sm">
                        “{item.text}”
                      </p>

                      <div className="flex items-center gap-4 mt-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {item.name}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {item.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Quote Icon */}
            <div className="absolute top-55 lg:top-60 xl:top-45 right-5 xl:right-20 webBG text-white text-4xl font-bold w-14 h-14 flex items-center justify-center rounded-sm z-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="p-3"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" fill="#FFF"/></svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
