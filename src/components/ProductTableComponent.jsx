import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductTableComponent.css'
import CartContext from '../context/CartContext'
import {useContext, useState} from 'react'

const ProductTableComponent = ({ productData }) => {
    const navigate = useNavigate();

    const { cartItems, setCartItems } = useContext(CartContext);

    const getDetails = (productId) => {
        navigate(`/product/${productId}`);
    }

    const addToCart = (productId) => {
        const product = productData.find(item => item.id === productId);
    
        if (product) {
            setCartItems([...cartItems, product]);
        }

        alert("Product sucessfully added to cart!")
    };
    
        
  return (
    <div>
        <div className='grid'>
      { 
        productData.map((product) => (
            <div className='product-card' key={product.id}>
            <h3>{product.title}</h3>
            <h5>Category: {product.category}</h5>
            <img src={product.image} />
            <h4>Price: ${product.price} CAD</h4>
            <div className='buttons'>
            <p>Rated {product.rating.rate} by {product.rating.count} customers</p>
            <button onClick={() => getDetails(product.id)}>See details</button>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
            </div>
      ))

      }
            </div>
    </div>
  );
};

export default ProductTableComponent


