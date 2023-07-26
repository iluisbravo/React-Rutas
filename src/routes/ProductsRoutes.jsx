import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewProductPage from '../pages/Products/NewProductPage';
import ProductPage from '../pages/Products/ProductPage';
import ProductsPage from '../pages/Products/ProductsPage';

function ProductsRoutes(props) {
    return (
        <Routes>
            <Route index element={<ProductsPage />} />
            <Route path=':id' element={<ProductPage />} />
            <Route path='New' element={<NewProductPage />} />
        </Routes>
    );
}

export default ProductsRoutes;