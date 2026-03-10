"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const services = [
  {
    title: "Group Charters to Canada/USA",
    image: "../../services/1.jpg",
    desc: "We offer custom coach services for large groups going to conferences, festivals, or tours.",
  },
  {
    title: "Group Sporting Events",
    image: "../../services/2.jpg",
    desc: "We provide reliable rides for teams and fans heading to games and tournaments.",
  },
  {
    title: "Airport Shuttles & Transfers",
    image: "../../services/3.jpg",
    desc: "We offer on-time rides to and from major airports, with plenty of room for luggage.",
  },
  {
    title: "Corporate Events",
    image: "../../services/4.jpg",
    desc: "Our professional group transport helps your team arrive on time and stress-free.",
  },
  {
    title: "City Tours",
    image: "../../services/5.jpg",
    desc: "Ride in comfort on our buses for guided tours of Toronto and nearby attractions.",
  },
  {
    title: "Casino Charters",
    image: "../../services/6.jpg",
    desc: "Sit back and enjoy the ride as we take you and your group comfortably to popular casino destinations.",
  },
];

const HomeServices = () => {
  return (
    <section className="py-15 bg-white">
      {/* Heading */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <p className="webText font-semibold tracking-wide text-sm uppercase tracking-widest">
          Our Services
        </p>

        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mt-3">
          We Provide{" "}
          <span className="relative inline-block z-[5]">
            Best Services
            <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
          </span>{" "}
          For You
        </h2>

        <p className="text-gray-600 text-sm mt-4">
          Take a look at our modern, comfortable fleet, which includes spacious coach buses, mini-buses, and sprinter vans. Every vehicle has amenities like Wi-Fi, climate control, and comfortable seating to help you relax or get work done during your trip.
        </p>
      </div>

      {/* Swiper */}
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          className="!pb-10"
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-3xl overflow-hidden group">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-[230px]"
                  />
                </div>

                {/* Content */}
                <div className="py-6 px-4 text-white bg-gray-100">
                  <h3 className="text-base font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 mb-4 min-h-[60px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeServices;
