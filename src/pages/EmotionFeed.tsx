// src/pages/EmotionFeed.tsx
import { useEmotion } from "../lib/EmotionContext";
import React, { useEffect, useRef, useState } from "react";
import EmotionCam from "../components/EmotionCam";
import {
  Home,
  Compass,
  GraduationCap,
  MessageCircle,
  Bookmark,
  User,
  Heart,
  Share2,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
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

  return (
    <div className="min-h-screen bg-black text-slate-50 flex">
      {/* Sidebar izquierda tipo TikTok */}
      <aside className="w-64 border-r border-slate-800 bg-[#050509] flex flex-col justify-between py-4 px-3">
        <div>
          {/* Logo + nombre */}
          <div className="flex items-center gap-2 px-2 mb-6">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-yellow-300 flex items-center justify-center">
              <span className="text-xs font-black tracking-tight">A</span>
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ANIMA
            </span>
          </div>

          {/* Menú */}
          <nav className="space-y-1 text-sm">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 bg-slate-900 text-slate-50">
              <Home className="h-4 w-4" />
              <span>Para ti</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900/70">
              <Compass className="h-4 w-4" />
              <span>Explorar</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900/70">
              <GraduationCap className="h-4 w-4" />
              <span>Aprendizaje</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900/70">
              <MessageCircle className="h-4 w-4" />
              <span>Mensajes</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900/70">
              <Bookmark className="h-4 w-4" />
              <span>Guardados</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900/70">
              <User className="h-4 w-4" />
              <span>Perfil</span>
            </button>
          </nav>
        </div>

        {/* Footer mini */}
        <div className="px-3 text-[11px] text-slate-500 space-y-1">
          <p>© 2025 ANIMA — CodeSquad</p>
          <p>Universidad Continental</p>
        </div>
      </aside>

      {/* Zona central + panel de emociones */}
      <main className="flex-1 flex">
        {/* Columna central: cápsula vertical */}
        <section className="flex-1 flex flex-col items-center justify-center relative">
          <div className="relative mx-auto aspect-[9/16] max-h-[80vh] w-full max-w-md overflow-hidden rounded-3xl bg-slate-900">
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

            {/* Filtro degradado */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Textos inferiores */}
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

            {/* Flechas */}
            <button
              onClick={handlePrev}
              className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-black/60 p-2 text-slate-100 hover:bg-black/80 transition"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute left-1/2 bottom-2 -translate-x-1/2 rounded-full bg-black/60 p-2 text-slate-100 hover:bg-black/80 transition"
            >
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Acciones a la derecha */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-yellow-300 flex items-center justify-center text-xs font-bold">
                  A
                </div>
                <span className="text-[10px] text-slate-200">Seguir</span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <Heart className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.likes.toLocaleString()}
                </span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.comments.toLocaleString()}
                </span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <Bookmark className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.saves.toLocaleString()}
                </span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90">
                  <Share2 className="h-5 w-5" />
                </div>
                <span className="text-[10px] text-slate-200">
                  {current.stats.shares.toLocaleString()}
                </span>
              </button>

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

        {/* Panel de emociones colapsable */}
        <aside
          className={`relative border-l border-slate-800 bg-[#020617] transition-all duration-300 flex-shrink-0 ${
            showEmotionPanel ? "w-[360px]" : "w-6"
          }`}
        >
          {/* Botón SIEMPRE visible */}
          <button
            onClick={() => setShowEmotionPanel((prev) => !prev)}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-900 border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 shadow-lg"
          >
            {showEmotionPanel ? (
              <span className="text-xs">&gt;</span>
            ) : (
              <span className="text-xs">&lt;</span>
            )}
          </button>

          {/* Contenido solo cuando está abierto */}
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