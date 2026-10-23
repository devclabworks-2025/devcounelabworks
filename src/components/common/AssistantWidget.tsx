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
      text: `We bridge the gap between imagination and engineering, transforming complex concepts into tangible realities. Our expertise is distilled into four core pillars of development:

◈ Interactive Brand Experiences: We design immersive environments that command attention. By blending custom hardware and intuitive interfaces, we turn your brand into a destination that visitors don't just see, but actively engage with.

◈ Art Installation: We specialize in the "impossible." By integrating advanced robotics, pneumatics, and precision electronics, we build complex installations that breathe, move, and respond—bringing your vision to life with technical reliability.

◈ Concept Prototyping: Have an idea that hasn't been done yet? We provide the R&D and proof-of-concept testing required to validate your most ambitious projects, helping you navigate from the whiteboard to a functional reality.

◈ Software & Hardware Development: We build the intelligence behind the art. From low-level firmware for hardware control to high-level interactive applications, we create bespoke software solutions tailored to your specific infrastructure needs.

So how can we be helpful to your project?`,
      follow: ["process", "projects", "collab"],
    },
    projects: {
      text: `Our work spans brands, galleries, and live events:

— AGAIN Coffee & Sound - SĒN, the in-store Matcha Whisking Robot
— Wardah - Immersive installation for a giant local beauty company
— OPPO - Interactive in-store installation that can be controlled by the client's product; a smartphone
— National Gallery - Revitalization of the courtyard area, keeping the heritage alive
— Djarum Super MLD - Playful brand experience in the biggest Jazz Festival in SEA
— Gaia Hotel - Art installation as a center piece decoration in the service industry
— Frestea - An area of immersive experiences for a beverage brand
— Esplanade Singapore - Art Exhibition alongside artist Bagus Pandega
... and many more on /gallery

Do you see anything that inspires you?`,
      follow: ["services", "works", "collab"],
    },
    process: {
      text: `Any studio can make a beautiful installation.
Any software house can build a POS. What no one else in Indonesia, and very few in SEA - can do is close the full loop.

Every CLW project follows one loop:

SENSE → UNDERSTAND → RESPOND → LEARN

Sense - Detect the world. Sensors, cameras, inputs, presence
Understand - Give meaning to data. Processing, patterns intent, context
Respond - Return something beautiful & useful to the human
Learn - System improves. Data compounds, value grows

Do you think this speaks to your value of working?`,
      follow: ["services", "projects", "collab"],
    },
    works: {
      text: `Whether it's a high-end brand, a museum, or a solo artist, we love partnering with people who have a vision. We help them bridge the gap between their concept and the technical execution.`,
      follow: ["services", "process", "collab"],
    },
    collab: {
      text: `We offer:
— Project-based engagements
— Long-term technology retainers - your permanent creative-tech team
— Studio On Demand - monthly retainer for brands that need ongoing support
— and more tailor made services based on your needs

Let's talk more!
→ counelabworks.com
→ contact@counelabworks.com`,
      follow: ["services", "projects", "works"],
    },
  },
  fallback: {
    text: `I'm CLW's studio assistant. I can tell you about our work, services, process, or how to collaborate. Pick a topic below or ask something specific.`,
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
      text: "Coune LabWorks Assistant online. Explore studio capabilities, projects, or send a message.",
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

    // Find keyword match
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
          text: `Thanks for asking. For custom project inquiries, send an email directly to contact@counelabworks.com or select one of the topics below.`,
          followTopics: ["services", "projects", "collab"],
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono text-xs">
      {/* Panel Window */}
      {isOpen && (
        <div className="mb-3 w-[90vw] max-w-[380px] h-[480px] bg-[#0c0c0c] border border-[#262626] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">
                CLW Assistant
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close Assistant"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.from === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3 rounded max-w-[85%] whitespace-pre-wrap leading-relaxed ${
                    m.from === "user"
                      ? "bg-white text-black font-sans text-xs"
                      : "bg-[#181818] border border-[#282828] text-neutral-300 text-[11px]"
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
                          className="px-2 py-1 rounded bg-[#1c1c1c] hover:bg-[#282828] text-[10px] text-neutral-400 hover:text-white border border-[#303030] transition-colors"
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
          <div className="p-3 bg-[#111111] border-t border-[#222222] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about projects, services..."
              className="flex-1 bg-black border border-[#2a2a2a] rounded px-3 py-1.5 text-white text-[11px] focus:outline-none focus:border-neutral-500 placeholder:text-neutral-600"
            />
            <button
              onClick={handleSend}
              className="p-1.5 rounded bg-white text-black hover:bg-neutral-200 transition-colors"
              aria-label="Send query"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label={isOpen ? "Close Assistant" : "Open Assistant"}
        >
          {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        </button>
      </div>
    </div>
  );
}
