import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MiniQuizProvider } from "./context/MiniQuizContextProvider";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MiniQuizProvider>
      <App />
    </MiniQuizProvider>
  </StrictMode>
);
