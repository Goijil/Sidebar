import { domAnimation, LazyMotion } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LazyMotion features={domAnimation}>
      <App />
    </LazyMotion>
  </StrictMode>
);
