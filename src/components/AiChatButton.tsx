"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import { AIChatBot } from "./AiChatBot";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={24} />
      </button>
      <AIChatBot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
