import React, { useEffect, useRef, useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import './css-components/nav.css';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



const Nav = ({ cartCount , wishlistCount}) => {
    const [openNavColor, setOpenNavColor] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const checkLoginStatus = () => {
      // Check if user is logged in based on the presence of token in local storage
      if (window.localStorage.getItem('token')) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };


  
  
    const handleLogout = () => {
  
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        window.location.href = '/login';
      };
      
    

    useEffect(() => {
      checkLoginStatus();
    }, [isLoggedIn]);

    const [isActive, setIsActive] = useState(false);
   

    const handleClick = () => {
      setIsActive(!isActive);
    };
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };


return (
  <>
    <MDBNavbar expand='xl' id='my-nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' id='logo' className='mb-2'>Exclusive</MDBNavbarBrand>
        <MDBNavbarToggler
        className="navbar-toggler"
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavColor(!openNavColor)}
        >
          <MDBIcon icon='bars' fas className='toggeler-icon' />
        </MDBNavbarToggler>
        <MDBCollapse open={openNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem  className='mx-4 mb-2'>
              <Link aria-current='page' to='/'  className={`item ${activeItem === 'home' ? 'active' : ''}`}
                onClick={() => handleItemClick('home')} >
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='mx-4 mb-2'>
              <Link to='/Gallery' className={`item ${activeItem === 'gallery' ? 'active' : ''}`}
                onClick={() => handleItemClick('gallery')} >Gallery</Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='mx-4 mb-2'>
              <Link to='/contact' className={`item ${activeItem === 'contact' ? 'active' : ''}`}
                onClick={() => handleItemClick('contact')} >Contact</Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='mx-4 mb-2'>
              <Link to='/about'  className={`item ${activeItem === 'about' ? 'active' : ''}`}
                onClick={() => handleItemClick('about')} style={{marginRight:'2rem'}}>About</Link>
            </MDBNavbarItem>

            <MDBNavbarItem className='ml-8 mb-2'>
              {localStorage.getItem('username')==='admin'?
              (
                <Link to='/dashboard'  className={`item ${activeItem === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleItemClick('signup')} >Dashboard</Link>

              ):
              (

                <Link to='/signup'  className={`item ${activeItem === 'signup' ? 'active' : ''}`}
                onClick={() => handleItemClick('signup')} >Register</Link>
              )
              
            }
              
            </MDBNavbarItem >
            
            <form className='d-flex input-group w-auto form-search mb-2'>
              <input type='search' className='form-control' placeholder='What are you looking for?' aria-label='Search' id='search-input' />
            </form>
            <MDBNavbarItem className='icons mb-2'>
                <Link to='/wishlist' className='icon-link'><MDBIcon far icon="heart" className="heart-icon" current-count={wishlistCount}  /></Link>
                
                <Link to='/cart' className='icon-link'> <MDBIcon fas icon="shopping-cart" className='heart-icon'  current-count={cartCount} /></Link>
                
                
                {isLoggedIn ? (
                  <div className='user-icon'>
                    <MDBIcon far icon="user"
                    className={`user-icon ${isActive ? 'active' : ''}`} 
                    onClick={handleClick}/>
                    <div className={`menu-user ${isActive ? 'active' : ''}`}>

                        <div className='line'>
                          <MDBIcon fas icon="shopping-bag" className='icon-line' />
                          <Link to='/cart' className='link-list'><span >My Order</span></Link> 
                        </div>

                        <div className='line'>
                          <MDBIcon fas icon="sign-out-alt" className='icon-line' />
                          <span onClick={handleLogout}>Logout</span>
                        </div>

                    </div>
        </div>
      ) : null }
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  </>
);

}
export default Nav;