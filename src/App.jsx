import { useRoutes } from 'react-router-dom'
import './App.css'

function App() {


  let element = useRoutes(
    [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product/:product',
        element: <ProductDetailsPage />
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

  return element;
}

export default App
