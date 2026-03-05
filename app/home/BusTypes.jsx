"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BusTypes() {
  return (
    <section className="bg-gray-100 py-15">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="max-w-5xl mb-2">
                <span className="webText font-semibold mb-3 text-sm uppercase tracking-widest">
                    Our Buses
                </span>

                <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
                    Modern, Comfortable, and {" "}
                    <span className="relative inline-block z-[5]">
                    Reliable
                    <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                    </span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm mt-5 mb-2 md:mb-8">
                    Reliable Bus Charter Services Across Toronto & Beyond <br></br>We offer safe, comfortable, and tailored transportation for groups of any size. Whether it’s a corporate event, wedding, airport transfer, or school trip, our team makes travel simple and enjoyable.
                </p>
            </div>
            <div>
                <a href="/fleet" className="inline-block webBG text-white px-8 py-4 mb-4 lg:mb-0 rounded-md font-semibold cursor-pointer transition">
                    View All Fleet
                </a>
            </div>
        </div>

        {/* CARDS */}
        <div>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                spaceBetween={20}
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
                    slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            {/* <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                    $950 - $2000 (4-8 hours)
                                </span>
                            </div> */}

                            <img
                            src="../../buses/1.webp"
                            alt="Coach Buses"
                            className="mx-auto h-55 object-contain p-10"
                            />
                        </div>
                        <div className="p-6 min-h-[360px]">
                            <h3 className="text-xl font-semibold mb-4">Coach Buses</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            Luxury full-size coaches designed for corporate events, long-distance tours, and premium group travel.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            Plush reclining seats with spacious legroom for maximum comfort on extended journeys.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Large panoramic windows for a scenic, elevated travel experience.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Professional, uniformed drivers committed to punctuality, safety, and exceptional service.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                The perfect choice for cross-border travel across Canada and the USA.
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            {/* <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                    $750 - $1700 (4-8 hours)
                                </span>
                            </div> */}

                            <img
                            src="../../buses/2.webp"
                            alt="Coach Buses"
                            className="mx-auto h-55 object-contain p-10"
                            />
                        </div>
                        <div className="p-6 min-h-[360px]">
                            <h3 className="text-xl font-semibold mb-4">Mini Buses</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Premium mid-size vehicles ideal for corporate outings, private events, and airport transfers.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            Comfortable, modern interiors designed for smooth and stylish city travel.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            Efficient maneuverability for downtown routes and event venues.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Ideal for business teams, wedding guests, and private group transportation.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Reliable, on-time service tailored to your schedule.
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                    $650 - $1500 (4-8 hours)
                                </span>
                            </div>

                            <img
                            src="../../buses/3.webp"
                            alt="Coach Buses"
                            className="mx-auto h-50 object-contain p-10"
                            />
                        </div>
                        <div className="p-6 min-h-[460px]">
                            <h3 className="text-xl font-semibold mb-4">School Buses</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Trusted and dependable transportation for schools, camps, sports teams, and community groups.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                High safety standards with well-maintained vehicles and experienced drivers.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Practical solution for large group transfers and organized outings.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Affordable without compromising reliability.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Flexible scheduling to meet your group’s needs.
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide> */}

                <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            {/* <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                $600 - $1800 (4-8 hours)
                                </span>
                            </div> */}

                            <img
                            src="../../buses/4.webp"
                            alt="Coach Buses"
                            className="mx-auto h-55 object-contain p-5"
                            />
                        </div>
                        <div className="p-6 min-h-[360px]">
                            <h3 className="text-xl font-semibold mb-4">Sprinter Vans</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Executive-style vans perfect for small groups, corporate executives, and VIP clients.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Discreet, comfortable, and refined travel experience.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Ideal for airport pickups, weddings, private tours, and business travel.    
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Smooth ride with flexible luggage space for added convenience.
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Personalized service designed around your itinerary.
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
  );
}
