import React from 'react';
import ProductItem from '../components/ProductItem';
import products from '../assets/data/products.json';

const ProductListPage: React.FC = () => {
  return (
    <div className="page product-list-page">
      <div className="container">
        <h2>Lista Produktów</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
