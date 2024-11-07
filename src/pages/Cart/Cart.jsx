import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Cart</h2>
      {
        cartItems.map((product) => (
          <div className='product-card' key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <h4>Price: ${product.price} CAD</h4>
          </div>
        ))
}
<button onClick={() => navigate('/')}>HomePage</button>

    </div>
  );
};

export default Cart;

