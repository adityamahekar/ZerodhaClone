import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
// import Education from "./Education";
import OpenAccount from "../OpenAccount";
import NavBar from "../NavBar";
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <> 
        {/* <NavBar /> */}
        <Hero />
        <Stats />
        <Pricing />
        <Awards />       
        <OpenAccount />
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default HomePage;
