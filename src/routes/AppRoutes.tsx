// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Home from "../pages/Home";
import EmotionFeed from "../pages/EmotionFeed";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/emotion" element={<EmotionFeed />} />
        </Routes>
    );
    }

export default AppRoutes;