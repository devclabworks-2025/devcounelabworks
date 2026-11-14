"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type TopicId = "services" | "projects" | "process" | "works" | "collab";

interface Topic {
  id: TopicId;
  icon: string;
  label: string;
}

interface TopicAnswer {
  text: string;
  follow: TopicId[];
}

interface Message {
  from: "user" | "bot";
  text: string;
  followTopics?: TopicId[];
}

const KB: {
  topics: Topic[];
  answers: Record<TopicId, TopicAnswer>;
  fallback: TopicAnswer;
  keywords: Record<TopicId, string[]>;
} = {
  topics: [
    { id: "services", icon: "◈", label: "What we do" },
    { id: "projects", icon: "◉", label: "Projects & Clients" },
    { id: "process", icon: "◎", label: "How we work" },
    { id: "works", icon: "◇", label: "Featured works" },
    { id: "collab", icon: "◐", label: "Work with us" },
  ],
  answers: {
    services: {
      text: `We bridge imagination and engineering, transforming complex concepts into tangible realities:

◈ Interactive Brand Experiences: Immersive environments blending custom hardware and intuitive interfaces.
◈ Art Installation: Robotics, pneumatics, and precision electronics for large-scale spatial wonders.
◈ Concept Prototyping: R&D and proof-of-concept testing to validate ambitious ideas.
◈ Software & Hardware Development: Firmware, sensor networks, and bespoke digital infrastructure.`,
      follow: ["process", "projects", "collab"],
    },
    projects: {
      text: `Our portfolio covers prominent brands and artistic institutions:

— AGAIN Coffee & Sound - SĒN Matcha Whisking Robot
— Wardah - Curved LED matrix interactive light tunnel
— OPPO - 1,000+ LEDs reactive store installation
— Bagus Pandega & ROH - Kinetic art exhibitions (Jakarta, Singapore, New York)
— Gaia Hotel - Central kinetic art installation
— Museum Nasional - 30m² interactive floor projection
— Java Jazz & Frestea - Immersive spatial experiences`,
      follow: ["services", "works", "collab"],
    },
    process: {
      text: `Every CLW project follows our closed-loop philosophy:

SENSE → Detect the physical world via sensors, cameras, and presence.
UNDERSTAND → Process patterns, intent, and contextual data.
RESPOND → Deliver dynamic digital or kinetic reactions.
LEARN → The system iteratively improves through real engagement.`,
      follow: ["services", "projects", "collab"],
    },
    works: {
      text: `Whether with global brands, museums, or solo contemporary artists, we engineer the invisible machinery that brings creative vision to life. Check our /gallery route for ongoing archives.`,
      follow: ["services", "process", "collab"],
    },
    collab: {
      text: `We offer:
— Project-based engineering & design
— Studio on Demand / retainer partnerships
— Hardware prototyping & firmware builds

Inquire directly:
→ contact@counelabworks.com
→ Jl. Sukagalih No. 104, Bandung`,
      follow: ["services", "projects", "works"],
    },
  },
  fallback: {
    text: `Coune LabWorks Assistant. Select a topic below or type an inquiry regarding projects, services, or technical capabilities.`,
    follow: ["services", "projects", "process", "works", "collab"],
  },
  keywords: {
    services: ["service", "what do you do", "capabilities", "offer", "media", "hardware", "software", "prototype"],
    projects: ["client", "work", "oppo", "wardah", "roh", "bagus pandega", "esplanade", "gaia", "national gallery"],
    process: ["process", "loop", "how do you work", "sense", "method", "philosophy"],
    works: ["featured", "portfolio", "showcase", "case study"],
    collab: ["contact", "hire", "collab", "pricing", "budget", "quote", "retainer", "email"],
  },
};

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Coune LabWorks Assistant online. Explore capabilities or inquire about collaborations.",
      followTopics: ["services", "projects", "process", "collab"],
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSelectTopic = (id: TopicId) => {
    const topic = KB.topics.find((t) => t.id === id);
    const answer = KB.answers[id];
    setMessages((prev) => [
      ...prev,
      { from: "user", text: topic ? `${topic.icon} ${topic.label}` : id },
      { from: "bot", text: answer.text, followTopics: answer.follow },
    ]);
  };

  const handleSend = () => {
    const query = input.trim();
    if (!query) return;

    setInput("");
    const lower = query.toLowerCase();

    let matchedTopic: TopicId | null = null;
    for (const [topicId, words] of Object.entries(KB.keywords)) {
      if (words.some((w) => lower.includes(w))) {
        matchedTopic = topicId as TopicId;
        break;
      }
    }

    if (matchedTopic) {
      const answer = KB.answers[matchedTopic];
      setMessages((prev) => [
        ...prev,
        { from: "user", text: query },
        { from: "bot", text: answer.text, followTopics: answer.follow },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: query },
        {
          from: "bot",
          text: `Thank you for reaching out. For bespoke technical inquiries, contact our studio team directly at contact@counelabworks.com.`,
          followTopics: ["services", "projects", "collab"],
        },
      ]);
    }
  };

  return (
    <div className="fixed right-4 top-3.5 z-50 font-sans text-xs sm:right-[4.6vw]">
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 flex h-[500px] w-[92vw] max-w-[380px] flex-col overflow-hidden rounded border border-[#c6c6c6] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="px-4 py-3 bg-[#fbfbfb] border-b border-[#e5e5e5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f60c09] animate-pulse" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xs lowercase text-[#1a1a1a]">
                  counelabworks
                </span>
                <span className="font-mono text-[10px] text-neutral-500">
                  sketch to circuit
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-black transition-colors"
              aria-label="Close Assistant"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-white">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.from === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3 rounded max-w-[85%] whitespace-pre-wrap leading-relaxed text-xs ${
                    m.from === "user"
                      ? "bg-[#090909] text-white"
                      : "bg-[#f5f5f5] text-[#1a1a1a] border border-[#e5e5e5]"
                  }`}
                >
                  {m.text}
                </div>

                {/* Follow up pills */}
                {m.followTopics && m.followTopics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.followTopics.map((topicId) => {
                      const topic = KB.topics.find((t) => t.id === topicId);
                      if (!topic) return null;
                      return (
                        <button
                          key={topicId}
                          onClick={() => handleSelectTopic(topicId)}
                          className="px-2.5 py-1 rounded bg-[#ffffff] hover:bg-[#f0f0f0] text-[11px] text-[#1a1a1a] border border-[#d6d6d6] transition-colors"
                        >
                          {topic.icon} {topic.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#fbfbfb] border-t border-[#e5e5e5] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about projects, services..."
              className="flex-1 bg-white border border-[#c6c6c6] rounded px-3 py-1.5 text-[#1a1a1a] text-xs focus:outline-none focus:border-black placeholder:text-neutral-400"
            />
            <button
              onClick={handleSend}
              className="p-1.5 rounded bg-[#090909] text-white hover:bg-neutral-800 transition-colors"
              aria-label="Send query"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center bg-[#f60c09] text-white transition-colors hover:bg-[#d90808]"
          aria-label={isOpen ? "Close Assistant" : "Open Assistant"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        </button>
      </div>
    </div>
  );
}
