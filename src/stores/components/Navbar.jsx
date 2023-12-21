import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div className="navSection">
        <div className="title">
          <h>E-Mart</h>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
        <Link to="/signin">Sign In</Link>
          <Link to="/cart">
            <div className="cart">Cart</div>
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
   <div className="subMenu">
        <ul>
          <Link to='/Mobile'>
          <li>Mobiles</li>
          </Link>

        <Link to='/Computers'>
        <li>Computers</li>
        </Link>

  
        <Link to='/Men'>
        <li>Men Fashion</li>
         </Link>

        <Link to='/Woman'>
        <li>Woman Dressing</li>
         </Link>

        <Link to='/furniture'>
        <li>Furniture</li>
        </Link>

        <Link to="/Ac" className="custom-link">
        <li>Ac</li>
        </Link>

        <Link to='/Kitchen'>
        <li>Kitchen</li>
        </Link>

        <Link to='/Fridge'>
        <li>Fridge</li>
        </Link>


        <Link to='/Watch'>
        <li>Watch</li>
        </Link>

        <Link to='/TV'>
        <li>TV's</li>
        </Link>

        </ul>
      </div>
   
   </>
   
  )
}

export default Navbar