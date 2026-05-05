import React from 'react'

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center text-muted">

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</p>
        </div>

        <p className="" style={{ fontSize: "30px" }}>The Zerodha Universe</p>
        <p style={{marginBottom:"100px"}}>Extend your trading and investment experience even further with our partner platforms</p>





        <div className="col-4 p-3" style={{marginLeft:"85px", fontSize: "14px", width: "380px"}}>
          <img src="../public/media/images/Product/zerodhafundhouse.png" alt="zerodhafundhouse" style={{ height: "40px", width: "170px" }} />
          <p style={{ marginTop: "20px" }}>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>


        <div className="col-4 p-3" style={{ fontSize: "14px", width: "380px"}}>
          <img src="../public/media/images/Product/sensibull.png" alt="sensibull" style={{ height: "40px", width: "250px" }} />
          <p style={{ marginTop: "20px" }}>Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>



        <div className="col-4 p-3" style={{fontSize: "14px", width: "380px"}}>
          <img src="../public/media/images/Product/tijori.png" alt="tijori" style={{ height: "35px", width: "120px" }} />
          <p style={{ marginTop: "20px" }}>Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>


        <div className="col-4 p-3" style={{marginLeft:"85px", fontSize: "14px", width: "380px" }}>
          <img src="../public/media/images/Product/streak-logo.png" alt="streak" style={{ height: "40px", width: "180px" }} />
          <p style={{ marginTop: "20px" }}>Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>


        <div className="col-4 p-3" style={{fontSize: "14px", width: "380px" }}>
          <img src="../public/media/images/Product/smallcase-logo.png" alt="smallcase" style={{ height: "40px", width: "200px" }} />
          <p style={{ marginTop: "20px" }}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>


        <div className="col-4 p-3" style={{fontSize: "14px", width: "380px" }}>
          <img src="../public/media/images/Product/ditto-logo.png" alt="ditto" style={{ height: "30px", width: "100px" }} />
          <p style={{ marginTop: "20px" }}>Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

        <button className="p-3 btn btn-primary fs-5" style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>

      </div>

    </div>
  )
}

export default Universe
