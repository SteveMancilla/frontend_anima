// src/pages/EmotionFeed.tsx
import { useEmotion } from "../lib/EmotionContext";
import React, { useEffect, useRef, useState } from "react";
import EmotionCam from "../components/EmotionCam";
import Sidebar from "../components/Sidebar";
import ChatBubble from "../components/ChatBubble";
import ChatButton from "../components/ChatButton";
import {
  Heart,
  Share2,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  MessageCircle,
  Bookmark,
} from "lucide-react";

import disgust1 from "../assets/image/Disgustado_1.png";
import disgust2 from "../assets/image/Disgustado_2.png";

import angry1 from "../assets/image/Enojado_1.png";
import angry2 from "../assets/image/Enojado_2.png";
import angry3 from "../assets/image/Enojado_3.png";
import angry4 from "../assets/image/Enojado_4.png";
import angry5 from "../assets/image/Enojado_5.png";

import happy1 from "../assets/image/Feliz_1.png";
import happy2 from "../assets/image/Feliz_2.png";
import happy3 from "../assets/image/Feliz_3.png";
import happy4 from "../assets/image/Feliz_4.png";
import happy5 from "../assets/image/Feliz_5.png";

import neutral1 from "../assets/image/Neutral_1.png";
import neutral2 from "../assets/image/Neutral_2.png";

import surprise1 from "../assets/image/Sorprendido_1.png";
import surprise2 from "../assets/image/Sorprendido_2.png";
import surprise3 from "../assets/image/Sorprendido_3.png";
import surprise4 from "../assets/image/Sorprendido_4.png";
import surprise5 from "../assets/image/Sorprendido_5.png";

import scared1 from "../assets/image/Temeroso_1.png";
import scared2 from "../assets/image/Temeroso_2.png";

import sad1 from "../assets/image/Triste_1.png";
import sad2 from "../assets/image/Triste_2.png";
import sad3 from "../assets/image/Triste_3.png";
import sad4 from "../assets/image/Triste_4.png";
import sad5 from "../assets/image/Triste_5.png";

const defaultCapsule = {
  tags: ["#anima"],
  stats: {
    likes: 0,
    comments: 0,
    saves: 0,
    shares: 0,
  },
};

const makeCapsule = (caps: Partial<Capsule>[]): Capsule[] =>
  caps.map((c) => ({ ...defaultCapsule, ...c })) as Capsule[];

// Tipo de cápsula (contenido principal del feed)
type CapsuleType = "video" | "image";

type Capsule = {
  id: string;
  type: CapsuleType;
  src: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  stats: {
    likes: number;
    comments: number;
    saves: number;
    shares: number;
  };
};

const FEED_DISGUST = makeCapsule([
  { id: "disgust-1", type: "image", src: disgust1, title: "¿Molesto?", description: "Respira, ANIMA te apoya.", author: "@anima" },
  { id: "disgust-2", type: "image", src: disgust2, title: "Mala experiencia", description: "Consejos rápidos.", author: "@anima" }
]);

const FEED_ANGRY = makeCapsule([
  { id: "angry-1", type: "image", src: angry1, title: "Calma tu enojo", description: "Guía rápida.", author: "@anima" },
  { id: "angry-2", type: "image", src: angry2, title: "Frustración al estudiar", description: "Técnicas anti-estrés.", author: "@anima" },
  { id: "angry-3", type: "image", src: angry3, title: "Respira antes de seguir", description: "Regulación emocional.", author: "@anima" },
  { id: "angry-4", type: "image", src: angry4, title: "Respira antes de seguir", description: "Regulación emocional.", author: "@anima" },
  { id: "angry-5", type: "image", src: angry5, title: "Respira antes de seguir", description: "Regulación emocional.", author: "@anima" }
]);

