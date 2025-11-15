import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { EmotionProvider } from "./lib/EmotionContext";

function App() {
  return (
    <EmotionProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </EmotionProvider>
  );
}

export default App;
