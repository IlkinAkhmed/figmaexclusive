import React from 'react'
import image from "../../../public/img/radio.png"
import './index.scss'

function Enhance() {
  return (
    <section id='enhance'>
      <div className="enhanceContainer">
        <div className="enhanceTexts">
          <span>Categories</span>
          <h2>Enhance Your Music Experience</h2>
          <div className="anhanceDate">
            <div className="date">
              <p>23</p>
              <p>hours</p>
            </div>
            <div className="date">
              <p>05</p>
              <p>days</p>
            </div>
            <div className="date">
              <p>59</p>
              <p>minutes</p>
            </div>
            <div className="date">
              <p>35</p>
              <p>seconds</p>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className="enhanceImg">
          <div className="imgBg"></div>
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Enhance