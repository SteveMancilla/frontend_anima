// src/pages/Home.tsx

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="max-w-3xl px-6 py-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Bienvenido a <span className="text-cyan-400">ANIMA</span>
        </h1>
        <p className="text-slate-300 text-lg">
          La plataforma que siente mientras aprendes. Explora cápsulas cortas de
          conocimiento, mientras ANIMA adapta el contenido según tus emociones.
        </p>
        <p className="text-slate-400 text-sm">
          (Esta es la Home inicial. Luego aquí construiremos el feed, el modo
          docente y el módulo de emociones.)
        </p>
      </div>
    </div>
  );
}