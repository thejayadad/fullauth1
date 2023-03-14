import React from 'react'
import "./sidebar.css"
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 className='title'>Vent Board</h2>
      <div className='profile'>
        <div className='profile-img'>
          <img alt='profile-pic' src='https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
        <div className='profile-name'>
          <h3 className='name'>Profile Name</h3>
        </div>
        <span>@username</span>
      </div>
      <div className='about'>
        <div className='box'>
          <h3>90</h3>
          <span>likes</span>
        </div>
        <div className='box'>
          <h3>1001</h3>
          <span>followers</span>
        </div>
        <div className='box'>
          <h3>follows</h3>
          <span>1000009</span>
        </div>
      </div>
      <div className='menu'>
        <Link id="link" to="/">
          <span className='icon'>
          <i id='fa' class="fas fa-home"></i>
          </span>
          Home
        </Link>
        <Link id="link" to="/">
          <span className='icon'>
          <i id='fa' class="fas fa-plus-circle"></i>
          </span>
          Create
        </Link>
        <Link id="link" to="/">
          <span className='icon'>
          <i id='fa' class="fas fa-sign-out"></i>
          </span>
          Create
        </Link>
      </div>
    </div>
  )
}

export default Sidebar