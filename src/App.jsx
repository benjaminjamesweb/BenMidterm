import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import {useState} from 'react'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import CartContext from './context/CartContext'

function App() {

  const [cartItems, setCartItems] = useState([]);

  let element = useRoutes(
    [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product/:product',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  )

  return (
    <div>
      <CartContext.Provider value = {
      {cartItems, setCartItems}
    }>
      {element}
      </CartContext.Provider>
    </div>
  )
}

export default App
