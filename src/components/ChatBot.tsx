import { useState, useRef, useEffect, FormEvent } from "react";
import "./styles/ChatBot.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose, IoSend, IoSparkles } from "react-icons/io5";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  hasWhatsAppCta?: boolean;
}

interface KnowledgeRule {
  keywords: string[];
  response: string;
  hasWhatsAppCta?: boolean;
}

const KNOWLEDGE_BASE: KnowledgeRule[] = [
  {
    keywords: [
      "whatsapp",
      "wa.me",
      "chat",
      "message",
      "contact",
      "reach",
      "hire",
      "phone",
      "call",
      "talk",
      "email",
      "inbox",
    ],
    response:
      "You can connect directly with Munem on **WhatsApp** for project inquiries, freelance orders, or collaborations:\n\n• **WhatsApp:** [wa.me/munemsarker](https://wa.me/munemsarker)\n• **Email:** [munem@engineer.com](mailto:munem@engineer.com)\n• **Fiverr:** [fiverr.com/munem_ai](https://www.fiverr.com/munem_ai)\n\nTap the button below to start a WhatsApp conversation right away!",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "ai art",
      "photography",
      "photo",
      "product",
      "image",
      "visual",
      "mockup",
      "photoshop",
      "gemini",
      "flow",
      "commercial",
      "render",
      "3d",
      "e-commerce",
      "ecommerce",
      "studio",
      "services",
    ],
    response:
      "Munem is an expert in **AI Visual Creation & Commercial Product Photography**:\n\n• **Authentic Commercial Photography:** Produces visuals that look like real high-end studio photography rather than artificial AI renders.\n• **Product Detail Preservation:** Preserves exact original geometry, textures, colors, materials, and brand typography.\n• **E-Commerce & Advertising:** Creates lifestyle scenes, promotional mockups, and marketing visuals.\n• **Tools:** Google Gemini, Google Flow, and master-level Adobe Photoshop post-production.",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "data science",
      "machine learning",
      "ml",
      "python",
      "nlp",
      "predictive",
      "statistics",
      "dataset",
      "deep learning",
      "ai engineer",
      "model",
      "analysis",
      "coding",
    ],
    response:
      "Alongside his creative career, Munem has an engineering background in **Data Science & Machine Learning**:\n\n• **Tech Stack:** Python, Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, and SQL.\n• **Expertise:** Exploratory Data Analysis (EDA), predictive modeling, statistical analysis, and NLP fundamentals.\n• **Certifications:** 360-Hour ML & Data Science Professional Training at NACTAR (Grade A+).\n• **Competitive Coding:** 20th Position in the ICPC Asia Contest (2024).",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "fiverr",
      "freelance",
      "seller",
      "reviews",
      "level 2",
      "rating",
      "satisfaction",
      "client",
      "order",
    ],
    response:
      "Munem is a verified **Fiverr Level 2 Seller** with an outstanding **100% Client Satisfaction Rate**! 🌟\n\n• Successfully delivered commercial product photography and visual assets for international e-commerce brands.\n• Known for prompt delivery, high accuracy, and top-tier client communication.\n\nCheck out his official profile: [fiverr.com/munem_ai](https://www.fiverr.com/munem_ai)",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "who is",
      "about",
      "bio",
      "background",
      "introduce",
      "intro",
      "munem",
      "sarker",
      "tell me about yourself",
      "experience",
    ],
    response:
      "**Munem Sarker** is a multidisciplinary creative and technology professional from Bangladesh:\n\n• **Core Domains:** AI-powered visual creation, commercial product photography, brand design, data science, and machine learning.\n• **Key Roles:** Freelance AI Visual Expert (Fiverr Level 2), Social Media Manager at GenZ Agro (3M+ BDT investment raised), Brand Designer at Atelier Vedantika.\n• **Education:** B.Sc. in Computer Science and Engineering at University of Rajshahi.",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "genz agro",
      "genz",
      "agro",
      "social media",
      "marketing",
      "invest",
      "investment",
    ],
    response:
      "At **GenZ Agro** (a student-centric halal investment and agricultural platform in Bangladesh), Munem works as **Social Media Manager**:\n\n• Directs digital communication, promotional content, and creative campaigns.\n• Contributed directly to attracting investments exceeding **BDT 3 Million** and onboarding repeat investors.",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "education",
      "university",
      "college",
      "degree",
      "study",
      "cse",
      "imperial",
      "bteb",
      "rajshahi",
      "tangail",
    ],
    response:
      "Munem's educational background:\n\n• **B.Sc. in Computer Science & Engineering (CSE):** University of Rajshahi (through Imperial College of Engineering, Khulna — 2023–Present).\n• **Diploma in Computer Technology:** Bangladesh Technical Education Board (Tangail — 2018–2022).\n• Core coursework: Algorithms, Machine Learning, Database Systems, Computer Architecture, and Digital Systems.",
    hasWhatsAppCta: false,
  },
  {
    keywords: [
      "price",
      "pricing",
      "cost",
      "rate",
      "quote",
      "charge",
      "budget",
      "how much",
    ],
    response:
      "Pricing depends on the scope of your project (single product visualization, entire e-commerce catalogue shoot, or machine learning pipelines).\n\n• Offers highly competitive rates, rapid delivery, and dedicated revisions.\n• Message Munem on **WhatsApp** for an instant quote and discussion!",
    hasWhatsAppCta: true,
  },
  {
    keywords: ["social", "linkedin", "github", "twitter", "x", "links", "profiles"],
    response:
      "Here are Munem's verified profiles:\n\n• **WhatsApp:** [wa.me/munemsarker](https://wa.me/munemsarker)\n• **Fiverr:** [fiverr.com/munem_ai](https://www.fiverr.com/munem_ai)\n• **LinkedIn:** [bd.linkedin.com/in/munemsarker](https://bd.linkedin.com/in/munemsarker)\n• **GitHub:** [github.com/munemsarker](https://github.com/munemsarker)\n• **X / Twitter:** [x.com/munem_sarker](https://x.com/munem_sarker)",
    hasWhatsAppCta: true,
  },
  {
    keywords: [
      "hello",
      "hi",
      "hey",
      "salam",
      "assalamu",
      "greetings",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    response:
      "Hello there! 👋 Welcome to my portfolio website. I'm Munem Sarker's AI Assistant. How can I help you today? You can ask about my **AI visual works**, **machine learning background**, or **connect directly on WhatsApp**!",
    hasWhatsAppCta: true,
  },
  {
    keywords: ["thank", "thanks", "bye", "goodbye", "cool", "awesome", "great"],
    response:
      "You're very welcome! If you need anything else or have a project in mind, Munem is always happy to connect on WhatsApp at [wa.me/munemsarker](https://wa.me/munemsarker). Have a wonderful day! ✨",
    hasWhatsAppCta: true,
  },
];