const FEED_HAPPY = makeCapsule([
  { id: "happy-1", type: "image", src: happy1, title: "¡Excelente ánimo!", description: "Aprovecha tu energía.", author: "@anima" },
  { id: "happy-2", type: "image", src: happy2, title: "Aprende disfrutando", description: "Contenido motivador.", author: "@anima" },
  { id: "happy-3", type: "image", src: happy3, title: "Aprende disfrutando", description: "Contenido motivador.", author: "@anima" },
  { id: "happy-4", type: "image", src: happy4, title: "Aprende disfrutando", description: "Contenido motivador.", author: "@anima" },
  { id: "happy-5", type: "image", src: happy5, title: "Aprende disfrutando", description: "Contenido motivador.", author: "@anima" }
]);

const FEED_NEUTRAL = makeCapsule([
  { id: "neutral-1", type: "image", src: neutral1, title: "Estado neutral", description: "Enfócate paso a paso.", author: "@anima" },
  { id: "neutral-2", type: "image", src: neutral2, title: "Estado neutral", description: "Enfócate paso a paso.", author: "@anima" }
]);

const FEED_SURPRISE = makeCapsule([
  { id: "surprise-1", type: "image", src: surprise1, title: "¿Sorprendido?", description: "Descubre más.", author: "@anima" },
  { id: "surprise-2", type: "image", src: surprise2, title: "¿Sorprendido?", description: "Descubre más.", author: "@anima" },
  { id: "surprise-3", type: "image", src: surprise3, title: "¿Sorprendido?", description: "Descubre más.", author: "@anima" },
  { id: "surprise-4", type: "image", src: surprise4, title: "¿Sorprendido?", description: "Descubre más.", author: "@anima" },
  { id: "surprise-5", type: "image", src: surprise5, title: "¿Sorprendido?", description: "Descubre más.", author: "@anima" }
]);

const FEED_SCARED = makeCapsule([
  { id: "scared-1", type: "image", src: scared1, title: "Si sientes temor…", description: "No estás solo.", author: "@anima" },
  { id: "scared-2", type: "image", src: scared2, title: "Si sientes temor…", description: "No estás solo.", author: "@anima" }
]);

const FEED_SAD = makeCapsule([
  { id: "sad-1", type: "image", src: sad1, title: "Si te sientes triste…", description: "Respira y sigue.", author: "@anima" },
  { id: "sad-2", type: "image", src: sad2, title: "Si te sientes triste…", description: "Respira y sigue.", author: "@anima" },
  { id: "sad-3", type: "image", src: sad3, title: "Si te sientes triste…", description: "Respira y sigue.", author: "@anima" },
  { id: "sad-4", type: "image", src: sad4, title: "Si te sientes triste…", description: "Respira y sigue.", author: "@anima" },
  { id: "sad-5", type: "image", src: sad5, title: "Si te sientes triste…", description: "Respira y sigue.", author: "@anima" }
]);

