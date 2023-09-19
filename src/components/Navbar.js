import React, { useState } from 'react'
import logo from '../assets/blue-car-logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

  const [openLinks,setOpenLinks ]=useState(false);

  const toggleNavbar=() => {
    setOpenLinks(!openLinks)

  }
  return (
    <div className="navbar">
    <div className="leftSide" id={openLinks ? 'open' :'close'}>
      <img src={logo} alt="" height="100px"width="100px"/>
      <div className="hiddenLinks">
      <Link to='/'>Home</Link>
      <Link to='/Menu'> Menu</Link>
      <Link to='/About'> About</Link>
      <Link to='/contact'> Contact</Link>
      </div>
    </div>

    <div className="rightSide">
      <Link to='/'>Home</Link>
      <Link to='/Menu'> Menu</Link>
      <Link to='/About'> About</Link>
      <Link to='/contact'> Contact</Link>
      <button onClick={toggleNavbar}>
        <ReorderIcon/>
      </button>
      </div>
    
    </div>
  )
}

export default Navbar
