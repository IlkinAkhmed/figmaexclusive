import React, { useState } from "react";
import apple from '../../../public/img/headerimgapple.png'
import iphone from '../../../public/img/headerlogo.png'
import { Link } from 'react-router-dom'
import "./index.scss";

function Header() {
  const [isWomenOpen, setIsWomenOpen] = useState(false);
  const [isMenOpen, setIsMenOpen] = useState(false);
  function openW() {
    setIsWomenOpen(!isWomenOpen);
    setIsMenOpen(false);
  }
  function openM() {
    setIsWomenOpen(false);
    setIsMenOpen(!isMenOpen);
  }
  return (
    <header>
      <div className="header-inner">
        <ul className="accardion">
          <li onClick={openW} className="itemOpener">
            Woman's Fashion{" "}
            <i
              className={`fa-solid ${
                isWomenOpen ? "fa-angle-up" : "fa-angle-right"
              }`}
            ></i>
            <ul className={`accardionItem ${isWomenOpen ? "active" : ""}`}>
              <li>Woman's Fashion1</li>
              <li>Woman's Fashion2</li>
              <li>Woman's Fashion3</li>
            </ul>
          </li>
          <li onClick={openM} className="itemOpener">
            Men's Fashion{" "}
            <i
              className={`fa-solid ${
                isMenOpen ? "fa-angle-up" : "fa-angle-right"
              }`}
            ></i>
            <ul className={`accardionItem ${isMenOpen ? "active" : ""}`}>
              <li>Men's Fashion1</li>
              <li>Men's Fashion2</li>
              <li>Men's Fashion3</li>
            </ul>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <div className="slider">
          <div className="texts">
            <div className="appleLogo">
              <img src={apple} alt="" />
              Iphone 14 series
            </div>
            <h1>Up to 10 % off Voucher</h1>
            <Link  className="shop"><span>Shop Now</span> <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="iphoneImg">
              <img src={iphone} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
