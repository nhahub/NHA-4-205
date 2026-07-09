import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your Elevate Fit AI assistant. How can I help you with your health or workout today?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // 1. إضافة رسالة المستخدم للشاشة فوراً
    const userMessage = { id: Date.now(), text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputText;
    setInputText("");

    try {
      // 2. إرسال الرسالة إلى الباك إند الحقيقي على Railway
      const response = await fetch('https://nha-4-205-production.up.railway.app/api/chatbot/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await response.json();

      // 3. إضافة رد الباك إند الحقيقي للشاشة
      const botResponse = {
        id: Date.now() + 1,
        text: data.reply,
        sender: "bot"
      };
      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error("Error connecting to chatbot backend:", error);
      // رد احتياطي في حال وجود مشكلة في السيرفر أو عدم رفع التعديلات بعد
      const errorResponse = {
        id: Date.now() + 1,
        text: "Sorry, I am having trouble connecting to the server right now. Make sure backend changes are deployed on Railway.",
        sender: "bot"
      };
      setMessages((prev) => [...prev, errorResponse]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#0a0a0a] text-white pt-24 pb-8 px-4">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-900 rounded-2xl flex flex-col h-[75vh] shadow-xl overflow-hidden">
        
        {/* Chat Header */}
        <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center gap-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h2 className="text-lg font-bold text-[#c8ff00]">Elevate Fit AI</h2>
            <p className="text-xs text-zinc-400">Online & Ready to help</p>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                msg.sender === 'user'
                  ? 'bg-[#c8ff00] text-black self-end rounded-tr-none'
                  : 'bg-zinc-900 text-white self-start rounded-tl-none border border-zinc-800'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 bg-zinc-900/50 border-t border-zinc-800 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask me about diets, workouts, or BMI..."
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c8ff00] transition text-white"
          />
          <button
            type="submit"
            className="bg-[#c8ff00] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#b5e600] transition text-sm"
          >
            Send
          </button>
        </form>

      </div>
    </div>
  );
};

export default Chatbot;