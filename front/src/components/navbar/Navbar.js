import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <h3>Vent Spot</h3>
        <div className='nav-center'>
          <h2>Whats on Your Mind?</h2>
        </div>
        <div className='nav-right'>
          <button>Login</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar