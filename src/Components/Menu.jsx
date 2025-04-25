import React from 'react';

function Menu() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">ShopEasy</a>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/products" className="navbar-link">Products</a>
        </li>
        <li className="navbar-item">
          <a href="/cart" className="navbar-link">Cart</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;