import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div>
      <div className='post-box'>
        <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="feed-img"/>
      <div className='post-info'>
        <div className='post-profile'>
          <div className='post-img'>
          <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="feed-img"/>

          </div>
          <h3>User?</h3>
        </div>
        <div className='likes'>
        <i class="fas fa-heart"></i>
        <span>73</span>

        <i class="fas fa-comment"></i>
        <span>33</span>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Post