const SUGGESTIONS = [
  "💬 Chat on WhatsApp",
  "📸 AI Product Photography",
  "📊 Data Science & ML",
  "💼 Fiverr & Client Reviews",
  "🎓 Education & Background",
  "🚀 How to Hire & Rates",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-1",
      sender: "bot",
      text: "Hi! 👋 I'm **Munem Sarker's AI Assistant**.\n\nI can tell you about his **AI Visuals**, **Commercial Photography**, **Data Science & ML**, or connect you directly with him on **WhatsApp**!\n\nWhat would you like to know?",
      hasWhatsAppCta: true,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Only auto-focus on desktop devices to avoid triggering mobile virtual keyboard shift
      if (typeof window !== "undefined" && window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 250);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const findBestResponse = (query: string): { response: string; hasWhatsAppCta: boolean } => {
    const lower = query.toLowerCase().trim();

    let bestRule: KnowledgeRule | null = null;
    let maxScore = 0;

    for (const rule of KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of rule.keywords) {
        if (lower.includes(kw)) {
          score += kw.length;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestRule = rule;
      }
    }

    if (bestRule && maxScore > 0) {
      return {
        response: bestRule.response,
        hasWhatsAppCta: !!bestRule.hasWhatsAppCta,
      };
    }

    return {
      response:
        "I'd love to help with that! Munem specializes in **Photorealistic AI Product Visualization**, **Commercial Photography**, and **Data Science & ML**.\n\nYou can ask about his services, education, or Fiverr experience, or message Munem directly on **WhatsApp** at [wa.me/munemsarker](https://wa.me/munemsarker)!",
      hasWhatsAppCta: true,
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const { response, hasWhatsAppCta } = findBestResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response,
        hasWhatsAppCta,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const renderFormattedText = (rawText: string) => {
    const parts = rawText.split("\n");
    return parts.map((line, lineIdx) => {
      const formattedLine = parseLineMarkup(line);
      return (
        <p key={lineIdx} style={{ margin: line ? "0 0 6px 0" : "0 0 4px 0" }}>
          {formattedLine}
        </p>
      );
    });
  };

  const parseLineMarkup = (line: string) => {
    const tokens = line.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
    return tokens.map((token, idx) => {
      if (token.startsWith("[") && token.includes("](")) {
        const match = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return (
            <a
              key={idx}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              {match[1]} ↗
            </a>
          );
        }
      }
      if (token.startsWith("**") && token.endsWith("**")) {
        return <strong key={idx}>{token.slice(2, -2)}</strong>;
      }
      return token;
    });
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? "open" : ""}`}>
      {/* Semi-transparent Backdrop on Mobile for 1-Tap Dismissal */}
      <div
        className={`chatbot-backdrop ${isOpen ? "visible" : ""}`}
        onClick={handleClose}
        onTouchEnd={handleClose}
        aria-hidden="true"
        data-cursor="disable"
      />

      {/* Floating Trigger Button */}
      <button
        type="button"
        className="chatbot-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        onTouchEnd={(e) => {
          if (!isOpen) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label="Toggle Munem Sarker Chat Assistant"
        data-cursor="disable"
        title="Chat with Munem Sarker"
      >
        <img
          src="/images/munem-avatar.jpg"
          alt="Munem Sarker"
          className="chatbot-avatar-img"
        />
        <span className="chatbot-status-dot"></span>
        {!isOpen && (
          <span className="chatbot-tooltip">
            <IoSparkles className="chatbot-tooltip-sparkle" /> Chat with Munem
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "visible" : "hidden"}`}>
        {/* Mobile Pull Handle for quick close gesture */}
        <div
          className="chatbot-pull-handle-wrap"
          onClick={handleClose}
          onTouchEnd={handleClose}
          aria-label="Pull to close"
        >
          <div className="chatbot-pull-handle"></div>
        </div>

        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-left">
            <div className="chatbot-header-avatar">
              <img src="/images/munem-avatar.jpg" alt="Munem Sarker" />
              <span className="chatbot-status-dot"></span>
            </div>
            <div className="chatbot-header-info">
              <div className="chatbot-header-title">Munem Sarker</div>
              <div className="chatbot-header-subtitle">
                <span className="chatbot-header-pulse"></span> AI Assistant • Online
              </div>
            </div>
          </div>
          <div className="chatbot-header-actions">
            <a
              href="https://wa.me/munemsarker"
              target="_blank"
              rel="noopener noreferrer"
              className="chatbot-header-wa-btn"
              data-cursor="disable"
              title="Direct WhatsApp"
            >
              <FaWhatsapp style={{ fontSize: "15px" }} />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              className="chatbot-header-close-btn"
              onClick={handleClose}
              onTouchEnd={handleClose}
              aria-label="Close Chat"
              data-cursor="disable"
              title="Close chat"
            >
              <IoClose style={{ pointerEvents: "none" }} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot-message ${msg.sender}`}>
              {msg.sender === "bot" && (
                <img
                  src="/images/munem-avatar.jpg"
                  alt="Munem Sarker"
                  className="chatbot-msg-avatar"
                />
              )}
              <div className="chatbot-msg-bubble">
                {renderFormattedText(msg.text)}
                {msg.hasWhatsAppCta && (
                  <div>
                    <a
                      href="https://wa.me/munemsarker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chatbot-wa-cta-btn"
                      data-cursor="disable"
                    >
                      <FaWhatsapp style={{ fontSize: "15px" }} /> Chat on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-message bot">
              <img
                src="/images/munem-avatar.jpg"
                alt="Munem Sarker"
                className="chatbot-msg-avatar"
              />
              <div className="chatbot-typing">
                <span className="chatbot-typing-dot"></span>
                <span className="chatbot-typing-dot"></span>
                <span className="chatbot-typing-dot"></span>
              </div>
            </div>
          )}

          {/* Quick Suggestion Chips */}
          <div className="chatbot-chips-wrap">
            {SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                type="button"
                className={`chatbot-chip ${
                  suggestion.includes("WhatsApp") ? "wa-chip" : ""
                }`}
                onClick={() => handleSend(suggestion)}
                data-cursor="disable"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form className="chatbot-input-bar" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Ask about Munem or services..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            data-cursor="disable"
          />
          <button
            type="submit"
            className="chatbot-send-btn"
            disabled={!input.trim()}
            aria-label="Send message"
            data-cursor="disable"
          >
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
