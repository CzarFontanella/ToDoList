import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          {user == null ? (
            <>
              <Route path="/" element={<Login setUser={setUser} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home auth={user} />} />
            </>
          )}
        </Routes>
      </main>

      <footer></footer>
    </>
  );
}
