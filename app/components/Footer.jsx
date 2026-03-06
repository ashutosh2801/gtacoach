import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#091622] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" />

      <div className="relative container mx-auto px-6 pt-15 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="../../footer-logo.png"
                alt="Shuttle Bus Charter Service"
                className=""
                width={200}
                height={40}
              />
            </div>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-sm text-sm">
              Driven by experience and dedicated to your satisfaction - we deliver transportation services that go the extra mile, every time.
            </p>

            <a
              href="tel:4165039794"
              className="inline-flex items-center gap-2 webBG text-white font-semibold px-6 py-3 rounded-md"
            >
              <PhoneIcon className="w-5 h-5" />
              416-503-9794
            </a>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/fleet" className="hover:text-white">Bus Fleet</a></li>
              <li><a href="/get-quote" className="hover:text-white">Online Request</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="/services" className="hover:text-white">Group Charters</a></li>
              <li><a href="/services" className="hover:text-white">Group Sporting Events</a></li>
              <li><a href="/services" className="hover:text-white">Airport Shuttles & Transfers</a></li>
              <li><a href="/services" className="hover:text-white">Corporate Events</a></li>
              <li><a href="/services" className="hover:text-white">City Tours</a></li>
              <li><a href="/services" className="hover:text-white">Casino Charters</a></li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>

            <ul className="space-y-5 text-gray-300 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="w-5 h-5 webText" />
                <span>
                  	16 Arnold Street Toronto, ON, M8Z5A6
                </span>
              </li>

              <li className="flex gap-3">
                <EnvelopeIcon className="w-5 h-5 webText" />
                <a href="mailto:info@gtacoach.com" className="hover:text-white">info@gtacoach.com</a>
              </li>

              <li className="flex gap-3">
                <PhoneIcon className="w-5 h-5 webText" />
                <a href="tel:4165039795" className="hover:text-white">416-503-9794</a>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="mt-8">
              <p className="mb-4 font-semibold">Follow Us :</p>
              <div className="flex items-center gap-2">
                <div className="p-1 hover:bg-white rounded-full cursor-pointer"><a href="https://www.facebook.com/profile.php?id=61586901099108" target="_blank" rel="noopener noreferrer"><FaFacebookF className="webText text-lg" /></a></div>

                <div className="p-1 hover:bg-white rounded-full cursor-pointer"><a href="https://www.instagram.com/gtacoachcanada/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram className="webText text-lg cursor-pointer" /></a></div>

                <div className="p-1 hover:bg-white rounded-full cursor-pointer"><a href="https://www.linkedin.com/company/gta-coach/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="webText text-lg cursor-pointer" /></a></div>

                <div className="p-1 hover:bg-white rounded-full cursor-pointer"><a href="https://www.tiktok.com/@gtacoachcanada" target="_blank" rel="noopener noreferrer"><FaTiktok className="webText text-lg cursor-pointer" /></a></div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-300">
          <p>
            © 1989 - 2026 GTACoach.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
