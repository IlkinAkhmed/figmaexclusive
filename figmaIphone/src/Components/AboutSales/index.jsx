import React from 'react'
import group from "../../../public/img/Group.png"
import sale from "../../../public/img/Icon-Sale.png"
import bag from "../../../public/img/Icon-Shopping bag.png"
import torba from "../../../public/img/torba.png"
import "./index.scss"

function Sales() {
  return (
    <section id='sales'>
      <div className="salesCard">
        <div className="img">
          <img src={group} alt="" />
        </div>
        <p>10.5k</p>
        <span>Sallers active our site</span>
      </div>
      <div className="salesCard">
        <div className="imgWhite">
          <img src={sale} alt="" />

        </div>
        <p>10.5k</p>
        <span>salesCard active our site</span>
      </div>
      <div className="salesCard">
        <div className="img">
          <img src={bag} alt="" />
        </div>
        <p>10.5k</p>
        <span>salesCard active our site</span>
      </div>
      <div className="salesCard">
        <div className="img">
          <img src={torba} alt="" />
        </div>
        <p>10.5k</p>
        <span>salesCard active our site</span>
      </div>
    </section>
  )
}

export default Sales