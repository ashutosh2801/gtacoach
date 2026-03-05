"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Script from "next/script";

const GetQuote = () => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [destDate, setDestDate] = useState(null);
  const [destTime, setDestTime] = useState(null);

  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <img
            src="../../slides/quote-slide.jpg"
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
                Online Request
            </p>

            <h1 className="text-4xl lg:text-4xl font-semibold mt-4 leading-tight">
            Request a
            {" "}
            <span className="relative inline-block z-[5]">
                Quote
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>{" "}
            </h1>

            <p className="mt-6 text-sm text-gray-200">
            Your success is our priority. We combine expertise, innovation, and dedication to provide solutions that truly make a difference.
            </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="container mx-auto px-6">

          <iframe
            id="JotFormIFrame-260633586211050"
            title="Trip Information"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/260633586211050"
            className="w-full !h-[2100px] md:!h-[1450px]"
          ></iframe>

          <Script
            src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
            strategy="lazyOnload"
          />

          <Script id="jotform-trip-handler">
            {`
              window.jotformEmbedHandler("iframe[id='JotFormIFrame-260633586211050']", "https://form.jotform.com/")
            `}
          </Script>
          

          {/* <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-semibold">
              Trip Information
            </h2>
            <span className="text-gray-500 text-sm">Step 1 of 2</span>
          </div>

          <div className="border-t border-gray-200 mt-2 mb-5" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="col-span-2">
              <label className="text-sm font-medium flex text-gray-800">
                Starting from <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Search location"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
              />
            </div>

            <div className="col-span-1">
              <label className="text-sm font-medium flex text-gray-800">
                On <span className="text-red-500">*</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select date"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
                dateFormat="MM/dd/yyyy"
              />
            </div>

            <div className="col-span-1">
              <label className="text-sm font-medium flex text-gray-800">At</label>
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                placeholderText="Select time"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="col-span-2">
              <label className="text-sm font-medium w-full flex text-gray-800">
                Destination <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Search location"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
              />
            </div>

            <div className="col-span-1">
              <label className="text-sm font-medium w-full flex text-gray-800">
                On <span className="text-red-500">*</span>
              </label>
              <DatePicker
                selected={destDate}
                onChange={(date) => setDestDate(date)}
                placeholderText="Select date"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
                dateFormat="MM/dd/yyyy"
              />
            </div>

            <div className="col-span-1">
              <label className="text-sm font-medium w-full flex text-gray-800">At</label>
              <DatePicker
                selected={destTime}
                onChange={(time) => setDestTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select time"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium flex text-gray-800">
                Tell us about your transportation needs:
              </label>
              <textarea
                placeholder="The more details, the better. We'll take it from there."
                className="w-full mt-1 h-32 border rounded-lg bg-gray-100 border-gray-200 text-sm focus:outline-none p-3 resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex text-gray-800">
                If you have one, upload a trip file or itinerary:
              </label>
              <div className="w-full mt-1 h-32 border border-gray-200 bg-gray-100 rounded-lg flex flex-col justify-center items-center text-gray-500 text-center">
                <p>Attach a file or drag one here.</p>
                <span className="text-xs mt-1">
                  Example file types: PDF, JPG, CSV
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                Est. number of passengers <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                defaultValue="1"
                className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                Group type <span className="text-red-500">*</span>
              </label>
              <select className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none">
                <option>Please choose your group type</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                Preferred Bus Type <span className="text-red-500">*</span>
              </label>
              <select className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none">
                <option>Select Preferred Bus Type</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-semibold">
              Contact Information
            </h2>
            <span className="text-gray-500 text-sm">Step 2 of 2</span>
          </div>

          <div className="border-t border-gray-200 mt-2 mb-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                First Name <span className="text-red-500">*</span>
              </label>
              <input className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none" />
            </div>

            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                E-mail address <span className="text-red-500">*</span>
              </label>
              <input className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none" />
            </div>

            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none" />
            </div>

            <div>
              <label className="text-sm font-medium w-full flex text-gray-800">Company</label>
              <input className="w-full mt-1 h-11 border rounded-lg bg-gray-100 border-gray-200 px-3 text-sm focus:outline-none" />
            </div>
          </div>
          <button className="w-full h-12 webBG hover:opacity-90 transition text-white rounded text-lg font-medium cursor-pointer">
            Submit
          </button> */}
        </div>
      </section>
    </main>
  );
};

export default GetQuote;
