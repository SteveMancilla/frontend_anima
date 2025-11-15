// src/components/FileDropzone.tsx
import React, { useState, useRef } from "react";
import type { DragEvent } from "react";

interface Props {
  onFileSelected: (file: File) => void;
}

const FileDropzone: React.FC<Props> = ({ onFileSelected }) => {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      onFileSelected(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-8 cursor-pointer transition
        ${dragging ? "border-fuchsia-400 bg-white/10" : "border-white/20"}
      `}
    >
      <p className="text-slate-300 text-center">
        Arrastra una imagen aquí o haz clic para seleccionar
      </p>

      {preview && (
        <img
          src={preview}
          className="mt-4 w-full h-48 object-cover rounded-lg"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onFileSelected(file);
            setPreview(URL.createObjectURL(file));
          }
        }}
      />
    </div>
  );
};

export default FileDropzone;