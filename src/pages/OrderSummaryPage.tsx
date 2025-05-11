import React from 'react';
import { Link } from 'react-router-dom';
import OrderSummaryItem from '../components/OrderSummaryItem';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/helpers';

const OrderSummaryPage: React.FC = () => {
  const { items, getTotalPrice } = useCart();
  
  const handlePlaceOrder = () => {
    // Save order data to localStorage for the confirmation page
    localStorage.setItem('lastOrder', JSON.stringify({
      items,
      totalPrice: getTotalPrice(),
      date: new Date().toISOString()
    }));
    
    // Redirect to the confirmation page (full page load)
    // For GitHub Pages with HashRouter, we need to use the correct path
    const basePath = import.meta.env.BASE_URL || '/';
    window.location.href = `${basePath}confirmation.html`;
  };
  
  // Redirect to products if cart is empty
  if (items.length === 0) {
    return (
      <div className="page order-summary-page">
        <div className="container">
          <h2>Podsumowanie Zamówienia</h2>
          <div className="empty-cart">
            <p>Twój koszyk jest pusty. Nie można złożyć zamówienia.</p>
            <Link to="/" className="btn">Wróć do zakupów</Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page order-summary-page">
      <div className="container">
        <h2>Podsumowanie Zamówienia</h2>
        
        <div className="order-items">
          {items.map(item => (
            <OrderSummaryItem key={item.product.id} item={item} />
          ))}
        </div>
        
        <div className="order-total">
          <h3>Łączna kwota zamówienia: {formatPrice(getTotalPrice())}</h3>
        </div>
        
        <div className="order-actions">
          <Link to="/cart" className="btn secondary">
            Wróć do koszyka
          </Link>
          <button 
            className="btn primary"
            onClick={handlePlaceOrder}
          >
            Złóż Zamówienie
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
