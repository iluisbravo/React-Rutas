import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Product Page 🛒</h1>
            <h2>Selected product {id}</h2>
        </div>
    );
};

export default ProductPage;