"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const columnOneLinks: FooterLink[] = [
  { label: "Featured Courses", href: "/courses" },
  { label: "Featured Categories", href: "/categories" },
  { label: "Business", href: "/courses/business" },
  { label: "IT", href: "/courses/it" },
  { label: "Design", href: "/courses/design" },
];

const columnTwoLinks: FooterLink[] = [
  { label: "Development", href: "/courses/development" },
  { label: "Marketing", href: "/courses/marketing" },
  { label: "Photography", href: "/courses/photography" },
  { label: "Finance", href: "/courses/finance" },
  { label: "Sport", href: "/courses/sport" },
];

const columnThreeLinks: FooterLink[] = [
  { label: "Become a Creator", href: "/creators/join" },
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "Contact", href: "/contact" },
  { label: "Help", href: "/help" },
  { label: "About", href: "/about" },
];

const bottomLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Settings", href: "/cookies-settings" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-100">
      <div className="mx-auto max-w-350 px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Main Content Area */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="max-w-md flex-1">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/Footer_Logo.png"
                alt="ByteSpace"
                width={150}
                height={38}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Newsletter Tagline */}
            <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Subscription Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (isSubscribed) setIsSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#d4fb20] px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-950 transition-all duration-200 hover:brightness-105 hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Search
              </button>
            </form>

            {isSubscribed && (
              <p className="mt-2 text-xs font-medium text-green-600">
                Thank you for subscribing!
              </p>
            )}

            {/* Privacy Disclaimer */}
            <p className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-snug">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

            {/* Column 1 */}
            <div>
              <ul className="space-y-3.5 sm:space-y-4">
                {columnOneLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3.5 sm:space-y-4">
                {columnTwoLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1">
              <ul className="space-y-3.5 sm:space-y-4">
                {columnThreeLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          {/* Right Columns: Links Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-14 xl:gap-20"></div>
        </div>

        {/* Divider */}
        <div className="mt-14 sm:mt-16 lg:mt-20 border-t border-gray-200" />

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500">
            © 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
