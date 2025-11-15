// src/pages/SplashScreen.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-anima.svg";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // 1) Fade-in suave al montar
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 50); // pequeño delay para que la transición se note

    // 2) Después de ~2.2s empezamos fade-out
    const fadeOutTimer = setTimeout(() => {
      setFadingOut(true);

      // 3) Cuando termina el fade-out, navegamos a /home
      const navigateTimer = setTimeout(() => {
        navigate("/home");
      }, 700); // mismo tiempo que la duración de la transición

      return () => clearTimeout(navigateTimer);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [navigate]);

  const opacityClass =
    !visible || fadingOut ? "opacity-0" : "opacity-100";

  return (
    <div
      className={`
        min-h-screen bg-[#151515] 
        flex items-center justify-center
        transition-opacity duration-700
        ${opacityClass}
      `}
    >
      <div className="flex flex-col items-center gap-6 text-center px-4">
        {/* LOGO */}
        <img
          src={logo}
          alt="ANIMA Logo"
          className="w-40 h-40 mb-2 drop-shadow-[0_0_16px_rgba(0,0,0,0.7)]"
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
        <p className="text-sm md:text-lg text-slate-200 mt-4">
          El aprendizaje nunca fue tan humano
        </p>
      </div>
    </div>
  );
}