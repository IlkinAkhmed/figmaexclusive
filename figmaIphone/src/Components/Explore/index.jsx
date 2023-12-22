import React from 'react'
import './index.scss'
import image from "../../../public/img/photoaparat.png"
import image2 from "../../../public/img/boots.png"
import { addToBasket } from '../../Slices/basketRedux'
import { useDispatch } from 'react-redux'

function Explore() {
  const dispatch = useDispatch()
  return (
    <section id='explore'>
      <div className="head-of-explore">
        <div className="color"></div>
        <h3>Our Products</h3>
      </div>
      <h2>Explore Our Products</h2>
      <div className="exploreWrapper">
        <div className="exploreCard">
          <div className="exploreImg">
            <i className='fa-solid fa-basket-shopping'></i>
            <i className='fa-solid fa-eye'></i>
            <i className='fa-regular fa-heart'></i>
            <img src={image2} alt="" />
          </div>
          <div className="exploreCardTexts">
            <p>CANON EOS DSLR Camera</p>
            <span className='newPrice'>$674.00</span>
            <span className='oldPrice'>$800.00</span>
            <div className="rating">
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <span>(88)</span>
            </div>
          </div>
        </div>
        <div className="exploreCard">
          <div className="exploreImg">
            <i className='fa-solid fa-basket-shopping'></i>
            <i className='fa-solid fa-eye'></i>
            <i className='fa-regular fa-heart'></i>
            <img src={image} alt="" />
          </div>
          <div className="exploreCardTexts">
            <p>CANON EOS DSLR Camera</p>
            <span className='newPrice'>$674.00</span>
            <span className='oldPrice'>$800.00</span>
            <div className="rating">
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <span>(88)</span>
            </div>
          </div>
        </div>
        <div className="exploreCard">
          <div className="exploreImg">
            <i className='fa-solid fa-basket-shopping'></i>
            <i className='fa-solid fa-eye'></i>
            <i className='fa-regular fa-heart'></i>
            <img src={image2} alt="" />
          </div>
          <div className="exploreCardTexts">
            <p>CANON EOS DSLR Camera</p>
            <span className='newPrice'>$674.00</span>
            <span className='oldPrice'>$800.00</span>
            <div className="rating">
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <span>(88)</span>
            </div>
          </div>
        </div>
        <div className="exploreCard">
          <div className="exploreImg">
            <i className='fa-solid fa-basket-shopping'></i>
            <i className='fa-solid fa-eye'></i>
            <i className='fa-regular fa-heart'></i>
            <img src={image} alt="" />
          </div>
          <div className="exploreCardTexts">
            <p>CANON EOS DSLR Camera</p>
            <span className='newPrice'>$674.00</span>
            <span className='oldPrice'>$800.00</span>
            <div className="rating">
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <span>(88)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Explore