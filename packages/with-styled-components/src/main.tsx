import "normalize.css";
import "index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "App";
import type {} from "styled-components/cssprop";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
