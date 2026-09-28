"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSearch, FiStar } from "react-icons/fi";

const studentAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0042ec] pt-24 sm:pt-28 lg:pt-32">
      {/* Background blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* 3D Vector Images positioned across the Hero */}
      {/* Lime Spring (Top-Left) */}
      <div className="pointer-events-none absolute -left-2 lg:left-0 top-14 lg:top-28 z-10 w-28 select-none sm:-left-12 sm:top-20 sm:w-44 md:w-52  lg:w-60">
        <Image
          src="/assets/icons/herovectors/limeSpring.png"
          alt=""
          width={240}
          height={350}
          unoptimized
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Small White Spring (Mid-Left) */}
      <div className="pointer-events-none absolute left-4 top-[48%] z-10 w-12 select-none sm:left-[8%] sm:top-[36%] sm:w-16 md:left-[12%] lg:left-[10%] lg:w-32">
        <Image
          src="/assets/icons/herovectors/whiteSpring01.png"
          alt=""
          width={90}
          height={90}
          unoptimized
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Big White Donut (Bottom-Left) */}
      <div className="pointer-events-none absolute -bottom-6 left-1 z-20 w-28 select-none sm:-bottom-10 sm:left-[3%] sm:w-48 md:left-[5%] md:w-56 lg:bottom-14 lg:left-[6%] lg:w-80">
        <Image
          src="/assets/icons/herovectors/donut.png"
          alt=""
          width={280}
          height={280}
          unoptimized
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Vector 4: Lime 3D Cylinder (Top-Right) */}
      <div className="pointer-events-none absolute -right-6 top-16 lg:right-0 lg:top-24 z-10 w-24 select-none sm:-right-8 sm:top-20 sm:w-36 md:w-44  lg:w-52">
        <Image
          src="/assets/icons/herovectors/cylinder.png"
          alt=""
          width={220}
          height={380}
          unoptimized
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Vector 5: White 3D Triangular Prism (Mid-Right) */}
      <div className="pointer-events-none absolute right-4 top-[45%] z-10 w-14 select-none sm:right-[8%] sm:top-[44%] sm:w-20 md:right-[12%] lg:right-[14%] lg:w-24">
        <Image
          src="/assets/icons/herovectors/prism.png"
          alt=""
          width={100}
          height={100}
          unoptimized
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Vector 6: White 3D Zigzag Spring (Bottom-Right) */}
      <div className="pointer-events-none absolute -bottom-4 right-1 z-10 w-24 select-none sm:-bottom-8 sm:right-[3%] sm:w-36 md:right-[5%] md:w-44 lg:-bottom-10 lg:right-[6%] lg:w-52">
        <Image
          src="/assets/icons/herovectors/whiteSpring02.png"
          alt=""
          width={200}
          height={210}
          unoptimized
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Main Hero Header and Search Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] lg:leading-[1.12]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-xs font-normal leading-relaxed text-white/85 sm:mt-5 sm:text-sm md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2.5 sm:mt-8"
        >
          <div className="flex h-11 sm:h-12 flex-1 items-center rounded-full bg-white px-4 sm:px-5 shadow-lg">
            <FiSearch size={17} className="mr-2.5 shrink-0 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-xs sm:text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#d4fb20] px-6 sm:px-8 text-xs sm:text-sm font-semibold text-gray-950 shadow-lg transition-all duration-200 hover:brightness-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      {/* Center Visual: Lime Sun, Student & 3 Floating Cards */}
      <div className="relative mx-auto mt-8 sm:mt-10 h-90 sm:h-110 md:h-125 lg:h-137.5 max-w-5xl">
        {/* Lime Semicircular / Elliptical Background Disk */}
        <div
          className="absolute -bottom-50 sm:-bottom-65 md:-bottom-80 lg:-bottom-150 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#d4fb20]"
          style={{
            width: "max(480px, 64vw)",
            height: "max(480px, 64vw)",
            maxWidth: "1020px",
            maxHeight: "1020px",
          }}
        />

        {/* Student Image */}
        <div className="absolute bottom-0 left-1/2 z-20 flex h-full w-75 sm:w-100 md:w-120 lg:w-135 -translate-x-1/2 items-end justify-center pointer-events-none">
          <Image
            src="/assets/images/hero-student.png"
            alt="Student holding laptop with headphones"
            width={580}
            height={414}
            unoptimized
            priority
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Card 1: UI/UX Design (Top-Left of Student) */}
        <div className="absolute left-[2%] sm:left-[10%] md:left-[16%] lg:left-[20%] top-[10%] sm:top-[12%] z-30 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-xl shadow-black/10">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-900">
            UI/UX Design
          </p>
          <p className="mt-0.5 text-[9px] sm:text-[10px] md:text-xs text-gray-400 whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Card 2: Learning Progress (Top-Right of Student) */}
        <div className="absolute right-[2%] sm:right-[8%] md:right-[14%] lg:right-[18%] top-[14%] sm:top-[16%] z-30 w-32 sm:w-40 md:w-44 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-4 shadow-xl shadow-black/10">
          <p className="text-[9px] sm:text-[11px] font-medium text-gray-500">
            Learning Progress
          </p>
          <p className="mt-0.5 text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            55%
          </p>
          <div className="mt-2 h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-[#d4fb20]" />
          </div>
        </div>

        {/* Card 3: Happy Students (Bottom-Left of Student) */}
        <div className="absolute left-[3%] sm:left-[6%] md:left-[10%] lg:left-[14%] bottom-[16%] sm:bottom-[18%] md:bottom-[20%] z-30 rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-3.5 shadow-xl shadow-black/10">
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-900">
            Happy Students
          </p>
          <div className="mt-0.5 flex items-center gap-1">
            <span className="text-[9px] sm:text-[11px] font-medium text-gray-500">
              4.5 (240)
            </span>
            <FiStar size={11} className="fill-amber-400 text-amber-400" />
          </div>

          {/* Overlapping Avatars + 2K+ Tag */}
          <div className="mt-2 flex items-center">
            {studentAvatars.map((url, index) => (
              <div
                key={url}
                className={`relative h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 overflow-hidden rounded-full border-2 border-white shadow-xs ${
                  index !== 0 ? "-ml-1.5 sm:-ml-2" : ""
                }`}
              >
                <Image
                  src={url}
                  alt={`Student ${index + 1}`}
                  width={28}
                  height={28}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="-ml-1.5 sm:-ml-2 flex h-5 min-w-5 sm:h-6 sm:min-w-6 md:h-7 md:min-w-7 items-center justify-center rounded-full bg-[#d4fb20] px-1.5 text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-950 border-2 border-white">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
