import React from 'react'
import './section.css'
import DestopPic from '../../assets_nfts/Other 07.png'

const Section = () => {
  return (
    <div className='container'>
        <section className='flex__text__pic'>
            <div className='discover__width'>
                <p className='discover'>Discover And Collect Rare NFTs</p>
                <p>The most secure marketplace for buying and selling unique crypto assets.</p>

                <div className='flex__btn'>
                    <button className='Btn__buy'>Buy NFTs</button>
                    <button className='Btn__sell'>Sell NFTs</button>
                </div>
              </div>

              <div>
                <img src={DestopPic} alt="PC"/>
              </div>

        </section>
    </div>
  )
}

export default Section