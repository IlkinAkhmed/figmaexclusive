import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Basket() {

  const basketArr = useSelector(state => state.basket.value)
  const navigate = useNavigate()

  return (
    <section className='basket'>
      <p style={{ color: "black", paddingBottom: "50px" }}>Home / <span style={{ color: "gray" }}>Cart</span></p>

      {basketArr.length === 0 ? <h1>Basket Is Empty</h1> :
        <div className="basketContainer">
          <div className="productDetails">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Qunatity</h3>
            <h3>Total</h3>
          </div>
          <hr style={{ marginTop: "20px" }} />
          {basketArr && basketArr.map(item => (
            <div className="basketProduct">
              <div className="imgAndName">
                <i className='fa-solid fa-xmark'></i>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
              <div className='newPrice'><p>${item.newPrice}.00</p></div>
              <div className="quantity">
                <p>4</p>
                <div className="arrows">
                  <i class="fa-solid fa-chevron-up"></i>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className='total'><p>${item.newPrice}.00</p></div>
            </div>
          ))}
          <div className="update">
            <button onClick={()=>navigate('/')}>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className="coupon">
            <div className="input">
              <input type="text" placeholder='Coupon Code' />
              <button>Apply Button</button>
            </div>
            <div className="cartTotal">
              <h3>Cart Total</h3>
              <div className='subtotal'><p>Subtotal:</p> <p>$230.99</p></div>
              <div className='subtotal'><p>Shipping:</p> <p>Free</p></div>
              <div className='subtotal'><p>Total:</p> <p>$230.99</p></div>
              <button>Process to Checkout</button>
            </div>
          </div>
        </div>
      }

    </section >
  )
}

export default Basket