import React from 'react'
import staff1 from "../../../public/img/staff1.png"
import staff2 from "../../../public/img/staff2.png"
import staff3 from "../../../public/img/staff3.png"
import "./index.scss"

function Staff() {
  return (
    <section id='staff'>
      <div className="staffWrapper">
        <div className="staffCard">
          <div className="img">
            <img src={staff1} alt="" />
          </div>
          <div className="staffTexts">
            <h2>Tom Cruise</h2>
            <p>Founder & Chairman</p>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-linkedin'></i>
          </div>
        </div>
        <div className="staffCard">
          <div className="img">
            <img src={staff2} alt="" />
          </div>
          <div className="staffTexts">
            <h2>Emma Watson</h2>
            <p>managing Dircector</p>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-linkedin'></i>
          </div>
        </div>
        <div className="staffCard">
          <div className="img">
            <img src={staff3} alt="" />
          </div>
          <div className="staffTexts">
            <h2>Will Smith</h2>
            <p>Peoduct Designer</p>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-linkedin'></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Staff