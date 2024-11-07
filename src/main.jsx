import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/CartContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartContext.Provider>
      <App />
    </CartContext.Provider>
    </BrowserRouter>
  </StrictMode>,
)
