import React from 'react'
import './index.scss'
import pes5 from "../../../public/img/pes5.png";
import womennew from "../../../public/img/womennew.png";
import speaker from "../../../public/img/speakers.png";
import perfume from "../../../public/img/perfume.png";
import { Link } from 'react-router-dom';

function Arrival() {
  return (
    <section id='arrival'>

      <div className="head-of-arrival">
        <div className="color"></div>
        <h3>Featured</h3>
      </div>
      <h2>New Arrival</h2>
      <div className="arrivalWrapper">
        <div className="arrivalLeft">
          <img src={pes5} className='bgImg' alt="" />
          <div className="playstaiotn">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale</p>
            <Link className='shop'>Shop Now</Link>
          </div>

        </div>
        <div className="arrivalRight">
          <div className="collections">
            <img src={womennew} className='WomenBgImg' alt="" />
            <div className="playstaiotn">
              <h2>Women Collections</h2>
              <p>Featured woman collections that give you another vibe.</p>
              <Link className='shop'>Shop Now</Link>
            </div>
          </div>
          <div className="speakers">
            <img src={speaker} className='speakerBgImg' alt="" />
            <div className="playstaiotn">
              <h2>Speakers</h2>
              <p>Amazon wireless speakers</p>
              <Link className='shop'>Shop Now</Link>
            </div>


          </div>
          <div className="perfume">
            <img src={perfume} className='perfumeBgImg' alt="" />
            <div className="playstaiotn">
              <h2>Perfume</h2>
              <p>GUCCI INTENSE OUD EDP</p>
              <Link className='shop'>Shop Now</Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Arrival