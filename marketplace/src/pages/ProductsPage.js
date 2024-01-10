import React from 'react';
import ProductList from '../components/ProductList';
import data from '../database/data.json';

const ProductsPage = () => {
  return (
    <div className="ProductsPage">
        <ProductList products={data} />
    </div>
  );
};

export default ProductsPage;