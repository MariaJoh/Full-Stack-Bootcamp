import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarComponent from './components/Navbar';
import NewsCarousel from './components/Carousel';
import SecondaryNavbar from './components/SecondaryNavbar';
import NewsCard from './components/NewsCard';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <NewsCarousel />
        <SecondaryNavbar />
        <Routes>
          <Route 
            path="/categories/:category"
            element={<NewsCard />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
