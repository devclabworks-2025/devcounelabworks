"use client";

import React, { useState } from "react";
import PixelDitherBg from "@/components/common/PixelDitherBg";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form.");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="relative w-full">
      <PixelDitherBg />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24 flex flex-col gap-16 sm:gap-24">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#1c1c1c] pb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            [ CONTACT ]
          </span>

          <h1 className="font-teka text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-light">
            You’re ready. Let’s talk about your next project.
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-neutral-300 pt-2">
            Tell us about yourself, and a little bit of your vision. Let’s make it happen.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[11px]">
                STUDIO LOCATION
              </span>
              <p className="text-neutral-300 leading-relaxed">
                Jl. Sukagalih No. 104, Sukagalih, Kec. Sukajadi,<br />
                Kota Bandung, Jawa Barat 40163
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[11px]">
                OFFICIAL EMAIL
              </span>
              <a
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=+contact@counelabworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline text-sm block"
              >
                contact@counelabworks.com ↗
              </a>
            </div>

            <div className="space-y-2">
              <span className="text-neutral-500 uppercase tracking-wider block text-[11px]">
                RESPONSE TIME
              </span>
              <p className="text-neutral-400">
                Direct studio inquiries are typically reviewed within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-lg border border-[#222222] bg-[#0c0c0c] shadow-xl">
              <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6">
                [ CONNECT ]
              </h2>

              {status === "success" ? (
                <div className="p-6 rounded bg-[#111111] border border-neutral-700 flex flex-col items-center text-center gap-3 animate-in fade-in">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                  <h3 className="font-teka text-2xl text-white uppercase tracking-tight">
                    Transmission Received
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 max-w-sm leading-relaxed">
                    Thank you for reaching out. We will review your project details and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2 rounded bg-white text-black font-mono text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-mono text-xs">
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-neutral-400">
                      Name <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] rounded text-white text-xs focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Organization / Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-neutral-400">
                      Organization / Company <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Studio, company, or individual"
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] rounded text-white text-xs focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-neutral-400">
                      Email <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] rounded text-white text-xs focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-neutral-400">
                      Message <span className="text-neutral-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your vision, timeline, and location..."
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] rounded text-white text-xs focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600 resize-y"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3 rounded bg-red-950/40 border border-red-800 text-red-300 flex items-center gap-2 text-xs">
                      <AlertCircle size={14} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 mt-2 bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      "CONNECT"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
