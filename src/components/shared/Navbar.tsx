"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/Header_Logo.png"
            alt="ByteSpace"
            width={130}
            height={32}
            priority
            className="h-7 w-auto object-contain sm:h-8"
          />
        </Link>

        {/* Center navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/signin"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Join Us
          </Link>

          <button
            type="button"
            aria-label="Shopping bag"
            className="text-white transition hover:text-[#d4fb20] cursor-pointer"
          >
            <FiShoppingBag size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Mobile menu and cart button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            aria-label="Shopping bag"
            className="text-white transition hover:text-[#d4fb20]"
          >
            <FiShoppingBag size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1 focus:outline-none"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="bg-[#0544E8]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-white/10" />
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-white"
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
