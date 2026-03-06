"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPinIcon,
  ArchiveBoxIcon,
  ArrowsRightLeftIcon,
  CloudIcon,
  TvIcon,
  AdjustmentsHorizontalIcon,
  RectangleStackIcon,
  WifiIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";


export default function Fleet() {
  return (
    <main className="bg-white">

    {/* ================= HERO SECTION ================= */}
    <section className="relative h-[500px] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <img
            src="../../slides/fleet-slide.jpg"
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
                Bus Fleet
            </p>

            <h1 className="text-4xl lg:text-4xl font-semibold mt-4 leading-tight">
            Modern, Comfortable, and Reliable
            {" "}
            <span className="relative inline-block z-[5]">
                Fleet
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>{" "}
            </h1>

            <p className="mt-6 text-sm text-gray-200">
            Explore our wide range of buses designed to meet your group
            transportation needs.
            </p>
        </div>
    </section>

      {/* ================= COMPARE SECTION ================= */}
      <section className="bg-gray-100 py-15">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-10">
            Compare Motor Coach Bus With Other Vehicles
          </h2>

          {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* CARD 1 */}
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
                <div className="p-6">
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

            {/* CARD 2 */}
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
                <div className="p-6">
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

            {/* CARD 3 */}
            {/* <div className="border border-gray-200 rounded-xl bg-white">
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
            </div> */}

            {/* CARD 4 */}
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
                    className="mx-auto h-55 object-contain p-10"
                    />
                </div>
                <div className="p-6">
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
            </div>

          <div className="text-center mt-12">
            <Link
              href="/get-quote"
              className="inline-block webBG transition duration-300 webBorderColor text-white font-semibold px-8 py-3 rounded"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PRICING TABLE ================= */}
      <section className="bg-[#091622] text-white py-15">
        <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl font-semibold mb-6">
                Estimated Motor Coach {" "}
                <span className="relative inline-block z-[5]">
                Bus Prices
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                </span> {" "}
                in Top Cities
            </h2>

          <p className="max-w-3xl mx-auto text-sm text-gray-200 mb-12">
            Indicative prices for motor coach bus rentals in major cities are shown below. 
            These prices may vary based on factors such as location, group size, trip duration,
            seasonal demand, route complexity, amenities, and other variables.
          </p>

          <div className="bg-white text-gray-800 rounded-lg overflow-hidden">
            <div className="w-full">
                <table className="w-full text-left border-collapse">

                    {/* TABLE HEAD (Hidden on Mobile) */}
                    <thead className="bg-gray-200 hidden md:table-header-group">
                    <tr>
                        <th className="p-4">City</th>
                        <th className="p-4">Minimum booking hours</th>
                        <th className="p-4">Estimated cost</th>
                    </tr>
                    </thead>

                    <tbody>
                    {[
                        ["New York City", "5", "$1150 - $2200"],
                        ["Atlanta", "5", "$1150 - $2100"],
                        ["Los Angeles", "5", "$1350 - $2500"],
                        ["San Francisco / San Jose", "5", "$1200 - $2300"],
                        ["Chicago", "5", "$950 - $1800"],
                        ["Boston", "5", "$1200 - $2100"],
                        ["Washington DC", "5", "$1150 - $2250"],
                    ].map((row, i) => (
                        <tr
                        key={i}
                        className={`
                            ${i % 2 === 0 ? "bg-gray-100" : "bg-white"}
                            block md:table-row
                            rounded-lg md:rounded-none
                            shadow md:shadow-none
                            p-4 md:p-0
                        `}
                        >
                        {/* City */}
                        <td className="p-2 md:p-4 block md:table-cell">
                            <span className="font-semibold md:hidden">City: </span>
                            <a href="/get-quote" className="text-black">
                            {row[0]}
                            </a>
                        </td>

                        {/* Hours */}
                        <td className="p-2 md:p-4 block md:table-cell">
                            <span className="font-semibold md:hidden">
                            Minimum booking hours:{" "}
                            </span>
                            {row[1]}
                        </td>

                        {/* Cost */}
                        <td className="p-2 md:p-4 block md:table-cell">
                            <span className="font-semibold md:hidden">
                            Estimated cost:{" "}
                            </span>
                            {row[2]}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
          </div>

          <div className="mt-10">
            <Link
              href="/get-quote"
              className="inline-block webBG transition duration-300 webBorderColor text-white font-semibold px-8 py-3 rounded"
            >
              REQUEST A QUOTE
            </Link>
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE GALLERY ================= */}
      <section className="py-15 bg-gray-100">
        <div className="container mx-auto px-6 text-center">

            <h2 className="text-3xl font-semibold mb-6">
                Discover the Motor Coach {" "}
                <span className="relative inline-block z-[5]">
                Bus Experience
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                </span>
            </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm mb-12">
            Step inside and experience spacious comfort. Relax in reclining seats
            with ample legroom and enjoy panoramic views.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((img) => (
              <img
                key={img}
                src={`/gallery/${img}.jpg`}
                alt="Bus Experience"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section className="py-15 bg-white text-center">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
                Featured Motor Coach {" "}
                <span className="relative inline-block z-[5]">
                Bus Amenities
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                </span>
            </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-12">
            With GTACoach motor coach buses, customize your group ride just
            the way you want. Choose from a range of amenities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <MapPinIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">GPS Tracking</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <ArchiveBoxIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">High Capacity Storage Bays</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <ArrowsRightLeftIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">Additional Head and Leg Room</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <CloudIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">Air Ride Comfort</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <TvIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">TVs</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <AdjustmentsHorizontalIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">Reclining Seats with Footrests</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <RectangleStackIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">Over-head Storage Space</p>
            </div>

            <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
                <WifiIcon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-medium">WiFi</p>
            </div>

            </div>

        </div>
      </section>

    </main>
  );
}


/* ================= REUSABLE VEHICLE CARD ================= */
function VehicleCard({ image, price, title, features }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="bg-gray-200 p-6 text-center relative">
        <span className="absolute top-4 right-4 text-xs border px-3 py-1 rounded-full bg-white border-blue-900 text-blue-900">
          {price}
        </span>
        <Image src={image} alt={title} width={250} height={150} className="mx-auto" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          {features.map((feature, i) => (
            <li key={i} className="flex gap-2">
              <CheckIcon className="w-5 h-5 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="block mt-6 text-sm underline">
          Request A Quote
        </Link>
      </div>
    </div>
  );
}
