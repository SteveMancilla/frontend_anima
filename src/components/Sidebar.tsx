// src/components/Sidebar.tsx
import React from "react";
import logo from "../assets/logo-anima.svg";
import { Home, Compass, User, Bookmark, MessageCircle, Film } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { label: "Para ti", icon: <Home size={20} /> },
    { label: "Explorar", icon: <Compass size={20} /> },
    { label: "Aprendizaje", icon: <Film size={20} /> },
    { label: "Mensajes", icon: <MessageCircle size={20} /> },
    { label: "Guardados", icon: <Bookmark size={20} /> },
    { label: "Perfil", icon: <User size={20} /> }
  ];

  return (
    <aside className="w-56 h-screen bg-black border-r border-white/10 px-4 py-6 flex flex-col gap-8">
      {/* LOGO ANIMA */}
      <div className="flex items-center gap-3 px-2">
        <img src={logo} alt="ANIMA" className="w-8 h-8" />
        <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-500 text-transparent bg-clip-text">
          ANIMA
        </span>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg text-sm"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-2 text-xs text-slate-500">
        © 2025 ANIMA — CodeSquad  
        <br />Universidad Continental
      </div>
    </aside>
  );
};

export default Sidebar;