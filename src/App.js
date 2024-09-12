
import Cart from './Components/Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Gallery from './Components/Gallery';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Components/About';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashborad';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Wishlist from './Components/Wishlist';
import CreateProduct from './Components/CreateProduct'
import Checkout from './Components/Checkout';
import ViewP from './Components/ViewP';
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleAddToCart = (idCart) => {
    let storedIdss = JSON.parse(localStorage.getItem("idCart"));
        
    if (!Array.isArray(storedIdss)) {
        storedIdss = [];
    }

    if (!storedIdss.includes(idCart)) {
        storedIdss.push(idCart);
        localStorage.setItem("idCart", JSON.stringify(storedIdss));
    }
    setCartCount(cartCount + 1);
   

  };

  const handleAddToWishlist = (id) => {
    let storedIds = JSON.parse(localStorage.getItem("id"));
        
    // If storedIds is not an array, initialize it as an empty array
    if (!Array.isArray(storedIds)) {
        storedIds = [];
    }

    // Add the new product ID to the array if it's not already there
    if (!storedIds.includes(id)) {
        storedIds.push(id);
        localStorage.setItem("id", JSON.stringify(storedIds));
    }
    // localStorage.setItem("id",productId);
    setWishlistCount(wishlistCount + 1);
    // localStorage.setItem("cartCount", cartCount);
  

  };
  return (
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
    <div className="App">
     
      <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
      <Routes>
      <Route path='/' element={
            <>
              <Home />
            </>
          }>
        

          </Route>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/Gallery' element={<Gallery handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist} />} />
        <Route path="/ViewProduct" element={<ViewP/>} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addNew' element={<CreateProduct />} />
        <Route path='/wishlist' element={<Wishlist handleAddToCart={handleAddToCart} />} />







        
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;