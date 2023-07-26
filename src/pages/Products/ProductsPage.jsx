import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page 📦</h1>
            <nav>
                <ul>
                    <li><Link to="/Products/1">Product 1</Link></li>
                    <li><Link to="/Products/2">Product 2</Link></li>
                    <li><Link to="/Products/3">Product 3</Link></li>
                    <li><Link to="/Products/New">New product</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default ProductsPage;