import React, { useState } from 'react'
import './navbar.css'
import {Link} from "react-router-dom"
import {FaBars} from  "react-icons/fa"
import {ImCross} from  "react-icons/im"




const NavBar = () =>  {
const [mobile, SetMobile] = useState(false)

  return (
    <div className='container'>

   <nav className='navbar'>
    
     
     <Link to= '/'><h3 className='logo'> KRYPTO </h3></Link>

    <ul className= {mobile? "nav-links-mobile" : 'nav-links'} onClick={() => SetMobile(false)}>
      <Link to= 'about'> <li>About</li> </Link>
      <Link to= '/pricing'> <li>Pricing</li> </Link>
      <Link to= '/pricing'> <li>Contact</li> </Link>
      <Link to= '/pricing' className='Nav-buy-nfts'> <li>Buy NFTs</li> </Link>
    </ul>
  
  <button className='mobile-menu-icon' onClick={()=> SetMobile(!mobile)}>
    {mobile? <ImCross/> : <FaBars/> }
  </button>

   
   </nav>

    </div>
  )

}


export default NavBar