import React from 'react';
import type { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/helpers';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart } = useCart();
  const price = product.price.main + (product.price.fractional / 100);
  
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p className="price">{formatPrice(price)}</p>
      <button 
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
      >
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default ProductItem;
