"use client";

import React, { useState } from "react";
import Link from "next/link";
import AssistantWidget from "@/components/common/AssistantWidget";
import RollingText from "@/components/common/RollingText";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="flex items-start justify-between px-4 pt-3.5 sm:px-[4.6vw]">
        <div className="relative">
          <div className="flex h-9 items-center gap-1 bg-white px-1.5 text-[#090909]">
            <Link
              href="/"
              className="flex h-[30px] w-[30px] shrink-0 items-center justify-center transition-colors hover:text-[#f60c09]"
              aria-label="Coune LabWorks Home"
            >
              <svg
                viewBox="0 0 35 33"
                className="h-[28px] w-[28px] fill-current"
                aria-hidden="true"
              >
                <path d="M 0 0 L 1.377 0 L 1.377 17.077 L 0 17.077 Z M 2.479 0 L 3.856 0 L 3.856 17.077 L 2.479 17.077 Z M 4.958 0 L 6.335 0 L 6.335 17.077 L 4.958 17.077 Z M 7.437 0 L 8.814 0 L 8.814 17.077 L 7.437 17.077 Z M 9.916 1.928 L 11.293 1.928 L 11.293 15.149 L 9.916 15.149 Z M 15.149 0 L 16.526 0 L 16.526 32.226 L 15.149 32.226 Z M 16.526 0 L 17.903 0 L 17.903 32.226 L 16.526 32.226 Z M 17.903 0 L 19.281 0 L 19.281 6.886 L 17.903 6.886 Z M 25.891 3.581 L 27.268 3.581 L 27.268 17.077 L 25.891 17.077 Z M 28.645 1.102 L 30.022 1.102 L 30.022 19.556 L 28.645 19.556 Z M 31.4 1.102 L 32.777 1.102 L 32.777 17.903 L 31.4 17.903 Z M 17.903 14.047 L 19.281 14.047 L 19.281 32.226 L 17.903 32.226 Z M 20.658 29.472 L 22.035 29.472 L 22.035 32.226 L 20.658 32.226 Z M 12.394 22.035 L 13.772 22.035 L 13.772 32.226 L 12.394 32.226 Z M 9.64 24.514 L 11.017 24.514 L 11.017 32.226 L 9.64 32.226 Z M 6.886 24.514 L 8.263 24.514 L 8.263 32.226 L 6.886 32.226 Z M 0.058 24.514 L 5.597 24.514 L 5.597 32.226 L 0.058 32.226 Z M 19.281 0 L 20.658 0 L 20.658 6.886 L 19.281 6.886 Z M 27.268 3.581 L 28.645 3.581 L 28.645 17.077 L 27.268 17.077 Z M 30.022 1.102 L 31.4 1.102 L 31.4 19.556 L 30.022 19.556 Z M 32.777 1.102 L 34.154 1.102 L 34.154 17.903 L 32.777 17.903 Z M 19.281 14.047 L 20.658 14.047 L 20.658 32.226 L 19.281 32.226 Z M 22.035 29.472 L 23.412 29.472 L 23.412 32.226 L 22.035 32.226 Z M 13.772 22.035 L 15.149 22.035 L 15.149 32.226 L 13.772 32.226 Z M 11.017 24.514 L 12.394 24.514 L 12.394 32.226 L 11.017 32.226 Z M 8.263 24.514 L 9.64 24.514 L 9.64 32.226 L 8.263 32.226 Z M 5.509 24.514 L 6.886 24.514 L 6.886 32.226 L 5.509 32.226 Z" />
              </svg>
            </Link>

            <nav className="hidden items-center gap-1 font-sans text-[17px] leading-none tracking-[-0.06em] sm:flex">
              <Link
                href="/about"
                className="transition-colors hover:text-[#f60c09]"
              >
                <RollingText text="/About" />
              </Link>
              <Link
                href="/contactus"
                className="transition-colors hover:text-[#f60c09]"
              >
                <RollingText text="/Contact" />
              </Link>
              <Link
                href="/#work"
                className="transition-colors hover:text-[#f60c09]"
              >
                <RollingText text="/Work /" />
              </Link>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-[30px] w-[30px] items-center justify-center text-[#090909] transition-colors hover:text-[#f60c09] sm:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="flex flex-col gap-[5px]">
                <span className="h-px w-[18px] bg-current" />
                <span className="h-px w-[18px] bg-current" />
              </span>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="absolute left-0 top-full mt-2 flex min-w-40 flex-col gap-3 bg-white p-4 font-sans text-sm text-[#111111] shadow-sm sm:hidden">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                / About /
              </Link>
              <Link href="/contactus" onClick={() => setMobileMenuOpen(false)}>
                Contact /
              </Link>
              <Link href="/#work" onClick={() => setMobileMenuOpen(false)}>
                Work /
              </Link>
              <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>
                Gallery /
              </Link>
            </nav>
          )}
        </div>

        <AssistantWidget />
      </div>
    </header>
  );
}
