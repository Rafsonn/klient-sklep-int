import React from 'react';
import type { CartItem } from '../types';
import { formatPrice } from '../utils/helpers';

interface OrderSummaryItemProps {
  item: CartItem;
}

const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const price = product.price.main + (product.price.fractional / 100);
  const subtotal = price * quantity;
  
  return (
    <div className="order-summary-item">
      <div className="item-details">
        <h3>{product.name}</h3>
        <p className="price">{formatPrice(price)}</p>
      </div>
      
      <div className="item-summary">
        <p className="quantity">Ilość: {quantity}</p>
        <p className="subtotal">Suma: {formatPrice(subtotal)}</p>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
