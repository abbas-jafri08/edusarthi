  import { useState, useRef, useEffect } from "react";
  import { askAI } from "../lib/groq";

  export default function Chatbot() {

    const [messages, setMessages] = useState([
      {
        id: 1,
        who: "bot",
        text: "Hi! I'm EduSarthi — ask me about courses, colleges, or careers."
      }
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const bodyRef = useRef();

    useEffect(() => {
      bodyRef.current?.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: "smooth"
      });
    }, [messages]);

    async function send() {

      if (!input.trim()) return;

      const userMsg = {
        id: Date.now(),
        who: "user",
        text: input.trim()
      };

      setMessages((m) => [...m, userMsg]);
      setInput("");
      setLoading(true);

      const reply = await askAI(`
  You are EduSarthi, an AI career advisor for Indian students.

Give practical advice about:
- courses
- colleges
- entrance exams
- skills

Answer in 3–4 clear sentences.

Student question:
${userMsg.text}
  `);

      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          who: "bot",
          text: reply
        }
      ]);

      setLoading(false);
    }

    return (
      <div className="container">

        <div className="chat-wrap card">

          <div style={{ padding: 12, borderBottom: "1px solid rgba(15,23,42,0.05)" }}>
            <strong>EduSarthi Advisor</strong>
          </div>

          <div ref={bodyRef} className="chat-body">

            {messages.map((m) => (
              <div
                key={m.id}
                className={`bubble ${m.who === "bot" ? "bot" : "user"}`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="bubble bot">
                Typing...
              </div>
            )}

          </div>

          <div className="chat-input">

            <input
              placeholder="Ask about courses, colleges, scholarships..."
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 10,
                border: "1px solid #ddd"
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />

            <button className="btn-primary" onClick={send}>
              Send
            </button>

          </div>

        </div>

      </div>
    );
  }