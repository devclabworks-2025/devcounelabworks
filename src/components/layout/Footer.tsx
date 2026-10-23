"use client";

import React from "react";
import Link from "next/link";
import RollingText from "@/components/common/RollingText";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-[#1a1a1a] text-neutral-400 font-mono text-xs pt-16 pb-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Studio Info & Address */}
          <div className="space-y-4">
            <div className="text-white font-bold text-sm tracking-wider">
              COUNE LABWORKS
            </div>
            <p className="leading-relaxed text-neutral-400 text-xs">
              Coune LabWorks is a creative tech lab blending design, motion, and code into bold digital experiences.
            </p>
            <div className="pt-2 text-neutral-500 leading-relaxed text-[11px]">
              Jl. Sukagalih No. 104, Sukagalih, Kec. Sukajadi,<br />
              Kota Bandung, Jawa Barat 40163
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <div className="text-neutral-500 uppercase tracking-widest text-[11px]">
              [NAVIGATION]
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  <RollingText text="Home" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  <RollingText text="About" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  <RollingText text="Gallery" />
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-white transition-colors">
                  <RollingText text="Contact" />
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-white transition-colors">
                  <RollingText text="Work" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <div className="text-neutral-500 uppercase tracking-widest text-[11px]">
              [SERVICES]
            </div>
            <ul className="space-y-2.5 text-neutral-400">
              <li>Interactive Media & Brand Experience</li>
              <li>Art Installation</li>
              <li>Concept Prototyping</li>
              <li>Software & Hardware Development</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <div className="text-neutral-500 uppercase tracking-widest text-[11px]">
              [CONNECT]
            </div>
            <div>
              <a
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+contact@counelabworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline text-xs tracking-wide"
              >
                contact@counelabworks.com
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/coune__labworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <RollingText text="Instagram ↗" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281214703538&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <RollingText text="WhatsApp (+62 812-1470-3538) ↗" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+coune.works@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <RollingText text="coune.works@gmail.com ↗" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#181818] pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            Coune Labworks 2026 Ⓒ All Rights Reserved
          </div>
          <div className="flex items-center gap-4">
            <span>Bandung</span>
            <span>•</span>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
