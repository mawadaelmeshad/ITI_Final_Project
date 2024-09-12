import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
// import flash1 from '../images/flash1.png';
import React, { useEffect, useState } from 'react';
import './css-components/gallery.css'
import dataGallery from './data.json'; 
import { Link } from 'react-router-dom';

const Gallery = ({ handleAddToCart, handleAddToWishlist}) => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [isActive, setIsActive] = useState(false);


useEffect(() => {
    if (Array.isArray(dataGallery)) {
        // Set the first 4 items to data1
        const firstFourProducts = dataGallery.slice(0, 4);
        setData(firstFourProducts);

        // Set items from index 12 to 16 to data3
        const limitedProducts = dataGallery.slice(12, 16);
        setData3(limitedProducts);

        const ourProducts = dataGallery.slice(10, 18);
        setData2(ourProducts);
    } else {
        console.error('Unexpected data structure:', dataGallery);
    }
}, []);
function handleShow(index) {
    data.map((item, indexx) => {
        if (indexx === index) {
            localStorage.setItem('selectedProduct', JSON.stringify(item));
            window.location.href='/viewProduct';
        }
        return localStorage.getItem('selectedProduct');
    });
}
function handleShow2(index) {
    data3.map((item, indexx) => {
        if (indexx === index) {
            localStorage.setItem('selectedProduct', JSON.stringify(item));
            window.location.href='/viewProduct';
        }
        return localStorage.getItem('selectedProduct');
    });
}

function handleShow3(index) {
    data2.map((item, indexx) => {
        if (indexx === index) {
            localStorage.setItem('selectedProduct', JSON.stringify(item));
            window.location.href='/viewProduct';
        }
        return localStorage.getItem('selectedProduct');
    });
}

    return(
        <div className='flash-main'>
            <div className='flash'>
                <p className='small-title'>Today's</p>
            <h2 className='title'>Flash Sales</h2>
            <div className='cards'>
            {data.map((item, index) => (
            <div key={index} className='card-container'>
              <MDBCard className='custom-card'>
                <MDBCardImage src={item.image} alt={item.title} className='card-img' />
                <button className= {`add-to-cart ${isActive ? 'active' : ''}`} onClick={()=>handleAddToCart(item.id)}>Add to Cart</button>
                <div className='icons'>
                  <span><MDBIcon far icon="heart" className={`icon-fav ${isActive ? 'active' : ''}`}  onClick={()=>handleAddToWishlist(item.id)}/></span>
                </div>
              
                <span className='percentage'>-40%</span>
    
              </MDBCard>
              <h3 className='flash-title'>{item.title.substring(0,10)}</h3>
                        <span className='price'>{item.price}$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                        <p onClick={() => handleShow(index)} style={{color:"gray" , cursor:'pointer'}}>
                            Read more ...
                        </p>
                        
              
            </div>
        ))}
    
            </div>
            </div>
            <button className='orange-btn'>view all Products</button>
            <hr className='custom-hr'/>

            <div className='flash'>
                <p className='small-title'>Categories</p>
            <h2 className='title'>browse by category</h2>
            <div className='cards'>
                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>Phones</p>
                    </div>
                </div> 

                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="desktop"className='icon-category' />
                    <p>Computers</p>
                    </div>
                </div> 

                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon far icon="clock"  className='icon-category' />
                    <p>SmartWatch</p>
                    </div>
                </div> 


                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="camera" className='icon-category' />
                    <p>Camera</p>
                    </div>
                </div> 

                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="headphones-alt" className='icon-category' />
                    <p>HeadPhones</p>
                    </div>
                </div> 

            </div>
            </div>
            <hr className='custom-hr'/>
            <div className='flash'>
                <p className='small-title'>this month</p>
            <h2 className='title best-title'>best selling Products </h2>
            <div className='cards'>
            {data3.map((item, index) => (
            <div key={index} className='card-container'>
              <MDBCard className='custom-card'>
                <MDBCardImage src={item.image} alt={item.title} className='card-img' />
                <button className= {`add-to-cart ${isActive ? 'active' : ''}`}  onClick={()=>handleAddToCart(item.id)}>Add to Cart</button>
                <div className='icons'>
                  <span><MDBIcon far icon="heart" className={`icon-fav ${isActive ? 'active' : ''}`}  onClick={()=>handleAddToWishlist(item.id)}/></span>
                </div>

              
    
              </MDBCard>
              <h3 className='flash-title'>{item.title.substring(0,10)}</h3>
                        <span className='price'>{item.price}$</span>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                        <p onClick={() => handleShow2(index)} style={{color:"gray" , cursor:'pointer'}}>
                            Read more ...
                        </p>
              
            </div>
        ))}

            </div>
            </div>

           

            <div className='flash'>
                <p className='small-title'>our Products</p>
            <h2 className='title'>explore our Products</h2>
            <div className='cards'>
            {data2.map((item, index) => (
            <div key={index} className='card-container'>
              <MDBCard className='custom-card'>
                <MDBCardImage src={item.image} alt={item.title} className='card-img' />
                <button className= {`add-to-cart ${isActive ? 'active' : ''}`}  onClick={()=>handleAddToCart(item.id)}>Add to Cart</button>
                <div className='icons'>
                  <span><MDBIcon far icon="heart" className={`icon-fav ${isActive ? 'active' : ''}`}  onClick={()=>handleAddToWishlist(item.id)}/></span>
                </div>
             
              
    
              </MDBCard>
              <h3 className='flash-title'>{item.title.substring(0,10)}</h3>
                        <span className='price'>{item.price}$</span>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                        <p onClick={() => handleShow3(index)} style={{color:"gray" , cursor:'pointer'}}>
                            Read more ...
                        </p>
              
              
            </div>
          ))}
            </div>
            </div>
            <button className='orange-btn'>view all Products</button>
            <div className='features'>
                <div className='whole-card'>
                    <div className='icon-container'>
                        <MDBIcon fas icon="truck" className='icon-inside'/>
                    </div>
                    <h2>free and fast delivery</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                
                <div className='whole-card'>
                    <div className='icon-container'>
                        <MDBIcon fas icon="headphones" className='icon-inside'/>
                    </div>
                    <h2>24/7 CUSTOMER SERVICE</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>

                <div className='whole-card'>
                    <div className='icon-container'>
                    <MDBIcon fas icon="shield-alt"c className='icon-inside' />
                    </div>
                    <h2>MONEY BACK GUARANTEE</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                
                
            </div>



    </div>
    )

};
export default Gallery;