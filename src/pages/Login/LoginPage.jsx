import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "true");
        navigate("/");
    }

    return (
        <div>
            <h1>Login Page 🧑🏻</h1>
            <button onClick={handleLogin}>Ingresar al sitio</button>
        </div>
    );
};

export default LoginPage;