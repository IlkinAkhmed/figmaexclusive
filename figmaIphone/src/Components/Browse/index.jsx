import React from 'react'
import "./index.scss"

function Browse() {
  return (
    <section id='browse'>
      <div className="head-of-browse">
        <div className="color"></div>
        <h3>Categories</h3>
      </div>
      <div className="browse-head">
        <h2>Browse by category</h2>
      </div>
      <div className="browseWrapper">
        <i className='fa-solid fa-mobile-screen-button'></i>
        <i className='fa-solid fa-desktop'></i>
        <i className='fa-regular fa-clock'></i>
        <i className='fa-solid fa-camera'></i>
        <i className='fa-solid fa-headphones'></i>
        <i className='fa-solid fa-gamepad'></i>
      </div>
    </section>
  )
}

export default Browse