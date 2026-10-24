"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#B4BCBC] text-white pt-16 pb-12 px-6 sm:px-12 lg:px-16 border-t border-[#9ea7a7]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-sm">
          {/* Column 1: Brand & Contact Info */}
          <div className="flex flex-col gap-5">
            {/* CLW Wordmark */}
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-2xl tracking-[-0.05em] text-white uppercase">
                COUNE LABWORKS
              </span>
            </div>

            {/* Address */}
            <div className="font-sans text-xs sm:text-[13px] leading-relaxed text-white/90">
              <p>Jl. Sukagalih No. 104, Sukagalih, Kec. Sukajadi,</p>
              <p>Kota Bandung, Jawa Barat 40163</p>
            </div>

            {/* Official Email */}
            <div>
              <a
                href="mailto:contact@counelabworks.com"
                className="font-sans text-xs sm:text-[13px] text-white hover:text-black underline underline-offset-4 transition-colors"
              >
                contact@counelabworks.com
              </a>
            </div>

            {/* Social Rounded Badges */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/coune__labworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#B4BCBC] hover:text-[#090909] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-[#090909]" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=6281214703538&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#B4BCBC] hover:text-[#090909] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="WhatsApp"
              >
                <Phone size={16} className="text-[#090909]" />
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+coune.works@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#B4BCBC] hover:text-[#090909] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={16} className="text-[#090909]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-medium text-xs tracking-wider text-white uppercase">
              [NAVIGATION]
            </span>
            <nav className="flex flex-col gap-2.5 font-sans text-sm text-white/90">
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
            <span className="font-sans font-medium text-xs tracking-wider text-white uppercase">
              [SERVICES]
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-sm text-white/90">
              <span>Interactive Media &amp; Brand Experience</span>
              <span>Art Installation</span>
              <span>Concept Prototyping</span>
              <span>Software &amp; Hardware Development</span>
            </div>
          </div>

          {/* Column 4: Studio Note & Circuit Indicator */}
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-3">
              {/* Three dots indicator */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>

              {/* Barcode / circuit SVG stripe */}
              <div className="w-full h-4 bg-white/20 flex items-center gap-0.5 px-1 overflow-hidden" aria-hidden="true">
                {Array.from({ length: 48 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-full bg-white"
                    style={{
                      width: i % 3 === 0 ? "3px" : "1px",
                      opacity: i % 2 === 0 ? 0.9 : 0.4,
                    }}
                  />
                ))}
              </div>

              <p className="font-sans text-xs leading-relaxed text-white/90 mt-2">
                Coune LabWorks is a creative tech lab blending design, motion,
                and code into bold digital experiences.
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] text-white/80 font-mono">
              <span>Coune Labworks</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
