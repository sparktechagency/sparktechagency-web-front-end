"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot" }>
  >([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");

      // Simulated bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "This chatbot is under development. Stay tuned for updates!",
            sender: "bot",
          },
        ]);
      }, 500);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-6 lg:right-20 md:bottom-8 lg:bottom-[300px] md:right-8 w-16 h-16 rounded-full  hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 custom-shadow cursor-pointer backdrop-blur-sm"
        >
          <Image src="/assets/chatbot-logo.png" alt="chatbot Logo" height={80} width={80} className="h-9 w-9 object-fill mt-2" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 md:bottom-8 lg:bottom-[300px] right-6   md:right-8 lg:right-20 w-full max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col z-40 h-96 md:h-[500px]">
          {/* Header */}
          <div className="bg-linear-to-r from-lime-400 to-green-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Sparktech Support</h3>
              <p className="text-xs text-slate-700">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-900" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-center">
                <div className="space-y-2">
                  <MessageCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm text-slate-500">Start a conversation</p>
                </div>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-200 text-slate-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-linear-to-br from-lime-400 to-green-500 text-slate-900 rounded-lg hover:shadow-md transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
