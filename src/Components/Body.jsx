import React from 'react';

import Image from '../assets/img.avif'; // Example image path

function Body() {
  return (
    <div className="body-container">
      <div className="body-content">
        <h1>Welcome to ShopEasy</h1>
        <p>Your one-stop shop for all your needs. Explore our wide range of products and enjoy seamless shopping.</p>
        <div className="body-buttons">
          <a href="/products" className="btn">Shop Now</a>
          <a href="/contact" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
      <div className="body-image">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}

export default Body;