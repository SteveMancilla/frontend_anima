// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Home from "../pages/Home"; 

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
    }

export default AppRoutes;