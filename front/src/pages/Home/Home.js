import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

import Feed from '../../components/feed/Feed'
import Post from '../../components/post/Post'
import {Link} from "react-router-dom"

const Home = () => {
  return (
   <main>
    <div className='left'>
     <Sidebar />
    </div>
   </main>
  )
}

export default Home