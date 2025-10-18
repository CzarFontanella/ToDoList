import React, { useState } from 'react';

export default function Home({ auth }) {
    const [user] = useState(auth);

    return(
        <div className="home-container">
            <h1>Bem-vindo ao {user.email}</h1>
            <p>Organize suas tarefas de forma eficiente e prática!</p>
        </div>
    )
}