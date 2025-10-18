import { useNavigate } from "react-router-dom";
import "./Login.css";
import { db } from "../../../firebase.ts";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Login({ setUser }) {

  const navigate = useNavigate();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    // lógica de autenticação aqui
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    const usersRef = collection(db, "user");
    const q = query(usersRef, where("email", "==", email)); // Filtrar pelo email

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.error("Email não encontrado");
        return;
      }

      // Verificar a senha (caso exista o usuário)
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.password === password) {
          console.log("Usuário autenticado com sucesso!");
          setUser(userData);
          navigate("/");
          // Aqui, você pode redirecionar o usuário ou armazenar os dados no contexto/global
        } else {
          console.error("Senha incorreta");
        }
      });
    } catch (error) {
      console.error("Erro ao buscar usuário no Firestore: ", error);
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={HandleSubmit}>
          <div className="login-card">
            <h2 id="card-title">Login</h2>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,50}$"
                title="Mínimo 8 caracteres, com ao menos: 1 maiúscula, 1 minúscula, 1 número e 1 símbolo. Sem espaços."
              />
            </div>
            <button id="login-button" type="submit">
              Logar
            </button>
          </div>
        </form>

        <a href="/cadastro">Cadastrar</a>
      </div>
    </>
  );
}
