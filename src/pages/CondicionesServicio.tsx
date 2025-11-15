import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  icon,
  color,
  children,
}: {
  title: string;
  icon: string;
  color: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="
        bg-[#1F1F1F] rounded-xl p-6
        border border-[#2A2A2D]
        shadow-xl hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-300
        cursor-pointer
        w-full
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className="text-3xl transition-transform"
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          >
            {icon}
          </span>

          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* FLECHA ANIMADA */}
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
          fill="none"
          stroke={color}
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M8 4l8 8-8 8" />
        </svg>
      </div>

      {/* CONTENIDO */}
      <div
        className={`
          overflow-hidden transition-all duration-500 
          ${open ? "max-h-[900px] opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="text-gray-300 leading-relaxed text-lg mt-1">
          {children}
        </div>
      </div>
    </div>
  );
};

const SobreNosotros: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#181818] text-white flex justify-center px-6 py-20">
      <div className="w-full max-w-5xl">

        {/* BOTÓN VOLVER – PREMIUM */}
        <button
          onClick={() => navigate("/home")}
          className="
            group mb-10 px-8 py-3 
            rounded-full font-semibold
            text-white 
            bg-gradient-to-r from-[#39CAFA] to-[#A029DF]
            shadow-lg hover:shadow-xl
            hover:scale-105
            transition-all duration-300
            flex items-center gap-3
          "
        >
          {/* ICONO CASITA */}
          <svg
            className="w-6 h-6 transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11L12 4l9 7" />
            <path d="M5 10v10h5v-6h4v6h5V10" />
          </svg>

          <span className="group-hover:tracking-wide transition-all">
            Volver al inicio
          </span>
        </button>


        {/* TITULO */}
        <div className="text-center mb-14">
          <h1
            className="
              text-5xl font-extrabold mb-4
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#39CAFA] via-[#A029DF] to-[#FEC914]
              drop-shadow-lg
            "
          >
            Sobre Nosotros
          </h1>

          <p className="text-gray-400 text-lg">
            <span className="font-semibold text-[#39CAFA]">
              ¿Quiénes somos? ¿Por qué existe ANIMA?
            </span>
          </p>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* MISIÓN */}
          <Card title="Nuestra misión" icon="🌟" color="#39CAFA">
            Crear una plataforma educativa que conecte el conocimiento con las emociones.
            Queremos que cada estudiante aprenda a su ritmo, sintiéndose acompañado,
            comprendido y motivado en cada paso.
          </Card>

          {/* VISIÓN */}
          <Card title="Nuestra visión" icon="🚀" color="#A029DF">
            Convertirnos en la plataforma líder de educación emocional inteligente,
            llevando el aprendizaje adaptativo a escuelas, instituciones y estudiantes
            de toda Latinoamérica.
          </Card>

          {/* HISTORIA */}
          <Card title="Cómo nació ANIMA" icon="💜" color="#FEC914">
            ANIMA surge de una pregunta poderosa:
            <br />
            <span className="italic">
              “¿Y si la tecnología pudiera sentir cómo aprendes?”
            </span>
            Nació como un proyecto universitario, creció como una iniciativa tecnológica
            y hoy se convierte en una propuesta educativa humana y transformadora.
          </Card>

          {/* VALORES */}
          <Card title="Nuestros valores" icon="✨" color="#39CAFA">
            <ul className="list-disc ml-6 space-y-2">
              <li>Empatía — Poner al estudiante en el centro.</li>
              <li>Innovación — Usar IA para servir, no para invadir.</li>
              <li>Ética — Datos gestionados con responsabilidad.</li>
              <li>Inclusión — Una educación accesible para todos.</li>
            </ul>
          </Card>

          {/* QUÉ HACEMOS */}
          <Card title="¿Qué hacemos?" icon="📚" color="#A029DF">
            ANIMA combina cápsulas educativas, análisis emocional en tiempo real,
            recomendaciones personalizadas y un entorno visual diseñado para motivar
            y reducir la sobrecarga cognitiva.
          </Card>

          {/* EQUIPO */}
          <Card title="Nuestro equipo" icon="🧠" color="#FEC914">
            Somos un grupo multidisciplinario de estudiantes de ingeniería,
            diseñadores y entusiastas de la IA, comprometidos con crear herramientas
            que transformen la educación.
          </Card>

          {/* PROPÓSITO SOCIAL */}
          <Card title="Impacto social" icon="🌍" color="#39CAFA">
            ANIMA está alineado con los Objetivos de Desarrollo Sostenible:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>ODS 3: Bienestar emocional.</li>
              <li>ODS 4: Educación de calidad.</li>
              <li>ODS 9: Innovación responsable.</li>
              <li>ODS 10: Reducción de desigualdades.</li>
            </ul>
          </Card>

          {/* FUTURO */}
          <Card title="Nuestro futuro" icon="🔮" color="#A029DF">
            Pronto integraremos:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Más análisis emocional avanzado.</li>
              <li>Nuevos modos de estudio personalizados.</li>
              <li>Puntajes de bienestar académico.</li>
              <li>Integración con instituciones educativas reales.</li>
            </ul>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
