"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const CONTACT_BACKGROUND_URL =
  "/assets/images/contact/background.png";
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+coune.works@gmail.com";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const params = new URLSearchParams({
    su: `Project inquiry from ${name}`,
    body: [
      "New project inquiry from the Coune LabWorks website",
      "",
      `Name: ${name}`,
      `Organization / Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  window.location.assign(`${GMAIL_COMPOSE_URL}&${params.toString()}`);
}

export default function ContactPage() {
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-white text-[#090909]">
      <Image
        src={CONTACT_BACKGROUND_URL}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/45"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1640px] grid-cols-1 items-center gap-12 px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-[8.5vw] lg:py-32">
        <div className="flex flex-col justify-between gap-14 lg:min-h-[650px]">
          <h1 className="font-serif text-[clamp(3.5rem,6.6vw,6.5rem)] leading-[0.88] tracking-[-0.055em]">
            <span className="block">You’re ready.</span>
            <span className="block">Let’s talk about</span>
            <span className="block">your next project.</span>
          </h1>

          <div className="max-w-[620px]">
            <Image
              src="/assets/images/footer/logo-clw-white.png"
              alt="Coune LabWorks"
              width={400}
              height={55}
              className="mb-6 h-auto w-[min(100%,340px)] brightness-0"
              sizes="(max-width: 640px) 100vw, 340px"
            />
            <address className="not-italic text-base leading-snug sm:text-lg">
              Jl. Sukagalih No. 104, Sukagalih, Kec. Sukajadi,
              <br />
              Kota Bandung, Jawa Barat 40163
            </address>
            <a
              href="mailto:contact@counelabworks.com"
              className="mt-4 inline-block text-base transition-opacity hover:opacity-65 sm:text-lg"
            >
              contact@counelabworks.com
            </a>

            <nav aria-label="Contact links" className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/coune__labworks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#090909] text-white transition-transform hover:scale-105"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281214703538&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#090909] text-white transition-transform hover:scale-105"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contact@counelabworks.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#090909] text-white transition-transform hover:scale-105"
              >
                <Mail size={20} />
              </a>
            </nav>
          </div>
        </div>

        <div className="border border-neutral-500 bg-white/85 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-14">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            [CONNECT]
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-snug text-neutral-700 sm:text-base">
            Tell us about yourself, and a little bit of your vision. Let’s make
            it happen.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
            <div className="flex flex-col">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Name"
                className="w-full border-b border-neutral-400 bg-transparent px-3 py-5 text-base outline-none transition-colors placeholder:text-neutral-600 focus:border-[#090909] sm:py-7 sm:text-lg"
              />

              <label htmlFor="contact-company" className="sr-only">
                Organization / Company
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Organization / Company"
                className="w-full border-b border-neutral-400 bg-transparent px-3 py-5 text-base outline-none transition-colors placeholder:text-neutral-600 focus:border-[#090909] sm:py-7 sm:text-lg"
              />

              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                className="w-full border-b border-neutral-400 bg-transparent px-3 py-5 text-base outline-none transition-colors placeholder:text-neutral-600 focus:border-[#090909] sm:py-7 sm:text-lg"
              />

              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={3}
                placeholder="Message"
                className="w-full resize-y border-b border-neutral-400 bg-transparent px-3 py-5 text-base outline-none transition-colors placeholder:text-neutral-600 focus:border-[#090909] sm:py-7 sm:text-lg"
              />
            </div>

            <div className="mt-8 flex justify-center sm:mt-10">
              <button
                type="submit"
                className="bg-[#f20d0d] px-10 py-4 font-mono text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#d90b0b] sm:px-12 sm:py-5"
              >
                CONNECT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
