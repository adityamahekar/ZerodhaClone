import React from "react";
import marketEdu from "/media/images/marketEdu.png"

function Awards() {
  return (
    <div className="container mb-5" style={{ fontSize: "1.1rem"}}>
      <div className="row">
        <div className="col-6"><img src={marketEdu} style={{width:"65%"}} alt="market Education"></img></div>
        <div className="col-6">
          <h1 className="" style={{ marginBottom:"15px"}}>Free and open market education</h1>
          <p >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <p className="" style={{color: "#387ed1", marginTop:"5px"}}>Varsity <i class="fa-solid fa-arrow-right"></i></p>
          <p >TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <p className="" style={{color: "#387ed1", marginTop:"5px"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
