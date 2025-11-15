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

        {/* Flecha SVG animada */}
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

const Ayuda: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#181818] text-white flex justify-center px-6 py-20">
      <div className="w-full max-w-5xl">

        {/* BOTÓN VOLVER CON CASITA */}
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

        {/* TITULO */}
        <div className="text-center mb-14">
          <h1
            className="
              text-5xl font-extrabold mb-4
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#39CAFA] via-[#A029DF] to-[#FEC914]
            "
          >
            Centro de Ayuda
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Encuentra respuestas claras sobre cómo usar ANIMA, tus datos,
            la experiencia emocional y las herramientas para estudiantes y docentes.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card title="1. ¿Qué es ANIMA?" icon="💡" color="#39CAFA">
            ANIMA es una plataforma educativa que utiliza inteligencia emocional
            para personalizar tu experiencia de aprendizaje según tus emociones
            en tiempo real.
          </Card>

          <Card title="2. ¿Necesito activar la cámara?" icon="📷" color="#A029DF">
            No es obligatorio.
            <br /><br />
            Si la activas, ANIMA puede:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Adaptar contenido según tu emoción.</li>
              <li>Activar el asistente empático.</li>
              <li>Recomendar cápsulas ligeras o avanzadas.</li>
            </ul>
            Sin cámara, puedes usar ANIMA normalmente, solo sin personalización emocional.
          </Card>

          <Card title="3. ¿ANIMA guarda mi rostro?" icon="🔐" color="#FEC914">
            ❌ No.  
            Las emociones se procesan temporalmente y se descartan.
            Tu rostro nunca se almacena ni se envía a servidores externos.
          </Card>

          <Card title="4. Problemas al iniciar sesión" icon="🔧" color="#39CAFA">
            Prueba lo siguiente:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Verifica correo y contraseña.</li>
              <li>Selecciona "Recuperar contraseña".</li>
              <li>Limpia cookies o cambia de navegador.</li>
            </ul>
            Si continúa el problema:  
            <span className="text-[#FEC914] font-semibold">codesquad@gmail.com</span>
          </Card>

          <Card title="5. ¿Puedo usar ANIMA como docente?" icon="🎓" color="#A029DF">
            Sí. Los docentes pueden:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Subir videos educativos.</li>
              <li>Crear desafíos y quizzes.</li>
              <li>Evaluar respuestas.</li>
              <li>Revisar estadísticas generales.</li>
            </ul>
          </Card>

          <Card title="6. ¿ANIMA es gratuito?" icon="💙" color="#39CAFA">
            Sí, ANIMA tiene un modo gratuito.  
            Además, instituciones pueden adquirir módulos premium:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Detección emocional avanzada.</li>
              <li>Dashboards educativos.</li>
              <li>Retos gamificados.</li>
            </ul>
          </Card>

          <Card title="7. ¿Cómo funciona el asistente empático?" icon="🤖" color="#FEC914">
            Cuando detecta señales de estrés o tristeza:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Envía mensajes positivos.</li>
              <li>Recomienda pausas.</li>
              <li>Sugiere contenido ligero.</li>
              <li>Motiva para continuar.</li>
            </ul>
          </Card>

          <Card title="8. ¿La plataforma es segura?" icon="🛡️" color="#A029DF">
            Sí. ANIMA cumple estándares de:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Privacidad emocional.</li>
              <li>Cifrado de datos.</li>
              <li>Ética en inteligencia artificial.</li>
              <li>Buenas prácticas educativas.</li>
            </ul>
          </Card>

          <Card title="9. ¿Cómo elimino mi cuenta?" icon="🗑️" color="#39CAFA">
            Ve a:
            <br />
            <strong>Configuración → Privacidad y seguridad → Eliminar cuenta</strong>
            <br /><br />
            Recibirás un correo de confirmación.
          </Card>

          <Card title="10. ¿Dónde pido soporte?" icon="📩" color="#FEC914">
            Puedes escribirnos a:
            <br />
            <span className="text-[#FEC914] font-semibold text-xl">
              codesquad@gmail.com
            </span>
            <br />
            🕓 Respuesta: 24 – 48 horas.
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Ayuda;
