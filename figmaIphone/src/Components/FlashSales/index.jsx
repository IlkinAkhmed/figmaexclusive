import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import './index.scss'
import { addToBasket } from '../../Slices/basketRedux'




function FlashSales() {


  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  function FetchData() {
    fetch('http://localhost:3000/exclusive')
      .then(res => res.json())
      .then(data => setProducts(data))
  }
  useEffect(() => {
    FetchData()
    setIsLoading(!isLoading)
  }, [])


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
      <div className="flashWrapper">
        {!isLoading ? <h1>Loading...</h1> :
          products && products.map(item => (
            <div className="flashCard">
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
            </div>

          ))}
      </div>
    </section>
  )
}

export default FlashSales