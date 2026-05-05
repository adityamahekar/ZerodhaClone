import React from 'react'

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 ">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none", marginBottom:"26px"}}><h3 className="text-center fs-5" >Brokerage Calculator</h3></a>
          <ul className="fs-6 mb-10 text-start">            
            <li style={{marginBottom:"12px"}}>₹50 extra per executed order when placed via phone through Zerodha support</li>
            <li style={{marginBottom:"12px"}}>₹15.93 flat per scrip per day on equity delivery sells — charged by CDSL, not waivable</li>
            <li style={{marginBottom:"12px"}}>₹50 per position if Zerodha's RMS desk squares off your open intraday position (margin breach or end of day)</li>
            <li style={{marginBottom:"12px"}}>0.025% on sell side for intraday; 0.1% on both sides for delivery — levied by government</li>
            <li style={{marginBottom:"12px"}}>18% on brokerage + exchange transaction charges — applied on every trade</li>
            <li style={{marginBottom:"12px"}}>0.003%–0.015% on buy side only — varies by segment, collected by state government</li>

          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none", marginBottom:"26px"}}><h3 className="text-center fs-5">List of charges</h3></a>
        </div>
      </div>

    </div>
  )
}

export default Brokerage
