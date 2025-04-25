import React from 'react';

function Pro() {
  const products = [
    { id: 1, name: 'Smartphone', price: '$699', description: 'A high-end smartphone with a sleek design.' },
    { id: 2, name: 'Laptop', price: '$999', description: 'A powerful laptop for work and play.' },
    { id: 3, name: 'Camera', price: '$599', description: 'Noise-cancelling headphones for immersive sound.' },
  ];

  return (
    <div className="product-container">
      <h2>Product Details</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pro;

