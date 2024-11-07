import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Checkout = () => {
  const cartItems = useContext(CartContext);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Here are the items in your cart:</p>
      {cartItems.map((product) => (
        <div className='product-card' key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} />
          <h4>Price: ${product.price} CAD</h4>
        </div>
      ))}
      <button onClick={purchaseAllItems()}>Purchase</button>
    </div>
  );
};

export default Checkout;