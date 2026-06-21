import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function PortfolioAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Barath AI. Ask me about Barath's education, skills, projects, achievements, or contact details.",
    },
  ]);

  const getResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes("education")) {
      return "🎓 Barath is pursuing B.E Computer Science and Engineering (2024-2028) at Kongu Engineering College with a CGPA of 8.21.";
    }

    if (q.includes("skill")) {
      return "💻 Skills: React, Node.js, Java, Python, MongoDB, AWS, YOLOv8, OpenCV, Git, GitHub.";
    }

    if (q.includes("project")) {
      return "🚀 Projects: CampusSwap, Pothole Detection using YOLOv8, Aadhaar DBT Assist, Emergency Medical Response System.";
    }

    if (q.includes("achievement") || q.includes("award")) {
      return "🏆 SIH Pre-Finalist, AWS Knowledge, Multiple MERN Projects, AI/ML Projects.";
    }

    if (q.includes("contact")) {
      return "📧 Email: barathchinnu5@gmail.com";
    }

    if (q.includes("resume")) {
      return "📄 Resume available from the Resume button in the navbar.";
    }

    if (q.includes("who are you") || q.includes("about")) {
      return "👨‍💻 I'm Barath, a Full Stack Developer, AI Developer and SIH Pre-Finalist passionate about building impactful software solutions.";
    }

    return "🤖 Sorry, I don't know that yet. Try asking about education, skills, projects, achievements, contact, or resume.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: getResponse(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          p-4
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-fuchsia-500
          text-black
          shadow-lg
        "
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            w-[350px]
            h-[500px]
            rounded-3xl
            border
            border-cyan-500/20
            bg-black/90
            backdrop-blur-md
            flex
            flex-col
            z-50
          "
        >
          <div className="p-4 border-b border-white/10">
            <h2 className="text-xl font-bold text-cyan-400">
              🤖 Barath AI
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-black ml-auto"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              type="text"
              placeholder="Ask Barath AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="
                flex-1
                px-4
                py-2
                rounded-xl
                bg-white/10
                text-white
                outline-none
              "
            />

            <button
              onClick={handleSend}
              className="
                p-3
                rounded-xl
                bg-cyan-400
                text-black
              "
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}