import React from 'react'
import './PricingContent.css'
import img5 from '../../assets_nfts/image 5.png'
import img6 from '../../assets_nfts/image 6.png'
import img7 from '../../assets_nfts/image 7.png'
import img8 from '../../assets_nfts/image 8.png'
import img18 from '../../assets_nfts/Other 18.png'
import Whiteshadow from '../../assets_nfts/Ellipse 1.png'


const PricingContent = () => {
  return (
    <div className='container'>
        <section className='section'>
        {/* <p className='featureON'>Featured on</p>       */}
              <div className='companyLogo'>
                    <img src={img6} alt=""/>
                    <img src={img5} alt=""/>
                    <img src={img7} alt=""/>
                    <img src={img8} alt=""/>
                </div>

        <section className='flex-colume'>

        <div>
        <img src={img18} alt="" />
        </div>

          <div className='analytics__width'>
            <p>ANALYTICS</p>
            <p className='build__in__text'>Built-In Analytics To Track Your Nfts</p>
            <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
            <button  className='view__our__price__btn'>VIEW OUR PRICING</button>
          </div>

        </section>

        </section>

        <img src={Whiteshadow} alt="" className='side__shadow'/>

    </div>
  )
}

export default PricingContent