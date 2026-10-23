"use client";

import React from "react";
import Link from "next/link";
import RollingText from "@/components/common/RollingText";

interface CollaborationCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CollaborationCTA({
  title = "Every great project starts with a conversation.",
  subtitle = "Let’s Collaborate",
  buttonText = "LETS CREATE",
}: CollaborationCTAProps) {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-8 bg-black border-b border-[#181818] text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
          {title}
        </p>

        <h2 className="font-teka text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-light">
          {subtitle}
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <a
            href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+coune.works@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-widest font-semibold rounded transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            {buttonText} ↗
          </a>

          <Link
            href="/contactus"
            className="px-8 py-3.5 border border-[#333333] hover:border-white text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-widest rounded transition-colors"
          >
            Send Inquiry Form
          </Link>
        </div>
      </div>
    </section>
  );
}
