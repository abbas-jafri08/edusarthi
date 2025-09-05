import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { who: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef();

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    const newMsgs = [...messages, { who: "user", text: input }];
    setMessages(newMsgs);
    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages([...newMsgs, { who: "bot", text: data.reply || "⚠️ Error" }]);
    } catch {
      setMessages([...newMsgs, { who: "bot", text: "❌ Cannot connect to backend." }]);
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>EduSarthi Chatbot</span>
      </div>

      <div ref={chatRef} className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={m.who === "user" ? "user-msg" : "bot-msg"}>
            <b>{m.who === "user" ? "You" : "Bot"}:</b> {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
