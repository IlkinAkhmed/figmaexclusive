import React from 'react'
import image from "../../../public/img/radio.png"
import './index.scss'

function Enhance() {
  return (
    <section id='enhance'>
      <div className="enhanceContainer">
        <div className="enhanceTexts">
          <span>Categories</span>
          <h2>Enhance Your Music Experience</h2>
          <div className="anhanceDate">
            <div className="date">
              <p>23</p>
              <p>hours</p>
            </div>
            <div className="date">
              <p>05</p>
              <p>days</p>
            </div>
            <div className="date">
              <p>59</p>
              <p>minutes</p>
            </div>
            <div className="date">
              <p>35</p>
              <p>seconds</p>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className="enhanceImg">
          <div className="imgBg"></div>
          <img src='https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1704067200&Signature=TH37vjPNx17JF~ehOXZ9KYwzlPqtv7HPOhgUr~W3xsOiPZ6dp3GTjw4L2NSimGhY1jZIdNevqu~hnX41QfDsYS99x9zOkS~OmWkmQWY4NhJxiEIwFuLPLP-ZzvkN1P3m-IK7mMTIL2Ou~PfrQuDS664i8rN5rYDuNgQAOH8C0PtHS01K4gbkB7Y9cDt5h9xHTiu8VEoXkEspGZ~ohg65Tf-qQ4VIEc~s3diS2Sts-VE8g2WMDciL80jQNR1JRHoYf6rqbPSVZG7V4~od3TCUG6kQ5tURjmB7tg9IJWxYZ~T3KMStQyV8fKZL0ZGw4pfD9MXBF-6VMJG31ZKNR3GKkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Enhance