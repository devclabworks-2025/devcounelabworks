"use client";

import React, { useState } from "react";
import Link from "next/link";
import RollingText from "@/components/common/RollingText";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#181818]">
      {/* Top Meta Status Bar */}
      <div className="w-full px-4 sm:px-8 py-2 border-b border-[#141414] text-[11px] font-mono tracking-wider flex items-center justify-between text-neutral-400">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-white hover:text-neutral-300 transition-colors">
            CLW
          </Link>
          <span className="hidden sm:inline text-neutral-600">/</span>
          <span className="hidden sm:inline text-neutral-300">Coune LabWorks</span>
          <span className="hidden md:inline text-neutral-600">/</span>
          <span className="hidden md:inline text-neutral-400">[ sketch to circuit ]</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden lg:inline text-neutral-500 font-mono">counelabworks.com</span>
          
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400">
              offline
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500">
              AI offline
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Link */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-sm tracking-widest text-neutral-300 group-hover:text-white transition-colors">
            COUNE LABWORKS
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          <Link
            href="/about"
            className="text-neutral-300 hover:text-white transition-colors py-1"
          >
            <RollingText text="/ About /" />
          </Link>

          <Link
            href="/contactus"
            className="text-neutral-300 hover:text-white transition-colors py-1"
          >
            <RollingText text="Contact /" />
          </Link>

          <Link
            href="/#work"
            className="text-neutral-300 hover:text-white transition-colors py-1"
          >
            <RollingText text="Work /" />
          </Link>

          <Link
            href="/gallery"
            className="text-neutral-400 hover:text-white transition-colors py-1"
          >
            <RollingText text="Gallery /" />
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-neutral-300 hover:text-white"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-[#222222] px-6 py-8 flex flex-col gap-6 font-mono text-sm">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            / Home /
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            / About /
          </Link>
          <Link
            href="/contactus"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Contact /
          </Link>
          <Link
            href="/#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Work /
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Gallery /
          </Link>
          <div className="pt-4 border-t border-[#181818] flex flex-col gap-2 text-xs text-neutral-500">
            <span>contact@counelabworks.com</span>
            <span>Bandung, Indonesia</span>
          </div>
        </div>
      )}
    </header>
  );
}
