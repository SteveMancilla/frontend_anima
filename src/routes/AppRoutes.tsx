// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Home from "../pages/Home";
import EmotionFeed from "../pages/EmotionFeed";
import Privacidad from "../pages/Privacidad";
import CondicionesServicio from "../pages/CondicionesServicio";
import SobreNosotros from "../pages/SobreNosotros";
import Ayuda from "../pages/Ayuda";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/emotion" element={<EmotionFeed />} />3
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/condiciones" element={<CondicionesServicio />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/ayuda" element={<Ayuda />} />
        </Routes>
    );
    }

export default AppRoutes;