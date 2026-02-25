"use client";

import React from "react";
import Link from "next/link";

const Careers = () => {
  return (
    <main>

        {/* ================= HERO SECTION ================= */}
        <section className="relative h-[500px] flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <img
                src="../../slides/careers-slide.jpg"
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
                    Careers
                </p>

                <h1 className="text-4xl lg:text-4xl font-semibold mt-4 leading-tight">
                Join Our
                {" "}
                <span className="relative inline-block z-[5]">
                    Team
                    <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                </span>{" "}
                </h1>

                <p className="mt-6 text-sm text-gray-200">
                Become part of a professional transportation team dedicated to
                safety, reliability, and exceptional customer service.
                </p>
            </div>
        </section>

      {/* CONTENT SECTION */}
      <section className="bg-gray-100 py-15">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    Drive With Excellence
                    </h2>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    At <span className="font-semibold text-gray-800">GTA Crew Services</span>, 
                    we are always looking to hire the very best drivers with the proper 
                    qualifications, who can provide the very best in customer service 
                    and safety when it comes to driving.
                    </p>

                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    It’s a special kind of person that can continually provide this 
                    type of service to our customers. If you take pride in professionalism, 
                    safety, and delivering an outstanding customer experience, we would 
                    love to hear from you.
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed">
                    Thank you for your interest in GTA Crew Services, however only 
                    chosen candidates will be contacted.
                    </p>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">

                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Apply Today
                    </h3>

                    <p className="text-gray-600 text-sm mb-6">
                    We invite you to send your resume using one of the following methods:
                    </p>

                    <div className="space-y-5">

                        {/* Fax */}
                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                            <p className="text-sm text-gray-700">Fax Your Resume</p>
                            <a
                            href="tel:4165039795"
                            className="text-lg font-semibold webText hover:underline"
                            >
                            (416) 503-9795
                            </a>
                        </div>

                        {/* Email */}
                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                            <p className="text-sm text-gray-700">Email Your Resume</p>
                            <a
                            href="mailto:info@gtacoach.com"
                            className="text-lg font-semibold webText hover:underline"
                            >
                            info@gtacoach.com
                            </a>
                        </div>

                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Link
                            href="mailto:info@gtacoach.com"
                            className="block text-center w-full webBG hover:opacity-90 transition text-white py-3 rounded-lg font-medium"
                        >
                            Send Resume Now
                        </Link>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-15">
        <div className="container mx-auto px-6">
          <div className="bg-[#091622] rounded-2xl text-center py-16 px-6 text-white">

            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              Ready to Start Your Career With Us?
            </h2>

            <p className="max-w-3xl mx-auto text-sm text-gray-200 mb-8">
              Join a trusted transportation company that values professionalism,
            safety, and long-term growth.
            </p>

            <Link
              href="mailto:info@gtacoach.com"
              className="inline-block webBG hover:opacity-90 transition duration-300 webBorderColor text-white font-semibold px-8 py-3 rounded"
            >
              Apply Now
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Careers;
