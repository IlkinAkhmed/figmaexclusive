import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './index.scss'
import { addToBasket } from '../../Slices/basketRedux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import useFetch from '../../hooks/usefetch'




function FlashSales() {
  const { products, isLoading } = useFetch('exclusive')


  const dispatch = useDispatch()



  return (
    <section id='flash-sales'>
      <div className="head-of-sale">
        <div className="color"></div>
        <h3>Today's</h3>
      </div>
      <div className="date">
        <h2>Flash Sales</h2>
        <div className="dateWrapper">
          <div className="days">
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
          <div className="time">
            <p>03</p>
            <span>:</span>
            <p>23</p>
            <span>:</span>
            <p>19</p>
            <span>:</span>
            <p>56</p>
          </div>
        </div>
      </div>
      <swiper-container class="mySwiper" space-between={30}
      >
        {!isLoading ? <h1>Loading...</h1> :
          products && products.map(item => (
            <swiper-slide key={item.id}>
              <div className="flashImg">
                <i onClick={() => dispatch(addToBasket({ ...item, count: 1, }))} className='fa-solid fa-basket-shopping'></i>
                <i className='fa-solid fa-eye'></i>
                <i className='fa-regular fa-heart'></i>
                <img src={item.image} alt="" />
              </div>
              <div className="flashCardTexts">
                <p>{item.name}</p>
                <span className='newPrice'>${item.newPrice}.00</span>
                <span className='oldPrice'>${item.oldPrice}.00</span>
                <div className="rating">
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <span>(88)</span>
                </div>
              </div>
            </swiper-slide>
          ))}
      </swiper-container>

      <button style={{ borderRadius: "8px", border: "none", padding: "10px 25px", fontWeight: "bold", background: "var(--adding-color)", color: "white" }}>VIEW ALL PRODUCTS</button>

    </section>
  )
}

export default FlashSales