import React from 'react'
import { useState, useEffect } from 'react'
import ProductTableComponent from './ProductTableComponent'
import './ProductsComponent.css'

const ProductsComponent = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        getProductsData();
     }, [])

     const getProductsData = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const jsonData = await data.json();
        setApiData(jsonData);
     }


  return (
    <div>
        <h2>All Products</h2>
        <ProductTableComponent className='table' productData={apiData} />
    </div>
  )
}

export default ProductsComponent