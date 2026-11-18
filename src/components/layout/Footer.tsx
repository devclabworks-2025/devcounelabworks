"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#B4BCBC] text-white pt-14 pb-12 px-6 sm:px-12 lg:px-16 border-t border-[#9ea7a7]">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[34px] w-[34px] bg-[#F20D0D]"
      />
      <div className="max-w-[1800px] mx-auto flex flex-col gap-12">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.55fr_0.9fr_1.1fr_1.35fr] gap-10 sm:gap-12 lg:gap-5 text-base">
          {/* Column 1: Brand & Contact Info */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* CLW Wordmark */}
            <Image
              src="/assets/images/footer/logo-clw-white.png"
              alt="Coune LabWorks"
              width={400}
              height={55}
              className="h-auto w-full max-w-[300px]"
              sizes="(max-width: 640px) 100vw, 400px"
            />

            {/* Address */}
            <div className="font-sans text-base sm:text-lg leading-[1.2] text-white/90">
              <p>Jl. Sukagalih No. 104, Sukagalih, Kec. Sukajadi,</p>
              <p>Kota Bandung, Jawa Barat 40163</p>
            </div>

            {/* Official Email */}
            <div>
              <a
                href="mailto:contact@counelabworks.com"
                className="font-sans text-base sm:text-lg text-white hover:text-black underline underline-offset-4 transition-colors"
              >
                contact@counelabworks.com
              </a>
            </div>

            {/* Social Rounded Badges */}
            <div className="flex items-center gap-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/coune__labworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B4BCBC] transition-all duration-200 hover:scale-105 hover:bg-white/80"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.8} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=6281214703538&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B4BCBC] transition-all duration-200 hover:scale-105 hover:bg-white/80"
                aria-label="WhatsApp"
              >
                <span className="relative flex h-[22px] w-[22px] items-center justify-center">
                  <MessageCircle size={22} strokeWidth={1.8} />
                  <Phone
                    size={10}
                    strokeWidth={2}
                    className="absolute"
                  />
                </span>
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+coune.works@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#B4BCBC] transition-all duration-200 hover:scale-105 hover:bg-white/80"
                aria-label="Email"
              >
                <Mail size={22} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-medium text-base sm:text-lg tracking-wider text-white uppercase">
              [NAVIGATION]
            </span>
            <nav className="flex flex-col gap-3 font-sans text-base sm:text-lg text-white/90">
              <Link
                href="/"
                className="hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="hover:text-black transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contactus"
                className="hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-medium text-base sm:text-lg tracking-wider text-white uppercase">
              [SERVICES]
            </span>
            <div className="flex flex-col gap-3 font-sans text-base sm:text-lg leading-snug text-white/90">
              <span>Interactive Media &amp; Brand Experience</span>
              <span>Art Installation</span>
              <span>Concept Prototyping</span>
              <span>Software &amp; Hardware Development</span>
            </div>
          </div>

          {/* Column 4: Studio Note & Circuit Indicator */}
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-3">
              <Image
                src="/assets/images/footer/clw.svg"
                alt="CLW"
                width={120}
                height={32}
                className="h-auto w-[120px]"
              />

              <Image
                src="/assets/images/footer/logostripe.png"
                alt=""
                aria-hidden="true"
                width={410}
                height={35}
                className="h-auto w-full max-w-[310px]"
                sizes="(max-width: 1024px) 100vw, 410px"
              />

              <p className="font-sans text-[1.1rem] sm:text-[1.1rem] leading-[1.2] text-white/90 mt-8">
                Coune LabWorks is a creative tech lab blending design, motion,
                and code into bold digital experiences.
              </p>
            </div>

            <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-3 text-sm text-white/90 font-sans">
              <span>Coune Labworks</span>
              <span>{new Date().getFullYear()}©</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
