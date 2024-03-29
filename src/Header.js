import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
const Header = () => {
  const [{cart, user} , dispatch] = useStateValue();
  
  const handleAuthentication =() =>{

     if(user){
      auth.signOut()
     }

  }
  return (
    <div className='header'>
      <Link to="/">
      <img 
    className="header__logo"
    src="https://play-lh.googleusercontent.com/G7jAks-PRl4d7IkL-s3Ir44nGyPq0Yh872N5UMwZYIJz4wG1Oj0DqoQjsAR5ddKZbQ" alt="" />
      </Link>
   
   

   <div className="header__search">
   <input  className="header__searchInput" type="text" /> 
   <SearchIcon className="header__searchIcon" />
    </div>
    
    <div className="header__nav">
      <Link to={!user && '/login'}>
     <div onClick={handleAuthentication} className="header__option">
       <span className='header__optionLineOne'>Hello, {!user ? 'Guest' : user.email}</span>
       <span className='header__optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
     </div>
     </Link>

     <div className="header__option">
      <span className='header__optionLineOne'>Returns</span>
       <span className='header__optionLineTwo'>& Orders</span>
     </div>


     <div className="header__option">
      <span className='header__optionLineOne'>Check</span>
       <span className='header__optionLineTwo'>Prime</span>
    </div>

<Link to="/checkout">
<div className="header__optionBasket">
    <ShoppingCartIcon />
    <span className="header__optionLineTwo header__basketCount">{cart.length}</span>
    </div>
</Link>
    
    </div>
    </div>




  )
}

export default Header