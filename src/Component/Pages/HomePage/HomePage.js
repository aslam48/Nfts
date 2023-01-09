import React from 'react'
import './homePage.css'
import PurpleShadow from '../../../assets_nfts/Ellipse 9.png'
import  computerImg from '../../../assets_nfts/Other 07.png'
import  img1 from '../../../assets_nfts/image 5.png'
import  img2 from '../../../assets_nfts/image 6.png'
import  img3 from '../../../assets_nfts/image 7.png'
import  img4 from '../../../assets_nfts/image 8.png'
import  Order18 from '../../../assets_nfts/Other 18.png'
import  Order17 from '../../../assets_nfts/Other 17.png'
import  Esc9 from '../../../assets_nfts/Ellipse 9.png'
// import  Esc15 from '../../../assets_nfts/Ellipse 15.png'
import  Woman from '../../../assets_nfts/Mask group/woman.png'
import  Woman2 from '../../../assets_nfts/Mask group/Screen Shot 2022-05-09 at 10.28.png'
import  Man from '../../../assets_nfts/Mask group/man.png'
import  Rating1 from '../../../assets_nfts/Mask group/Rating.png'
import  Rating2 from '../../../assets_nfts/Mask group/Rating (1).png'
import  Rating3 from '../../../assets_nfts/Mask group/Rating (2).png'


const HomePage = () => {
  return (
    <div className='container'>
        <img src={PurpleShadow} alt="" className='PurpleShadow'/>

        <section className='flex-item-container'>
            <div className='textwidth-box'>
                <p className='discover'>discover and collect rare NFTs</p>
                <p className='small-text'>The most secure marketplace for buying and selling unique crypto assets.</p>

                <div className='flex-btn'>
                    <button className='buy__btn'>BUY NFTS</button>
                    <button className='sell__btn'>SELL NFTS</button>
                </div>
            </div>


            <div>
        <img src={computerImg} alt="" className='computer-img'/>
            </div>
        </section>



{/* secton 2 */}

        <section className='company-logo'>
        <div className='companyLogo-box'>
        <img src={img2} alt="" className='q'/>
        <img src={img1} alt="" className='q'/>
        <img src={img3} alt="" className='q'/>
        <img src={img4} alt="" className='q'/>
        </div>
        </section>


        <img src={Esc9} alt="" className='shadow-position'/>



{/* section 3 */}

<section className='flex-section'>
    <div>
    <img src={Order18} alt="" className=''/>
    </div>

    <div className='width-box'>
   <p className='small-text'>ANALYTICS</p>
   <p className='discover'>Built-In Analytics To Track Your Nfts</p>

   <button className='buy__btn'>VIEW OUR PRICING</button>
    </div>
</section>



{/* section 4 */}

<section className='flex-section'>

    <div className='width-box'>
   <p className='small-text'>ANALYTICS</p>
   <p className='discover'>Built-In Analytics To Track Your Nfts</p>
   <p className='small-text'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time..</p>

   <button className='buy__btn'>VIEW OUR PRICING</button>
    </div>

    <div>
    <img src={Order17} alt="" className=''/>
    </div>
</section>



{/* section 5 */}

<section className='testimonial-top'>
<div className='center-width-container'>
<p className='small-text'>TESTIMONIAL</p>
   <p className='discover'>Read What  others Have To Say</p>
</div> 
</section>


{/* section testimonial */}



<div className='flex-testimonia'>
<section>
<div className='container-testimonial'>
    <div>
    <img src={Woman} alt="" className='woman_img'/>
    </div>

    <div className='box'>
   <p className='small-text-testimonial'>I am bueaitful as a queen. Love the apps that behaves like me all the time</p>
   <img src={Rating1} alt="" className='rate'/>
    </div>

</div>
</section>

<section>
<div className='container-testimonial'>
    <div>
    <img src={Man} alt="" className='woman_img'/>
    </div>

    <div className='box'>
   <p className='small-text-testimonial'>I am bueaitful as a queen. Love the apps that behaves like me all the time</p>
   <img src={Rating2} alt="" className='rate'/>
    </div>

</div>
</section>

<section>
<div className='container-testimonial'>
    <div>
    <img src={Woman2} alt="" className='woman_img'/>
    </div>

    <div className='box'>
   <p className='small-text-testimonial'>I am bueaitful as a queen. Love the apps that behaves like me all the time</p>
   <img src={Rating3} alt="" className='rate'/>
    </div>
</div>
</section>
</div>




    </div>
  )
}

export default HomePage