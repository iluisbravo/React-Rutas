import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';

function HomeRoutes(props) {
    return (
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
    );
}

export default HomeRoutes;