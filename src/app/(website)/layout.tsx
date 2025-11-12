import ChatBot from "@/shared/chatbot/Chatbot";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/navbar/Navbar";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <section>{children}</section>
      <Footer />
      {/* Chatbot widget */}
      <ChatBot />
    </main>
  );
}
