import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/Navbar';
import LandingPage from './pages/Landing';
import CartPage from './pages/Cart';
import NotFound from './pages/NotFound'
import Container from 'react-bootstrap/Container';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Container className='text-center mt-5 mb-3'>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Cart' element={<CartPage/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
