// src/components/Sidebar.tsx
import React from "react";
import logo from "../assets/logo-anima.svg";
import {
  Home,
  Compass,
  User,
  Bookmark,
  MessageCircle,
  Film,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { label: "Para ti", icon: <Home size={22} /> },
    { label: "Explorar", icon: <Compass size={22} /> },
    { label: "Aprendizaje", icon: <Film size={22} /> },
    { label: "Mensajes", icon: <MessageCircle size={22} /> },
    { label: "Guardados", icon: <Bookmark size={22} /> },
    { label: "Perfil", icon: <User size={22} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-[#06060A] border-r border-white/10 px-5 py-6 flex flex-col gap-10 select-none">
      {/* LOGO ANIMA */}
      <div className="flex items-center gap-3 px-2">
        <img src={logo} alt="ANIMA" className="w-10 h-10" />
        <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-fuchsia-500 text-transparent bg-clip-text tracking-wide">
          ANIMA
        </span>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-4 px-4 py-3 rounded-xl 
            text-base font-medium text-slate-200 
            hover:bg-white/10 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="mt-90 px-2 text-[13px] text-slate-500 leading-tight">
        © 2025 ANIMA — CodeSquad  
        <br />
        Universidad Continental
      </div>
    </aside>
  );
};

export default Sidebar;