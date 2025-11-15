// src/components/HeaderSwitcher.tsx
import React from "react";

interface Props {
  mode: "teacher" | "student";
  setMode: (m: "teacher" | "student") => void;
}

const HeaderSwitcher: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <header className="w-full bg-[#0A0A0D] text-white px-6 py-4 flex justify-between items-center border-b border-white/10">
      <h1 className="text-xl font-bold tracking-wide">
        {mode === "teacher" ? "Panel del Docente" : "Vista del Estudiante"}
      </h1>

      <button
        onClick={() => setMode(mode === "teacher" ? "student" : "teacher")}
        className="px-5 py-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white rounded-lg font-semibold"
      >
        Cambiar a {mode === "teacher" ? "Estudiante" : "Docente"}
      </button>
    </header>
  );
};

export default HeaderSwitcher;