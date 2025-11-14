import ChatBot from "@/shared/chatbot/Chatbot";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/navbar/Navbar";
import Spinner from "@/shared/Spinner";
import React, { Suspense } from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <section>{children}</section>
        <Footer />
        {/* Chatbot widget */}
        <ChatBot />
      </Suspense>
    </main>
  );
}
