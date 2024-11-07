import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {

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

  return element

}

export default App;
