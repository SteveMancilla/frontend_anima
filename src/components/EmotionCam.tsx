// src/components/EmotionCam.tsx
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const EMOTION_KEYS = [
  "happy",
  "sad",
  "angry",
  "surprised",
  "disgusted",
  "fearful",
  "neutral",
] as const;

type EmotionKey = (typeof EMOTION_KEYS)[number];

type EmotionScores = Record<EmotionKey, number>;

type EngagementState =
  | "interesado"
  | "atento"
  | "desinteresado"
  | "frustrado"
  | "triste"
  | "sin rostro";

const EMOTION_LABELS: Record<EmotionKey, string> = {
  happy: "Feliz",
  sad: "Triste",
  angry: "Enojado",
  surprised: "Sorprendido",
  disgusted: "Disgustado",
  fearful: "Temeroso",
  neutral: "Neutral",
};

const EMOTION_COLORS: Record<EmotionKey, string> = {
  happy: "bg-emerald-400",
  sad: "bg-indigo-400",
  angry: "bg-red-400",
  surprised: "bg-amber-400",
  disgusted: "bg-lime-400",
  fearful: "bg-pink-400",
  neutral: "bg-slate-400",
};

const EmotionCam: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [currentEmotion, setCurrentEmotion] = useState<string>("Cargando…");
  const [engagement, setEngagement] = useState<EngagementState>("sin rostro");
  const [loadingModels, setLoadingModels] = useState(true);

  const [smoothedScores, setSmoothedScores] = useState<EmotionScores | null>(
    null
  );

  // 1. Cargar modelos
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";

      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);

      setLoadingModels(false);
    };

    loadModels();
  }, []);

  // 2. Activar cámara
  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error al acceder a la cámara", err);
      }
    };

    if (!loadingModels) startVideo();
  }, [loadingModels]);

  // 3. Reglas de engagement (MVP ANIMA)
  const inferEngagement = (expressions: EmotionScores | null): EngagementState => {
    if (!expressions) return "sin rostro";

    const {
      happy = 0,
      sad = 0,
      angry = 0,
      surprised = 0,
      disgusted = 0,
      fearful = 0,
      neutral = 0,
    } = expressions;

    if (sad > 0.35) return "triste";
    if (angry > 0.4 || disgusted > 0.35) return "frustrado";
    if (surprised > 0.3 && happy > 0.15) return "interesado";
    if (neutral > 0.6) return "atento";
    if (happy < 0.2 && neutral < 0.4) return "desinteresado";

    return "atento";
  };

  // 4. Suavizar scores
  const smoothScores = (
    prev: EmotionScores | null,
    current: EmotionScores,
    alpha = 0.25
  ): EmotionScores => {
    const result = {} as EmotionScores;

    EMOTION_KEYS.forEach((key) => {
      const prevVal = prev?.[key] ?? 0;
      const currVal = current[key] ?? 0;
      result[key] = prevVal * (1 - alpha) + currVal * alpha;
    });

    return result;
  };

  // 5. Detección en tiempo real
  useEffect(() => {
    let intervalId: number | undefined;

    const analyze = async () => {
      if (!videoRef.current || videoRef.current.readyState !== 4) return;

      const video = videoRef.current;

      const detections = await faceapi
        .detectSingleFace(
          video,
          new faceapi.TinyFaceDetectorOptions({
            inputSize: 160,
            scoreThreshold: 0.5,
          })
        )
        .withFaceExpressions();

      const canvas = canvasRef.current;

      if (canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const displaySize = { width: video.videoWidth, height: video.videoHeight };
        faceapi.matchDimensions(canvas, displaySize);

        const resizedDetections = detections
          ? faceapi.resizeResults(detections, displaySize)
          : null;

        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);

        if (resizedDetections) {
          faceapi.draw.drawDetections(canvas, resizedDetections);
        }
      }

      if (detections?.expressions) {
        const raw = detections.expressions as faceapi.FaceExpressions;

        // Mapear sólo las emociones que usamos
        const expressions = {} as EmotionScores;
        EMOTION_KEYS.forEach((key) => {
          expressions[key] = raw[key] ?? 0;
        });

        // Emoción predominante
        let bestEmotion: EmotionKey = "neutral";
        let bestScore = 0;

        EMOTION_KEYS.forEach((key) => {
          const score = expressions[key];
          if (score > bestScore) {
            bestScore = score;
            bestEmotion = key;
          }
        });

        setCurrentEmotion(`${bestEmotion} (${bestScore.toFixed(2)})`);

        // Engagement ANIMA
        const eng = inferEngagement(expressions);
        setEngagement(eng);

        // Suavizar scores
        setSmoothedScores((prev) => smoothScores(prev, expressions));
      } else {
        setCurrentEmotion("Sin emoción (no se detecta rostro)");
        setEngagement("sin rostro");
        setSmoothedScores(null);
      }
    };

    if (!loadingModels) {
      intervalId = window.setInterval(analyze, 500);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [loadingModels]);

  const engagementLabelClass = () => {
    switch (engagement) {
      case "interesado":
        return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "atento":
        return "bg-sky-100 text-sky-700 border-sky-300";
      case "desinteresado":
        return "bg-gray-100 text-gray-700 border-gray-300";
      case "frustrado":
        return "bg-red-100 text-red-700 border-red-300";
      case "triste":
        return "bg-indigo-100 text-indigo-700 border-indigo-300";
      default:
        return "bg-zinc-100 text-zinc-600 border-zinc-300";
    }
  };

  const getEmotionPercent = (key: EmotionKey): number => {
    if (!smoothedScores) return 0;
    const value = smoothedScores[key] ?? 0;
    return Math.round(value * 100);
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 text-slate-50">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            ANIMA
          </p>
          <p className="text-sm font-semibold">
            Monitoreo emocional en tiempo real
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 px-3 py-1 text-xs">
          ● En vivo
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Video + canvas */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video mb-2">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <canvas ref={canvasRef} className="absolute inset-0" />

          {loadingModels && (
            <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
              <span className="text-slate-200 animate-pulse">
                Cargando modelos de IA…
              </span>
            </div>
          )}
        </div>

        {/* Emoción detectada */}
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <p className="text-[11px] text-slate-400 mb-1">
            EMOCIÓN DETECTADA
          </p>
          <p className="text-sm font-mono text-emerald-300">
            {currentEmotion}
          </p>
        </div>

        {/* Engagement */}
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <p className="text-[11px] text-slate-400 mb-2">
            ESTADO DE ENGAGEMENT
          </p>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${engagementLabelClass()}`}
          >
            {engagement === "sin rostro"
              ? "Sin rostro detectado"
              : engagement.charAt(0).toUpperCase() + engagement.slice(1)}
          </span>
        </div>

        {/* Distribución de emociones */}
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <p className="text-[11px] text-slate-400 mb-3">
            TUS EMOCIONES
          </p>

          <div className="space-y-3">
            {EMOTION_KEYS.map((key) => {
              const percent = getEmotionPercent(key);
              const barColor = EMOTION_COLORS[key];

              return (
                <div key={key} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span>{EMOTION_LABELS[key]}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${barColor} transition-all duration-300`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-3 text-[10px] text-slate-400 leading-snug">
            ANIMA usa este perfil emocional para ajustar el feed: más desafiante
            cuando estás interesado, más visual cuando tu atención cae, apoyo
            empático si detecta tristeza o frustración.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmotionCam;