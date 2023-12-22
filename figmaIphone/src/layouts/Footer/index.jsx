import React from 'react'
import './index.scss'
import qrcode from "../../../public/img/qrcode.png"
import playMarket from "../../../public/img/playMarket.png"
import apple from "../../../public/img/apple.png"
import c from "../../../public/img/c.png"

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="exclusive">
          <h2>Exclusive</h2>
          <h4>Subscribe</h4>
          <div className="inputArea">
            <input type="email" placeholder='Enter your Email' />
            <i  style={{cursor:"pointer"}}  className='fa-regular fa-paper-plane'></i>
          </div>
        </div>
        <div className="support">
          <h2>Support</h2>
          <ul>
            <li>111 Bijoy sarani, Dhaka,  DH 1515, Biladjari.</li>
            <li>ilkin656.u@gmail.com</li>
            <li>+994 505798656</li>
          </ul>
        </div>
        <div className="account">
          <h2>Accout</h2>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="quick">
          <h2>Quick Link</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="download">
          <p>Save $3 with App New User Only</p>
          <div className="qrcode">
            <img src={qrcode} alt="" />
            <div className="play">
              <img src={playMarket} alt="" /><br />
              <img src={apple} alt="" />
            </div>
          </div>
          <a href="https://www.instagram.com/ilkin_akhmed"><i  className='fa-brands fa-instagram'></i></a>
          <i className='fa-brands fa-twitter'></i>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-linkedin'></i>
        </div>
      </div>
      <div className="bottomLine">
        <img src={c} alt="" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer