import React from 'react';
import type { CartItem as CartItemType } from '../types';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/helpers';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const price = product.price.main + (product.price.fractional / 100);
  const subtotal = price * quantity;
  
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p className="price">{formatPrice(price)}</p>
      </div>
      
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button 
            className="quantity-btn"
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            +
          </button>
        </div>
        
        <p className="subtotal">{formatPrice(subtotal)}</p>
        
        <button 
          className="remove-btn"
          onClick={() => removeFromCart(product.id)}
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default CartItem;
