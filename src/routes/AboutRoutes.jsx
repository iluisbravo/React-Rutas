import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/About/AboutPage';

function AboutRoutes(props) {
    return (
        <Routes>
            <Route index element={<AboutPage />} />
        </Routes>
    );
}

export default AboutRoutes;