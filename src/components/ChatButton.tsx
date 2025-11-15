import React from "react";
import { MessageSquare } from "lucide-react";

const ChatButton: React.FC = () => {
  return (
    <div
      className="
        fixed
        left-[200px]        /* ⬅️ PEGADO A LA BURBUJA */
        bottom-[180px]
        h-14 w-14
        rounded-full
        bg-blue-600
        hover:bg-blue-700
        shadow-xl
        cursor-pointer
        flex items-center justify-center
        transition-all
        z-[9999]
      "
    >
      <MessageSquare className="h-7 w-7 text-white" />
    </div>
  );
};

export default ChatButton;