const EmotionFeed: React.FC = () => {
  const { emotion } = useEmotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showEmotionPanel, setShowEmotionPanel] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const FEED = React.useMemo(() => {
    switch (emotion) {
      case "disgust": return FEED_DISGUST;
      case "angry": return FEED_ANGRY;
      case "happy": return FEED_HAPPY;
      case "neutral": return FEED_NEUTRAL;
      case "surprised": return FEED_SURPRISE;
      case "fear": return FEED_SCARED;
      case "sad": return FEED_SAD;
      default: return FEED_NEUTRAL;
    }
  }, [emotion]);
  

  const safeIndex = Math.min(currentIndex, FEED.length - 1);
  const current = FEED[safeIndex];

  // Cuando cambia de cápsula: si es video, reiniciar y reproducir
  useEffect(() => {
    if (current.type === "video" && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0;
      video.muted = isMuted;

      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // El navegador puede bloquear autoplay con audio;
          // el usuario podrá activar sonido con el botón.
        });
      }
    }
  }, [currentIndex, current.type, isMuted]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEED.length - 1 : prev - 1));
  };  
  
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === FEED.length - 1 ? 0 : prev + 1
    );
  };  
  

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  };

  const CHAT_MESSAGES: Record<string, string[]> = {
    sad: [
      "Tranquilo, estoy aquí para ti",
      "Respira… no estás solo.",
      "Todo estará bien, paso a paso."
    ]
  };
  
  const [chatMessage, setChatMessage] = useState<string | null>(null);

  useEffect(() => {
    const msgs = CHAT_MESSAGES[emotion];
    if (!msgs) return;
  
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
  
    // Evitar el warning de setState sincrono
    const showTimer = setTimeout(() => {
      setChatMessage(randomMsg);
    }, 0);
  
    const hideTimer = setTimeout(() => {
      setChatMessage(null);
    }, 5000);
  
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  
  }, [emotion]);  


  return (
    <div className="min-h-screen bg-black text-slate-50 flex">
      
      {/* Sidebar reutilizable */}
      <Sidebar />
      {/* Zona central + panel de emociones */}
      <main className="flex-1 flex overflow-hidden">
        {/* Columna central: cápsula + acciones */}
        <section className="flex flex-1 items-start justify-center pt-8">

          <div className="flex items-center gap-6 relative">

    {/* 💬 BOTÓN FIJO (siempre visible) */}
    <div className="absolute left-full bottom-32 ml-10">
      <ChatButton />
      {chatMessage && <ChatBubble message={chatMessage} />}
    </div>
            <div className="relative h-[88vh] aspect-[9/16] max-w-[480px] overflow-hidden rounded-[32px] bg-slate-900 shadow-[0_0_40px_rgba(0,0,0,0.55)]">
              {current.type === "video" ? (
                <video
                  key={current.id}
                  ref={videoRef}
                  src={current.src}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                />
              ) : (
                <img
                  key={current.id}
                  src={current.src}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Filtro degradado para textos inferiores */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Textos sobrepuestos en la parte inferior */}
              <div className="absolute inset-x-0 bottom-4 px-4 text-sm">
                <p className="font-semibold mb-1">{current.title}</p>
                <p className="text-xs text-slate-200 mb-2 line-clamp-2">
                  {current.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>{current.author}</span>
                  <span className="flex gap-2">
                    {current.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </div>
              </div>

              {/* Flechas arriba / abajo estilo TikTok */}
              <button
                onClick={handlePrev}
                className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-black/60 p-2 text-slate-100 hover:bg-black/80 transition"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute left-1/2 bottom-3 -translate-x-1/2 rounded-full bg-black/60 p-2 text-slate-100 hover:bg-black/80 transition"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* COLUMNA DE ACCIONES AL COSTADO DE LA CÁPSULA */}
            <div className="flex flex-col items-center gap-4">
              {/* Usuario / perfil del creador */}
              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-yellow-300 flex items-center justify-center text-xs font-bold">
                  A
                </div>
                <span className="text-[10px] text-slate-200">Seguir</span>
              </button>

              {/* Like */}
              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <Heart className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.likes.toLocaleString()}
                </span>
              </button>

              {/* Comentarios */}
              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.comments.toLocaleString()}
                </span>
              </button>

              {/* Guardados */}
              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <Bookmark className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.saves.toLocaleString()}
                </span>
              </button>

              {/* Compartir */}
              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <Share2 className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.shares.toLocaleString()}
                </span>
              </button>

              {/* Volumen (sólo si es video) */}
              {current.type === "video" && (
                <button
                  onClick={toggleMute}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-[10px] text-slate-200">
                    {isMuted ? "Silencio" : "Sonido"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Panel de emociones a la derecha (colapsable, sin tapar la cápsula) */}
        <aside
          className={`relative border-l border-slate-800 bg-[#020617] transition-[width] duration-300 ease-in-out ${
            showEmotionPanel ? "w-[380px]" : "w-10"
          }`}
        >
          {/* Botón flotante para mostrar/ocultar panel */}
          <button
            onClick={() => setShowEmotionPanel((prev) => !prev)}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-900 border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 shadow-lg"
          >
            {showEmotionPanel ? (
              <span className="text-xs">&gt;</span>
            ) : (
              <span className="text-xs">&lt;</span>
            )}
          </button>

          {/* Contenido del panel sólo si está visible */}
          {showEmotionPanel && (
            <div className="h-full overflow-y-auto">
              <EmotionCam />
            </div>
          )}
        </aside>
      </main>
    </div>
  );
};

export default EmotionFeed;