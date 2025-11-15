// src/pages/TeacherDashboard.tsx
import { useState, useEffect } from "react";
import { api } from "../lib/axios";
import MaterialCard from "../components/MaterialCard";
import FileDropzone from "../components/FileDropzone";

const TEACHER_ID = "6918f94271f07bce40f67766"; 

const TeacherDashboard = () => {
  const [materials, setMaterials] = useState([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const fetchMaterials = async () => {
    const res = await api.get(`/teachers/${TEACHER_ID}/material`);
    setMaterials(res.data);
  };

  const uploadMaterial = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("teacherId", TEACHER_ID);

    try {
      setUploading(true);

      await api.post("/material", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSelectedFile(null);
      fetchMaterials();
      alert("Imagen subida correctamente 🎉");
    } catch (error) {
      console.error("Error subiendo material:", error);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <div className="p-8 text-white space-y-8">
      <h2 className="text-2xl font-bold">📚 Subir Material de Estudio</h2>

      <FileDropzone onFileSelected={setSelectedFile} />

      <button
        onClick={uploadMaterial}
        disabled={!selectedFile || uploading}
        className="mt-4 px-6 py-3 bg-gradient-to-r from-sky-500 to-fuchsia-500 rounded-lg disabled:opacity-40"
      >
        {uploading ? "Subiendo..." : "Subir"}
      </button>

      <h3 className="text-xl font-semibold mt-6">Tus materiales</h3>

      <div className="grid grid-cols-3 gap-6">
        {materials.map((m: any) => (
          <MaterialCard key={m._id} material={m} refresh={fetchMaterials} />
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;