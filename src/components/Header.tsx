import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <header className="header">
      <div className="container">
        <h1>Sklep Online</h1>
        <nav>
          <Link to="/" className="nav-link">Produkty</Link>
          <Link to="/cart" className="nav-link cart-link">
            Koszyk ({itemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
