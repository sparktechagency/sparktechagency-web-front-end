import ChatBot from "@/shared/chatbot/Chatbot";
import Navbar from "@/shared/Navbar";
import { Button } from "antd";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <section>{children}</section>
      <footer></footer>
      {/* Chatbot widget */}
      <ChatBot />
    </main>
  );
}
