import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
    <div className="home__container">
<img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
    
    <div className="home__row" >
{/* product */}
<Product id = "123321341" title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses+The Everything Store: Jeff Bezos and the Age of Amazon' price={11.96} image= "./images/lean-stp.png" rating={4} />
<Product id = "49538094" title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)' price={13.96} image= "./images/alexa.webp" rating={5} />
{/* product */}
    </div>

    <div className="home__row">
    <Product id = "123324388" title='Apple iPhone 14 Pro Max 128GB Deep Purple' price={199.99} image= "./images/iphone.webp" rating={5} />
    <Product id = "676721341" title='boAt Immortal 121 TWS Wireless Gaming in Ear Earbuds with Beast Mode(40ms Low Latency), 40H Playtime, Blazing LEDs, Quad Mics ENx Signature Sound,(Black Sabre)' price={98.99} image= "./images/boat.webp" rating={4} />
    <Product id = "1245643221" title='Dr Luxur OVERPOWER Series Gaming Chair for Gaming, Home Office and Study- Perfect For Work From Home with Lumbar Support, 2-D Armrest, Footrest and 180 Degree Recline' price={58.99} image= "./images/gaming.jpg" rating={5} />
    </div>

    <div className="home__row">
       <Product id = "12675541341" title='SANSUI 165 cm (65 inches) 4K Ultra HD Smart QLED Google TV JSW65GSQLED (Black)' price={1094.98} image= "./images/led.jpg" rating={4} />
    </div>

    

    </div>
    </div>
  )
}

export default Home