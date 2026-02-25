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
            <div className="max-w-3xl mb-2">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo
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
                    slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                    $950 - $2000 (4-8 hours)
                                </span>
                            </div>

                            <img
                            src="../../buses/1.webp"
                            alt="Coach Buses"
                            className="mx-auto h-50 object-contain p-10"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Coach Buses</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                45-56 Passengers
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Luxury Options Available
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Onboard Restroom, WiFi Service
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Reclining Seats, Power outlets
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Corporate Retreats, Wedding Transport, Events and Conferences, 250+ Mile Trips
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                    $750 - $1700 (4-8 hours)
                                </span>
                            </div>

                            <img
                            src="../../buses/2.webp"
                            alt="Coach Buses"
                            className="mx-auto h-50 object-contain p-10"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Mini Buses</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                15-35 Passengers
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Overhead Storage
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                WiFi Service
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Reclining Seats
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Corporate Events, Employee Shuttles, Field Trips, Short-Distance Travel, Shuttles & more.
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
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
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">School Buses</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                44-65 (Standard), 10-27 (Mini)
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Most Cost Effective, Large Capacity
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                GPS Tracking
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Fixed Bench Seats
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                School Trips, Sports Teams, Under 150 Mile Trips
                            </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border border-gray-200 rounded-xl bg-white">
                        <div className="bg-gray-300 rounded-t-xl">
                            <div className="flex justify-end pt-2 pr-2">
                                <span className="border border-blue-900 text-blue-900 text-xs px-4 py-1 rounded-full bg-white">
                                $600 - $1800 (4-8 hours)
                                </span>
                            </div>

                            <img
                            src="../../buses/4.webp"
                            alt="Coach Buses"
                            className="mx-auto h-50 object-contain p-10"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Sprinter Vans</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                8-14 Passengers
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Utility & Luxury Options Available
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                WiFi Services, Charging Ports
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Plush Interiors With Individual Seating (Optional)
                            </li>
                            <li className="flex gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                Shuttles, Airport Transfers, Short Trips
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
