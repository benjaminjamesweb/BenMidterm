import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailsComponent from './ProductDetailsComponent';
import './ProductDetails.css'

const ProductDetails = () => {
  const { product } = useParams();
  const [productData, setProductData] = useState(null);


  useEffect(() => {
    getProductInfo();
  }, [product]);

  const getProductInfo = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${product}`);
      const jsonData = await response.json();
      setProductData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='div'>
      <h1>Product Details</h1>
      <ProductDetailsComponent data={productData} />
    </div>
  );
};

export default ProductDetails;
