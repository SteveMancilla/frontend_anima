import React from "react";
import { useNavigate } from "react-router-dom";

/* ==== IMPORTA TUS IMÁGENES AQUÍ ==== */
import modelo from "../assets/modelo.png";
import primero from "../assets/primero.png";
import segundo from "../assets/segundo.png";
import tercero from "../assets/tercero.png";
import cuarto from "../assets/cuarto.png";
import camara from "../assets/video.png"
import logo from "../assets/LogoAnima.png"
import ods3 from "../assets/ODS_3.jpg"
import ods4 from "../assets/ODS_4.jpg"
import ods9 from "../assets/ODS_9.jpg"
import ods10 from "../assets/ODS_10.jpg"

const Home: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#0F0F11] text-white flex flex-col">

      {/* ===== HEADER STICKY ===== */}
      <header
        className="
          w-full flex items-center justify-between 
          px-14 py-8
          sticky top-0 
          bg-[#0F0F11]/90 
          backdrop-blur-md 
          z-50
        "
      >
        {/* TEXTO ANIMA GRADIENTE */}
        <h1
          className="
            text-4xl font-extrabold tracking-tight 
            text-transparent bg-clip-text 
            animate-gradient
            bg-[length:200%_200%]
            bg-gradient-to-r 
            from-cyan-400 via-purple-500 to-yellow-300
          "
        >
          ANIMA
        </h1>

        <button className="text-white font-medium hover:opacity-80 transition">
          Iniciar sesión
        </button>
      </header>

      {/* ===== HERO (PANTALLA COMPLETA) ===== */}
      <section className="w-full h-150 flex items-center justify-between px-14">

        {/* ----- TEXTOS ----- */}
        <div className="max-w-800">
          <h1 className="text-6xl font-bold leading-tight">
            El aprendizaje nunca<br /> fue tan humano
          </h1>

          <p className="text-gray-300 mt-6 text-xl leading-relaxed">
            Descubre una experiencia de aprendizaje<br /> personalizada que conecta con tus emociones
          </p>

          {/* BOTÓN COMENZAR CON GRADIENTE ANIMADO */}
          <button
            onClick={() => navigate("/emotion")}
            className="
              mt-10 px-10 py-3 rounded-xl 
              font-semibold text-lg 
              text-white
              bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-300
              bg-[length:200%_200%]
              animate-gradient
              shadow-lg
              transition hover:opacity-90
            "
          >
            Comenzar
          </button>
        </div>

        {/* ----- INTERFAZ DE CÁMARA ----- */}
{/* ----- INTERFAZ DE CÁMARA (estructura exacta final) ----- */}
<div className="relative">

  {/* 🟩 CONTENEDOR VERDE (PADRE – engloba TODO incluido botones) */}
  <div
    className="
      bg-[#151515]
      border border-[#2A2A2D]
      rounded-3xl
      w-[520px]
      p-4
      pt-6
      pb-10
      relative
    "
  >

    {/* 🟥 CONTENEDOR ROJO (INTERNO – solo cámara + modelo) */}
    <div
      className="
        bg-[#0F0F11]
        rounded-2xl
        w-full
        h-[380px]        /* << tamaño EXACTO: termina donde termina la modelo */
        relative
        p-6
      "
    >

      {/* 🟪 ICONO MORADO (cámara) */}
      <div
        className="
          absolute top-5 left-5
          bg-[#2A2A2D]
          p-3
          rounded-lg
          flex items-center justify-center
          w-[48px] h-[48px]
        "
      >
        <img src={camara} className="w-[22px] h-[22px]" />
      </div>

      {/* Punto verde */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-green-500 rounded-full" />

      {/* Modelo */}
      <img
        src={modelo}
        className="
          w-[390px]
          mx-auto
          mt-1
          select-none
        "
        draggable="false"
      />
    </div>

    {/* ===== BOTONES DENTRO DEL VERDE ===== */}
    <div className="mt-8 flex flex-col items-center">

      {/* FILA 1 */}
      <div className="flex justify-between w-full px-4">
        <span className="px-8 py-3 rounded-full bg-[#00C9F9] font-medium text-black text-[18px] shadow min-w-[190px] text-center">
          Entusiasmado
        </span>

        <span className="px-7 py-3 rounded-full bg-[#FFD43B] font-medium text-black text-[18px] shadow min-w-[190px] text-center">
          Motivado
        </span>
      </div>

      {/* Espacio */}
      <div className="h-4" />

      {/* FILA 2 */}
      <div className="flex justify-between w-full px-10">
        <span className="px-9 py-3 rounded-full bg-[#A855F7] font-medium text-white text-[18px] shadow min-w-[170px] text-center">
          Sorprendido
        </span>

        <span className="px-9 py-3 rounded-full bg-[#4F51C7] font-medium text-white text-[18px] shadow min-w-[170px] text-center">
          Preocupado
        </span>
      </div>

    </div>
  </div>
</div>





      </section>

      {/* ===== FEATURES CARDS ===== */}
      <section className="w-full px-14 mt-20 grid grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-[#141418] border border-[#2A2A2D] px-6 py-6 rounded-2xl">
          <div className="flex items-center gap-3">
            <img src={primero} className="h-8" />
            <h3 className="text-lg font-semibold">Aprendizaje adaptativo</h3>
          </div>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Nuestros algoritmos detectan tus emociones en tiempo real y ajustan la dificultad del contenido para que aprendas de forma efectiva y equilibrada
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#141418] border border-[#2A2A2D] px-6 py-6 rounded-2xl">
          <div className="flex items-center gap-3">
            <img src={segundo} className="h-8" />
            <h3 className="text-lg font-semibold">Educación inteligente</h3>
          </div>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            El sistema interpreta tus reacciones y adapta el ritmo, creando una experiencia más humana, empática y completamente personalizada
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#141418] border border-[#2A2A2D] px-6 py-6 rounded-2xl">
          <div className="flex items-center gap-3">
            <img src={tercero} className="h-8" />
            <h3 className="text-lg font-semibold">Contenido dinámico</h3>
          </div>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Explora cápsulas tipo “feed inteligente” que se transforman según tus intereses y emociones, manteniendo tu atención siempre activa
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#141418] border border-[#2A2A2D] px-6 py-6 rounded-2xl">
          <div className="flex items-center gap-3">
            <img src={cuarto} className="h-8" />
            <h3 className="text-lg font-semibold">Asistente empático</h3>
          </div>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Si percibe estrés o desánimo, ANIMA te acompaña con mensajes positivos, pausas activas y contenido diseñado para cuidar tu bienestar
          </p>
        </div>

      </section>

      <footer className="w-full bg-[#0F0F11] mt-20">

{/* ───────── LINEA SUPERIOR CENTRADA ───────── */}
<div className="w-full flex justify-center">
  <div className="w-[1400px] h-[1px] bg-[#2A2A2D]"></div>
</div>

{/* CONTENEDOR CENTRADO (TODO EL CONTENIDO) */}
<div className="max-w-[1400px] mx-auto py-12">

  {/* ===== BLOQUE PRINCIPAL ===== */}
  <div className="flex items-start justify-between">

    {/* IZQUIERDA */}
    <div className="flex flex-col gap-3">
      <img src={logo} className="h-25 w-25 select-none" />

      <p className="text-gray-300 text-sm">CodeSquad</p>
      <p className="text-gray-300 text-sm">Universidad Continental</p>
    </div>

    {/* CENTRO — ODS */}
    <div className="flex gap-4 mx-16 items-start pt-16">
      <img src={ods3} className="h-20 rounded-sm" />
      <img src={ods4} className="h-20 rounded-sm" />
      <img src={ods9} className="h-20 rounded-sm" />
      <img src={ods10} className="h-20 rounded-sm" />
    </div>

    {/* TEXTO A LA DERECHA */}
    <div className="max-w-[620px] text-gray-300 text-sm leading-relaxed">
      ANIMA reafirma su compromiso con la seguridad, la ética y el impacto social,
      alineándose directamente con los Objetivos de Desarrollo Sostenible (ODS).
      Contribuimos a la ODS 3 “Salud y Bienestar” al promover el equilibrio emocional
      durante el aprendizaje; a la ODS 4 “Educación de Calidad” mediante experiencias
      personalizadas e inclusivas; a la ODS 9 “Industria, Innovación e Infraestructura”
      gracias a nuestra tecnología de inteligencia emocional; y a la ODS 10 “Reducción de las
      Desigualdades”, asegurando un acceso equitativo para todos los usuarios. Todo el contenido
      y los datos se gestionan bajo estrictos estándares de privacidad y buenas prácticas
      tecnológicas, garantizando confianza, transparencia y protección integral.
    </div>
  </div>

</div>

{/* ───────── LINEA SUPERIOR CENTRADA ───────── */}
<div className="w-full flex justify-center">
  <div className="w-[1400px] h-[1px] bg-[#2A2A2D]"></div>
</div>

{/* ===== BLOQUE INFERIOR (COPY LEFT / LINKS RIGHT) ===== */}
<div className="max-w-[1400px] mx-auto py-4 flex items-center justify-between">

  {/* LEFT: COPYRIGHT */}
  <p className="text-gray-500 text-xs">
    Copyright © 2025 ANIMA – CodeSquad
  </p>

  {/* RIGHT: LINKS CON SEPARADORES */}
  <div className="flex items-center gap-6 text-gray-300 text-sm">

    {/*Politicas de privacidad*/}
    <span 
      onClick={() => navigate("/privacidad")}
      className="hover:text-white transition cursor-pointer"
      >
      Política de privacidad
    </span>

    <div className="w-[1px] h-4 bg-[#2A2A2D]" />

    {/*Condiciones de servicio*/}
    <span
      onClick={() => navigate("/condiciones")}
      className="hover:text-white transition cursor-pointer"
      > 
      Condiciones de servicio
    </span>

    <div className="w-[1px] h-4 bg-[#2A2A2D]" />

    {/*Sobre nosotros*/}
    <span
      onClick={() => navigate("/sobre-nosotros")}
      className="hover:text-white transition cursor-pointer"
      >
      Sobre nosotros
    </span>

    <div className="w-[1px] h-4 bg-[#2A2A2D]" />

    {/*Ayuda*/}
    <span
    onClick={() => navigate("/ayuda")}
    className="hover:text-white transition cursor-pointer"
    >
    Ayuda
    </span>
  </div>
</div>


</footer>



    </div>
  );
};

export default Home;
