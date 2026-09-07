import React from "react";
import { createRoot } from "react-dom/client";
import "material-icons/iconfont/filled.css";
import "material-icons/iconfont/outlined.css";
import "./styles.css";
import "./case-layout.css";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
