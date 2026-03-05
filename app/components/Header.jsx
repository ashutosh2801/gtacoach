"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="absolute inset-x-0 top-5 z-50 flex justify-center">
      <nav className="w-[90%] max-w-[1300px] bg-white rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.15)] px-6 py-4">
        
        {/* TOP ROW */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <a href="/">
            <img
              src="../../logo.png"
              alt="Shuttle Bus Charter Service"
              width={200}
              height={40}
            />
            </a>
          </div>

          {/* Navigation (Desktop only) */}
          <ul className="hidden lg:flex items-center justify-center gap-10 text-sm font-semibold text-gray-800 flex-1">
            <li>
              <Link
                href="/"
                className={isActive("/") ? "webText" : "text-gray-800"}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                className={isActive("/about-us") ? "webText" : "text-gray-800"}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className={isActive("/services") ? "webText" : "text-gray-800"}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/fleet"
                className={isActive("/fleet") ? "webText" : "text-gray-800"}
              >
                Bus Fleet
              </Link>
            </li>

            <li>
              <Link
                href="/get-quote"
                className={isActive("/get-quote") ? "webText" : "text-gray-800"}
              >
                Online Request
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                className={isActive("/careers") ? "webText" : "text-gray-800"}
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className={isActive("/contact-us") ? "webText" : "text-gray-800"}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* CTA (Desktop only) */}
          <div className="hidden xl:flex webBG text-white rounded-md px-5 py-3 items-center gap-3">
            <span className="bg-white rounded-full p-2">
              <PhoneIcon className="h-4 w-4 webText" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] opacity-90">Contact Us Now</p>
              <p className="text-sm font-bold"><a href="tel:4165039794;">(416) 503-9794</a></p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-auto"
          >
            {open ? (
              <XMarkIcon className="h-7 w-7 text-gray-800" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-gray-800" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-6 border-t border-gray-300 pt-6">
            <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-800">
              <li>
                <Link
                  href="/"
                  onClick={handleClose}
                  className={isActive("/") ? "webText" : "text-gray-800"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  onClick={handleClose}
                  className={isActive("/services") ? "webText" : "text-gray-800"}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/fleet"
                  onClick={handleClose}
                  className={isActive("/fleet") ? "webText" : "text-gray-800"}
                >
                  Bus Fleet
                </Link>
              </li>

              <li>
                <Link
                  href="/get-quote"
                  onClick={handleClose}
                  className={isActive("/get-quote") ? "webText" : "text-gray-800"}
                >
                  Online Request
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  onClick={handleClose}
                  className={isActive("/careers") ? "webText" : "text-gray-800"}
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  onClick={handleClose}
                  className={isActive("/contact-us") ? "webText" : "text-gray-800"}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="mt-6 webBG text-white rounded-md px-5 py-3 flex items-center gap-3">
              <span className="bg-white rounded-full p-2">
                <PhoneIcon className="h-4 w-4 webText" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] opacity-90">Contact Us Now</p>
                <p className="text-sm font-bold"><a href="tel:4165039794;">(416) 503-9794</a></p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
