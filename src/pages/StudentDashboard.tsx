// src/pages/StudentDashboard.tsx
import React, { useState } from "react";
import { api } from "../lib/axios";

const StudentDashboard: React.FC = () => {
  const [query, setQuery] = useState("");
  const [teachers, setTeachers] = useState<any[]>([]);
  const [materials, setMaterials] = useState<any[]>([]);

  const searchTeachers = async (text: string) => {
    setQuery(text);

    if (!text.trim()) {
      setTeachers([]);
      return;
    }

    try {
      const res = await api.get(`/teachers/search?q=${encodeURIComponent(text)}`);
      setTeachers(res.data);
    } catch (error) {
      console.error("Error buscando docentes:", error);
    }
  };

  const loadMaterials = async (teacherId: string) => {
    try {
      const res = await api.get(`/teachers/${teacherId}/material`);
      setMaterials(res.data);
    } catch (error) {
      console.error("Error cargando material:", error);
    }
  };

  return (
    <div className="p-8 text-white space-y-8">
      <h2 className="text-2xl font-bold">🔎 Buscar docente</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => searchTeachers(e.target.value)}
        placeholder="Escribe el nombre del docente"
        className="w-full px-4 py-2 bg-white/10 rounded-lg"
      />

      {/* Resultados del buscador */}
      {query && teachers.length > 0 && (
        <div className="bg-white/5 p-4 rounded-xl space-y-2 max-w-md">
          {teachers.map((t) => (
            <button
              key={t._id}
              onClick={() => loadMaterials(t._id)}
              className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded"
            >
              {t.name}
            </button>
          ))}
        </div>
      )}

      <h3 className="text-xl font-semibold">📘 Material encontrado</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materials.map((m) => (
          <div key={m._id} className="bg-white/5 p-4 rounded-xl">
            <img
              src={m.imageUrl}
              className="w-full rounded-lg h-48 object-cover"
            />

            {m.quizzes.length > 0 ? (
              <div className="mt-4 space-y-3">
                <h4 className="font-semibold mb-2">Quiz:</h4>

                {m.quizzes.map((q: any, i: number) => (
                  <div key={i} className="mb-2">
                    <p className="font-medium">{q.question}</p>
                    <ul className="pl-4 list-disc">
                      {q.options.map((op: string, j: number) => (
                        <li key={j}>{op}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-yellow-300 mt-3">
                El docente aún no generó el quiz.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;