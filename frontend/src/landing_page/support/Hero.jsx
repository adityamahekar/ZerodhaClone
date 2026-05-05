import React from 'react'
import "../index.css"

function Hero() {
  return (
    <section className="container-fluid" style={{}} id="supportHero">
      <div clasName="p-6 mt-4 mb-1 " id="supportWrapper">
        <h3 className="fs-4 p-3" > Support Portal</h3>
        <a href="" className="p-3"  style={{ color: 'white' }}>Track Tickets</a>
      </div>

      <div className="row p-5 mt-1 mb-1"  style={{marginLeft: "120px"}}>
        <div className="col p-5 mt-1 mb-1">
          <h1 className="fs-2" >Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" className="form-control p-3 mt-4 mb-4" placeholder="Eg: how do i activate F&O, why is my order getting rejected" aria-label="Search" aria-describedby="button-addon2"></input>

          <a href=""  style={{color:"white", marginTop:"5px"}}> <span className="">  Track account opening </span> <span className="ms-3"> Track segment activation</span> <span className="ms-3"> Intraday marginsKite user manual Track Tickets</span></a>
        
        </div>


         <div className="col p-5 mt-1 mb-1">
                  <h1 className="fs-2" >Featured</h1>
                  <ol>
                    <li><a href="" style={{color:"white", marginTop:"5px"}}>Current Takeovers and Delisting - January 2026 </a></li>
                    <li><a href="" style={{color:"white", marginTop:"5px"}}>Latest Intraday leverages - MIS & CO</a></li>
                  </ol>

      </div>
      </div>




    </section>
  )
}

export default Hero
