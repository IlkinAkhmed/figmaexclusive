import React from 'react'
import "./index.scss"
import womens from "../../../public/img/aboutWomens.png"

function Story() {
    return (
        <section id='story'>
            <p style={{width:"200px",color:"gray"}}><span style={{color:"black"}}>Home</span> / About</p>
            <div className="storyTexts">
                <h1>Our Story</h1>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className="storyImg">
                <img src={womens} alt="" />
            </div>
        </section>
    )
}

export default Story