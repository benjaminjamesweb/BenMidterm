import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { productID } = useParams();
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    getProductInfo();
 }, [])

 const getProductInfo = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productID}`);
    const jsonData = await data.json();
    setProductData(jsonData);
 }

 console.log(productData)

  return (
      <div>

          <div className='product-card' key={productData.id}>
              <h3>{productData.title}</h3>
              <h5>Category: {productData.category}</h5>
              <p>{productData.description}</p>
              <img src={productData.image} />
              <h4>Price: ${productData.price} CAD</h4>
              <p>Rated {productData.rating.rate} by {productData.rating.count} customers</p>
            </div>

            <button onClick={() => {
                navigate('/')
            }}>BACK </button>
      </div>
  )
}

export default ProductDetails
