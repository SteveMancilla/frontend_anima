// src/pages/LearningPage.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderSwitcher from "../components/HeaderSwitcher";
import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";

const LearningPage: React.FC = () => {
  const [mode, setMode] = useState<"teacher" | "student">("teacher");

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <HeaderSwitcher mode={mode} setMode={setMode} />

        <main className="flex-1 overflow-auto bg-[#050509]">
          {mode === "teacher" ? <TeacherDashboard /> : <StudentDashboard />}
        </main>
      </div>
    </div>
  );
};

export default LearningPage;