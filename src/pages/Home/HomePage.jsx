import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/Login");
    }
    return (
        <div>
            <h1>Home Page 🏠</h1>
            <button onClick={handleLogOut}>Salir del sitio</button>
        </div>
    );
};

export default HomePage;