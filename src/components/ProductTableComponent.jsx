import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductTableComponent.css'

const ProductTableComponent = ({ productData }) => {
    const navigate = useNavigate();

    const handleDetailsClick = (productId) => {
        navigate(`/product/${productId}`);
      };

  return (
    <div>
      { 
        productData.map((product) => (
            <div className='product-card' key={product.id}>
            <h3>{product.title}</h3>
            <h5>Category: {product.category}</h5>
            <p>{product.description}</p>
            <img src={product.image} />
            <h4>Price: ${product.price} CAD</h4>
            <p>Rated {product.rating.rate} by {product.rating.count} customers</p>
            <button onClick={() => handleDetailsClick(product.id)}>See details</button>
            </div>
      ))
      }
    </div>
  );
};

export default ProductTableComponent;

