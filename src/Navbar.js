import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="brand">
            <h2>MacBook Pro</h2>
        </div>
        <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar