import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';

function LoginRoutes(props) {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
        </Routes>
    );
}

export default LoginRoutes;