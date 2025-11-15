// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
        </Routes>
    );
    }

export default AppRoutes;