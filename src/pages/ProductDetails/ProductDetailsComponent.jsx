import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailsComponent = ({ data }) => {
const navigate = useNavigate();

  return (
    <div className='product-card'>
      <h3>{data.title}</h3>
      <h5>Category: {data.category}</h5>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} />
      <h4>Price: ${data.price} CAD</h4>
      <p>Rated {data.rating?.rate} by {data.rating?.count} customers</p>
      <button onClick={() => navigate('/')}>HomePage</button>
    </div>
  );
};

export default ProductDetailsComponent;
