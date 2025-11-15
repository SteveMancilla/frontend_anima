import React from "react";

interface ChatBubbleProps {
  message: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <div
      className="
        fixed
        left-[260px]       /* ⬅️ UBICACIÓN EXACTA */
        bottom-[180px]     /* ⬅️ ALTURA EXACTA */
        bg-white
        text-black
        px-5
        py-3
        rounded-2xl
        shadow-xl
        max-w-[420px]      /* ⬅️ MÁS LARGO */
        break-words
        animate-chat-appear
        z-[9999]
      "
    >
      <p className="text-[15px] leading-snug">{message}</p>
    </div>
  );
};

export default ChatBubble;
