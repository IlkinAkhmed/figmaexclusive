import React from 'react'
import './index.scss'

function Contact() {
  return (
    <div id='contact'>
      <p style={{ color: "black",paddingBottom:"50px" }}>Home / <span style={{ color: "gray" }}>Contact</span></p>
      <div className="contactContainer">
        <div className="contactDeatils">
          <div className="call">
            <i className='fa-solid fa-phone'></i>
            <h3>Call To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +994 505798656</p>
          <hr style={{margin:'30px 0'}} />
          <div className="message">
            <i class="fa-regular fa-envelope"></i>
            <h3>Write To Us</h3>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: ilkin656@gmail.com</p>
        </div>
        <div className="contactArea">
          <div className="inputArea">
            <input type="text" placeholder='Your Name*' />
            <input type="email" placeholder='Your Email*' />
            <input type="terxt" placeholder='Your Phone*' />
            <textarea type="text" placeholder='Your message' />
          </div>
          <div className="button">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact