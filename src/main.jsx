import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Login from "./pages/Login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Login /> */}
    <Cadastro />
  </StrictMode>
);
