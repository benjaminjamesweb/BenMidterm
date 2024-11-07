import React from 'react'
import ProductsComponent from '../../components/ProductsComponent'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate('/cart')}>View Cart</button>
      </div>
      <div className='header'>
      <h1>Ben's Shop</h1>
    </div>

    <ProductsComponent />

    </div>
  )
}

export default HomePage