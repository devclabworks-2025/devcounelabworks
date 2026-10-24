"use client";

import React, { useState } from "react";
import Link from "next/link";
import RollingText from "@/components/common/RollingText";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-2">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#e5e5e5] shadow-sm px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
          {/* Brand Logo Glyph & Name */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[#1f1e1e] hover:text-[#f60c09] transition-colors"
              aria-label="Coune LabWorks Home"
            >
              <svg
                viewBox="0 0 35 33"
                className="w-5 h-5 fill-current flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M 0 0 L 1.377 0 L 1.377 17.077 L 0 17.077 Z M 2.479 0 L 3.856 0 L 3.856 17.077 L 2.479 17.077 Z M 4.958 0 L 6.335 0 L 6.335 17.077 L 4.958 17.077 Z M 7.437 0 L 8.814 0 L 8.814 17.077 L 7.437 17.077 Z M 9.916 1.928 L 11.293 1.928 L 11.293 15.149 L 9.916 15.149 Z M 15.149 0 L 16.526 0 L 16.526 32.226 L 15.149 32.226 Z M 16.526 0 L 17.903 0 L 17.903 32.226 L 16.526 32.226 Z M 17.903 0 L 19.281 0 L 19.281 6.886 L 17.903 6.886 Z M 25.891 3.581 L 27.268 3.581 L 27.268 17.077 L 25.891 17.077 Z M 28.645 1.102 L 30.022 1.102 L 30.022 19.556 L 28.645 19.556 Z M 31.4 1.102 L 32.777 1.102 L 32.777 17.903 L 31.4 17.903 Z M 17.903 14.047 L 19.281 14.047 L 19.281 32.226 L 17.903 32.226 Z M 20.658 29.472 L 22.035 29.472 L 22.035 32.226 L 20.658 32.226 Z M 12.394 22.035 L 13.772 22.035 L 13.772 32.226 L 12.394 32.226 Z M 9.64 24.514 L 11.017 24.514 L 11.017 32.226 L 9.64 32.226 Z M 6.886 24.514 L 8.263 24.514 L 8.263 32.226 L 6.886 32.226 Z M 0.058 24.514 L 5.597 24.514 L 5.597 32.226 L 0.058 32.226 Z M 19.281 0 L 20.658 0 L 20.658 6.886 L 19.281 6.886 Z M 27.268 3.581 L 28.645 3.581 L 28.645 17.077 L 27.268 17.077 Z M 30.022 1.102 L 31.4 1.102 L 31.4 19.556 L 30.022 19.556 Z M 32.777 1.102 L 34.154 1.102 L 34.154 17.903 L 32.777 17.903 Z M 19.281 14.047 L 20.658 14.047 L 20.658 32.226 L 19.281 32.226 Z M 22.035 29.472 L 23.412 29.472 L 23.412 32.226 L 22.035 32.226 Z M 13.772 22.035 L 15.149 22.035 L 15.149 32.226 L 13.772 32.226 Z M 11.017 24.514 L 12.394 24.514 L 12.394 32.226 L 11.017 32.226 Z M 8.263 24.514 L 9.64 24.514 L 9.64 32.226 L 8.263 32.226 Z M 5.509 24.514 L 6.886 24.514 L 6.886 32.226 L 5.509 32.226 Z" />
              </svg>
              <span className="font-sans font-bold text-sm tracking-[-0.04em] text-[#090909]">
                COUNE LABWORKS
              </span>
            </Link>
            <span className="hidden lg:inline text-neutral-400 text-xs font-mono">
              [ sketch to circuit ]
            </span>
          </div>

          {/* Center / Right Links */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 font-sans text-xs sm:text-sm tracking-[-0.04em] font-medium text-[#111111]">
              <Link
                href="/about"
                className="hover:text-[#f60c09] transition-colors py-1"
              >
                <RollingText text="/ About /" />
              </Link>
              <Link
                href="/contactus"
                className="hover:text-[#f60c09] transition-colors py-1"
              >
                <RollingText text="Contact /" />
              </Link>
              <Link
                href="/#work"
                className="hover:text-[#f60c09] transition-colors py-1"
              >
                <RollingText text="Work /" />
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[#f60c09] transition-colors py-1"
              >
                <RollingText text="Gallery /" />
              </Link>
            </nav>

            {/* Status indicators */}
            <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-[#ebebeb] text-[11px] font-mono text-neutral-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span className="uppercase text-[10px] tracking-wider text-neutral-600">
                  offline
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f60c09]" />
                <span className="uppercase text-[10px] tracking-wider text-[#f60c09]">
                  AI offline
                </span>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-[#090909] hover:text-[#f60c09]"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-5 h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 bg-white border border-[#e5e5e5] shadow-lg p-6 flex flex-col gap-4 font-sans text-sm font-medium text-[#111111]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f60c09] transition-colors py-1"
            >
              / Home /
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f60c09] transition-colors py-1"
            >
              / About /
            </Link>
            <Link
              href="/contactus"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f60c09] transition-colors py-1"
            >
              Contact /
            </Link>
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f60c09] transition-colors py-1"
            >
              Work /
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f60c09] transition-colors py-1"
            >
              Gallery /
            </Link>
            <div className="pt-4 border-t border-[#ebebeb] flex flex-col gap-1 text-xs text-neutral-500 font-mono">
              <span>contact@counelabworks.com</span>
              <span>Jl. Sukagalih No. 104, Bandung</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
