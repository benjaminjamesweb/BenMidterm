import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();


  const purchase = () => {
    setCartItems([]); 
    navigate('/');
    alert("All items sucessfully purchased!")
  };

  return (
    <div>
      <h2>Checkout</h2>
      {
        cartItems.map((product) => (
          <div className='product-card' key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <h4>Price: ${product.price} CAD</h4>
          </div>
        ))
}
<div className='buttons-div'>
<button onClick={purchase}>Purchase All Items</button>
<button onClick={() => navigate('/')}>HomePage</button>
</div>

    </div>
  );
};

export default Checkout;