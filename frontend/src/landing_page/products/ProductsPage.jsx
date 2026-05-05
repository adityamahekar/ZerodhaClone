import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection imageURL="/media/images/Product/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" link={<a href="#" style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>} slink={<a href="#" style={{ textDecoration: "none" }}>Learn more <i className="fa-solid fa-arrow-right"></i></a>} />
      <RightSection imageURL="/media/images/Product/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" link={<a href="#" style={{ textDecoration: "none" }}>Learn more<i className="fa-solid fa-arrow-right"></i></a>} />
      <LeftSection imageURL="/media/images/Product/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" link={<a href="#" style={{ textDecoration: "none" }}>Coin <i className="fa-solid fa-arrow-right"></i></a>} />
      <RightSection imageURL="/media/images/Product/kite-API.png" productName="Kite-API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="#" link={<a href="#" style={{ textDecoration: "none" }}>Kite Connect <i className="fa-solid fa-arrow-right"></i></a>} />
      <LeftSection imageURL="/media/images/Product/varsity-mobile.png" productName="Varsity Mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />

      <Universe />
    </div>
  )
}

export default ProductsPage
