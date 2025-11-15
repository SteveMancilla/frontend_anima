// src/pages/SplashScreen.tsx

import logo from "../assets/logo-anima.svg";

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center px-4">

        {/* LOGO SVG */}
        <img
          src={logo}
          alt="ANIMA Logo"
          className="w-40 h-40 mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        />

        {/* TEXTO ANIMA CON GRADIENTE ANIMADO */}
        <h1
          className="
            text-[20vw]
            md:text-[12vw]
            font-extrabold 
            tracking-tight 
            text-transparent 
            bg-clip-text 
            animate-gradient
            bg-[length:200%_200%]
            bg-gradient-to-r 
            from-cyan-400 
            via-purple-500 
            to-yellow-300
          "
        >
          ANIMA
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-lg text-slate-200">
          El aprendizaje nunca fue tan humano
        </p>

      </div>
    </div>
  );
}