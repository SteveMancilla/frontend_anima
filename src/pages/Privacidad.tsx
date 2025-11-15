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
        w-full bg-[#1F1F1F] rounded-2xl p-6 
        border border-[#2A2A2D]
        shadow-xl hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* EMOJI ICON */}
          <span
            className="
              text-4xl
              transition-transform 
              duration-300 
              group-hover:scale-110
            "
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          >
            {icon}
          </span>

          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>

        {/* FLECHA CUSTOM SVG */}
        <svg
          className={`w-7 h-7 transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
          style={{ color: color }}
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
          ${open ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="text-gray-300 leading-relaxed text-lg mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const Privacidad: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#181818] text-white flex justify-center px-6 py-20">

      {/* CONTENEDOR CENTRAL */}
      <div className="w-full max-w-5xl">

        {/* BOTÓN VOLVER */}
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
            Política de Privacidad
          </h1>

          <p className="text-gray-400 text-lg">
            <span className="font-semibold text-[#39CAFA]">
              Última actualización:
            </span>{" "}
            2025
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 gap-6">

          <Card
            title="Introducción"
            icon="✨"
            color="#39CAFA"
          >
            En <span className="text-[#FEC914] font-semibold">ANIMA</span>, cuidamos tu información
            y tus emociones. Esta política explica claramente cómo trabajamos
            tus datos mientras usas nuestra plataforma educativa emocional.
          </Card>

          <Card
            title="1. Información que recopilamos"
            icon="📦"
            color="#FEC914"
          >
            <strong className="text-[#FEC914]">1. Datos que nos das:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nombre, correo y contraseña.</li>
              <li>Rol dentro de ANIMA (alumno o docente).</li>
            </ul>

            <strong className="text-[#A029DF] mt-4 block">2. Datos automáticos:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Videos vistos, tiempo de uso, reacciones.</li>
              <li>Dispositivo, navegador y país aproximado.</li>
            </ul>

            <strong className="text-[#39CAFA] mt-4 block">3. Datos emocionales:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Interpretación de emociones en tiempo real.</li>
              <li>No almacenamos la imagen de tu rostro.</li>
              <li>No enviamos emociones a servidores externos.</li>
            </ul>
          </Card>

          <Card
            title="2. ¿Para qué usamos tu información?"
            icon="🎯"
            color="#A029DF"
          >
            <ul className="list-disc ml-6 space-y-2">
              <li>Personalizar tu experiencia emocional.</li>
              <li>Mejorar los contenidos educativos.</li>
              <li>Activar soporte emocional cuando lo requieras.</li>
              <li>Mantener segura y estable la plataforma.</li>
            </ul>
          </Card>

          <Card
            title="3. Bases legales y principios"
            icon="⚖️"
            color="#2C2E83"
          >
            <ul className="list-disc ml-6 space-y-2">
              <li>Minimización de datos.</li>
              <li>Transparencia absoluta.</li>
              <li>Uso estrictamente educativo.</li>
              <li>Prohibido el uso comercial de emociones.</li>
            </ul>
          </Card>

          <Card
            title="4. Compartición de datos"
            icon="🔐"
            color="#39CAFA"
          >
            <p>No vendemos tus datos. Solo compartimos cuando:</p>

            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>La ley lo solicita.</li>
              <li>Es necesario para proteger a un usuario.</li>
              <li>Nos das autorización explícita.</li>
            </ul>
          </Card>

          <Card
            title="5. Seguridad"
            icon="🛡️"
            color="#FEC914"
          >
            <ul className="list-disc ml-6 space-y-2">
              <li>Cifrado SSL.</li>
              <li>Servidores seguros.</li>
              <li>Acceso controlado.</li>
              <li>Análisis emocional temporal y no almacenado.</li>
            </ul>
          </Card>

          <Card
            title="6. Tus derechos"
            icon="🧾"
            color="#A029DF"
          >
            <ul className="list-disc ml-6 space-y-2">
              <li>Acceder a tus datos.</li>
              <li>Rectificar información.</li>
              <li>Eliminar tu cuenta.</li>
              <li>Revocar permisos de cámara.</li>
            </ul>
          </Card>

          <Card
            title="7. Contacto"
            icon="📩"
            color="#39CAFA"
          >
            <p>Si tienes preguntas o deseas ejercer tus derechos, escríbenos:</p>

            <p className="mt-3 text-[#FEC914] font-semibold text-xl">
              codesquad@gmai.com
            </p>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Privacidad;
