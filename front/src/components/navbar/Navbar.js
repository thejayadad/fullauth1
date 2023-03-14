import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav className='nav-wrapper' >
          <h2>Vent Board</h2>
          <div className='nav-links'>
          <i class="fas fa-home"></i>
          <i class="fas fa-user-circle"></i>
          </div>
        </nav>
    </header>
  )
}

export default Navbar