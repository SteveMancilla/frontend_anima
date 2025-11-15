// src/components/MaterialCard.tsx
import React, { useState } from "react";
import { api } from "../lib/axios";

interface MaterialCardProps {
  material: any;
  refresh: () => void;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material, refresh }) => {
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    try {
      setLoading(true);

      // Pequeño delay para simular IA
      await new Promise((r) => setTimeout(r, 1500));

      await api.post(`/material/${material._id}/generate`);

      refresh();
    } catch (error) {
      console.error("Error generando quiz:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <img
        src={material.imageUrl}
        className="w-full rounded-lg h-48 object-cover"
      />

      <button
        onClick={generateQuiz}
        className="w-full mt-4 py-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 rounded-lg"
      >
        {loading ? "Generando..." : "Generar Quiz"}
      </button>

      {material.quizzes.length > 0 && (
        <div className="mt-4 text-sm text-green-300">Quiz generado</div>
      )}
    </div>
  );
};

export default MaterialCard;