
import './css-components/home.css'
import { Link } from 'react-router-dom';
function Home () {
    return(
      
<div className="home" id="home">
  <div className="overlay"> </div>
  <div className="home-content">
    <h1 className="tittle">Your best shopping experience</h1>
    <p className="home-desc">
      {" "}
      morbi mattis felisat nunc. duis viverra dima non justo. in nisl. nullam
      sit amet mango in mango gravida vehicula. mauris tincidunt sem sed arcu.
      num posuere
    </p>
    <Link to='/Gallery' className='link'> <button className=" btn btn-start hover-opacity ">SHOP NOW</button></Link>
    <Link to='/signup' className='link'> <button className=" btn btn-learn hover-opacity "> FIND MORE</button></Link>
    {/* end home section */}
  </div>
</div>

    )
}
export default Home;