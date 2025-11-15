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

        {/* BOTÓN VOLVER CON ICONO DE CASITA */}
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

        {/* TÍTULO PRINCIPAL */}
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

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ANIMA nació con un propósito claro: hacer que aprender vuelva
            a sentirse humano.
          </p>
        </div>

        {/* TARJETAS CUADRADAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card title="¿Quiénes somos?" icon="💜" color="#39CAFA">
            ANIMA es un proyecto creado por un equipo multidisciplinario:
            estudiantes, docentes, psicólogos, desarrolladores y especialistas en IA.
            Creemos que la educación del futuro debe ser emocionalmente consciente,
            respetuosa y profundamente humana.
          </Card>

          <Card title="Nuestra misión" icon="🌟" color="#A029DF">
            Hacer que el aprendizaje sea más humano, más cercano y más adaptado
            a cómo te sientes.  
            ANIMA no solo enseña: te acompaña, te entiende y te inspira.
          </Card>

          <Card title="Nuestra visión" icon="🔮" color="#FEC914">
            Crear una plataforma donde cada persona pueda aprender
            según su ritmo, su estado emocional  
            y su bienestar mental.
          </Card>

          <Card title="Nuestra propuesta" icon="🚀" color="#39CAFA">
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Convertimos emociones en oportunidades de aprendizaje.</li>
              <li>Un feed educativo único para cada usuario.</li>
              <li>Experiencias tipo TikTok, pero con propósito real.</li>
              <li>Equilibrio emocional + educación de calidad.</li>
              <li>Herramientas para docentes con contenido adaptado.</li>
            </ul>
          </Card>

          <Card title="Impacto social" icon="🌍" color="#A029DF">
            ANIMA se alinea con los Objetivos de Desarrollo Sostenible:
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>ODS 3 – Salud y bienestar</li>
              <li>ODS 4 – Educación de calidad</li>
              <li>ODS 9 – Innovación responsable</li>
              <li>ODS 10 – Reducción de desigualdades</li>
            </ul>
            Creemos que la educación emocional no es un lujo: es un derecho.
          </Card>

          <Card title="Nuestro compromiso" icon="🤝" color="#FEC914">
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Ética en el uso de IA.</li>
              <li>Protección total de datos.</li>
              <li>Transparencia en cada proceso.</li>
              <li>Innovación educativa constante.</li>
              <li>Respeto profundo por la diversidad emocional.</li>
            </ul>
          </Card>

          <Card title="¿Qué NO buscamos?" icon="❌" color="#39CAFA">
            ANIMA no desea reemplazar a los docentes, ni a los humanos.
            <br />
            <span className="text-[#FEC914] font-semibold">
              ANIMA quiere acompañarlos.
            </span>
          </Card>

          <Card title="Un mensaje final" icon="✨" color="#A029DF">
            Aprender es sentir.  
            Y cuando las emociones, la tecnología y la creatividad se unen,
            nacen experiencias que transforman vidas.
            <br />
            <br />
            ANIMA está aquí para eso.
          </Card>

        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
