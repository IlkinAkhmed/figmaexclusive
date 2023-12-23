import React from 'react'
import "./index.scss"
import service from "../../../public/img/services.png";
import headphone from "../../../public/img/headphone.png";
import money from "../../../public/img/money.png";

function Delivery() {
  return (
    <section id='delivery'>
      <div className="deliveryContainer">
        <div className="deliveryCard">
          <img src={service} alt="" />
          <h3>FREE AND FAST DELIVER</h3>
          <p>Free delivery for all orders over $140.00</p>
        </div>
        <div className="deliveryCard">
          <img src={headphone} alt="" />
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="deliveryCard">
          <img src={money} alt="" />
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </section>
  )
}

export default Delivery