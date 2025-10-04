import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <form>
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
      </div>
    </>
  );
}
