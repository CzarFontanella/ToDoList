import "./NavBar.css"

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <h3 className="nav-header">ToDo</h3>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/tarefas">Tarefas</a>
                    </li>
                    <li>
                        <a href="/user">Usuário</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}