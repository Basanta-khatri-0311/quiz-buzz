import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GameProvider } from "./context/GameContext.jsx";
import { QuizProvider } from "./context/QuizContext.jsx";

createRoot(document.getElementById("root")).render(
  <GameProvider>
    <QuizProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </QuizProvider>
  </GameProvider>
);
