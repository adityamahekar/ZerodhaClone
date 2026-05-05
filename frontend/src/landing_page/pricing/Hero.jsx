import React from 'react'

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5 border-bottom" style={{ textAlign: "center" }}>
                <h1>Pricing</h1>
                <h3 className="text-muted">Free equity investments and flat ₹20 trading and F&O trades</h3>
            </div>


            <div className="row p-5 mt-5 " style={{ textAlign: "center" ,fontSize:'28px'}}>

                <div className="col-4 p-5">
                    <img src="../public/media/images/Rs0.png" alt="" height="200px" width="250px" />
                    <h1 style={{ textAlign: "center" ,fontSize:'28px', marginBottom:"25px"}}>Free equity delivery</h1>
                    <p style={{ textAlign: "center" ,fontSize:'16px'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
           



            <div className="col-4 p-5">
                <img src="../../public/media/images/Rs20.png" alt="" height="190px" width="300px" />
                <h1 style={{ textAlign: "center" ,fontSize:'28px', marginBottom:"25px"}}>Intraday and F&O trades</h1>
                <p style={{ textAlign: "center" ,fontSize:'16px'}}>Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>


            <div className="col-4 p-5">
                <img src="../public/media/images/Rs0.png" alt="" height="200px" width="250px" />
                <h1 style={{ textAlign: "center" ,fontSize:'28px', marginBottom:"25px"}}>Free direct MF</h1>
                <p style={{ textAlign: "center" ,fontSize:'16px'}}>All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</p>
            </div>


            </div>
        </div>
    )
}

export default Hero
