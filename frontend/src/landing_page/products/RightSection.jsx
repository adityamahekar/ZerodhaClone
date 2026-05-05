import React from 'react'

function RightSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore,link }) {
    return (
        <div className="container mb-5" style={{ fontSize: "1.1rem" }}>
            <div className="row">
               
                <div className="col-6 p-3">
                    <h1>{productName}</h1>
                     <div style={{width: "550px", fontSize: "24px",  color: "#6c757d"}}><p className="text-muted">{productDescription}</p></div>
                 <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" , justifyContent:"left"}}>
                    <a href={learnMore} style={{ textDecoration: "none" }}> {link}</a>
                 </div>
                  
            
                   
                   
                </div>

                 <div className="col-6 p-3">
                    <img src={imageURL} style={{ width: "65%" }} />
                </div>
            </div>
        </div>
  )
}

export default RightSection
