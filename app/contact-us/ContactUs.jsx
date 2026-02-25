"use client";

import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const ContactUs = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-252725726484465']",
        "https://form.jotform.com/"
      );
    }
  }, []);

  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
        <section className="relative h-[500px] flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <img
                src="../../slides/contact-slide.jpg"
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
                    Contact Us
                </p>

                <h1 className="text-4xl lg:text-4xl font-semibold mt-4 leading-tight">
                We are here to 
                {" "}
                <span className="relative inline-block z-[5]">
                    help
                    <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                </span>{" "}
                </h1>

                <p className="mt-6 text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-15">
        <div className="container mx-auto px-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Phone */}
            <SwiperSlide>
              <div className="bg-gray-100 text-gray-900 p-10 min-h-[300px] rounded-lg">
                <div className="webBG rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <a href="tel:4165039794" className="block mb-4">
                  (416) 503-9794
                </a>
                <a href="tel:4165039794" className="mb-4">
                  (416) 503-9794
                </a>
              </div>
            </SwiperSlide>

            {/* Email */}
            <SwiperSlide>
              <div className="bg-gray-100 text-gray-900 p-10 min-h-[300px] rounded-lg">
                <div className="webBG rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <a href="mailto:info@gtacoach.com">
                  info@gtacoach.com
                </a>
              </div>
            </SwiperSlide>

            {/* Location */}
            <SwiperSlide>
              <div className="bg-gray-100 text-gray-900 p-10 min-h-[300px] rounded-lg">
                <div className="webBG rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MapPinIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <a href="https://maps.app.goo.gl/tvrQxosc5Fjq58Dx7" target="_blank">
                  16 Arnold St, Toronto, ON M8Z 5A6
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ================= MAP + FORM SECTION ================= */}
      <section className="py-15 bg-gray-100">
        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE - GOOGLE MAP */}
            <div className="w-full h-[300px] md:h-[640px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.446503575275!2d-79.52201060915814!3d43.6180649089231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37d69149d6b1%3A0x6bd920a34f52c3b3!2s16%20Arnold%20St%2C%20Etobicoke%2C%20ON%20M8Z%205A6%2C%20Canada!5e0!3m2!1sen!2slk!4v1766496998364!5m2!1sen!2slk"
                width="100%"
                height="100%"
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="bg-white shadow-lg rounded-lg p-8 md:h-[640px]">

            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                Get In Touch
            </h2>

            <form className="space-y-6">

                {/* Name */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-200 text-sm rounded-md px-4 py-3 focus:outline-none"
                    required
                />
                </div>

                {/* Email */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-200 text-sm rounded-md px-4 py-3 focus:outline-none"
                    required
                />
                </div>

                {/* Phone */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-200 text-sm rounded-md px-4 py-3 focus:outline-none"
                    required
                />
                </div>

                {/* Message */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                </label>
                <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-200 text-sm rounded-md px-4 py-3 focus:outline-none"
                    required
                ></textarea>
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="w-full webBG shover:opacity-90 transition duration-300 text-white font-semibold py-3 rounded-md cursor-pointer"
                >
                SEND MESSAGE
                </button>

            </form>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ContactUs;
