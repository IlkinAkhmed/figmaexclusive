import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux';

function Basket() {

  const basketArr = useSelector(state => state.basket.value)
  console.log('budu', basketArr);

  return (
    <div className='basket'>
      {basketArr.length === 0 ? <h1>Basket Is Empty</h1> :
        <div className="basketWrapper">
          {basketArr && basketArr.map(item => (
            <div className="basketCard">
              <img src={item.image} alt="" />
              <div className="basketCardTexts">
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
        </div>}
    </div>
  )
}

export default Basket