import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='fullNav'>
        <div className='navBar'>
            <div>
                <Link to='/main' style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ paddingLeft: '10px', margin:'auto' }}>
                    PUMP UP
                </h3>
                </Link>

            </div>
            <div className='navbarHamburger'>
                <Link to='user-profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button className='profileBtn'>Profile</button>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button className='logoutBtn'>Logout</button>
                </Link>

            </div>

        </div>
    </div>
  )
}

export default Navbar