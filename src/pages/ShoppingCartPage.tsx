import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/helpers';

const ShoppingCartPage: React.FC = () => {
  const { items, getTotalPrice } = useCart();
  
  return (
    <div className="page shopping-cart-page">
      <div className="container">
        <h2>Koszyk</h2>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Twój koszyk jest pusty.</p>
            <Link to="/" className="btn">Wróć do zakupów</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="cart-summary">
              <p className="total">Suma: {formatPrice(getTotalPrice())}</p>
              
              <div className="cart-actions">
                <Link to="/" className="btn secondary">
                  Kontynuuj zakupy
                </Link>
                <Link to="/order-summary" className="btn primary">
                  Przejdź do podsumowania
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
