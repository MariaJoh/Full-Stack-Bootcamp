import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComponent from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';
import LandingPage from './pages/Landing'
import CartPage from './pages/Cart'
import NotFound from './pages/NotFound'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(productId) {
    setCart([...cart, productId])
  }

  function removeFromCart(productId) {
    let updatedCart = cart.filter(p => p != productId)
    setCart(updatedCart)
  }

  return (
    <BrowserRouter>
      <NavbarComponent cart={cart} />
      <SecondaryNav/>
      <Container className='text-center my-5'>
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                cart={cart}
                addToCart={addToCart} 
              />} 
          />
          <Route 
            path="/cart" 
            element={
            <CartPage 
              cart={cart} 
              removeFromCart={removeFromCart}
            />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
