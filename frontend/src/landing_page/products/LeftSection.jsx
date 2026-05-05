import React from 'react'
// import kite from "../../media/images/product/kite.png";

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore,link,slink }) {
    return (
        <div className="container mb-5" style={{ fontSize: "1.1rem" }}>
            <div className="row">
                <div className="col-6 p-3">
                    <img src={imageURL} style={{ width: "65%" }} />
                </div>
                <div className="col-6 p-3">
                    <h1>{productName}</h1>
                    <div style={{width: "550px", fontSize: "24px", color: "#6c757d"}}><p className="text-muted" >{productDescription}</p></div>
                 <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" , justifyContent:"left"}}>
  <a href={tryDemo} style={{ textDecoration: "none" }}> {link} </a>
                    <a href={learnMore} style={{ textDecoration: "none" }}> {slink}</a>
                 </div>
                  
                   
                   
                    <div className="mt-3" style={{ display: "flex", gap: "1rem", textDecoration: "none" }}>
                        <a href={googlePlay}><img src="/media/images/Product/googlePlayBadge.png" alt="Google Play" style={{ height: "40px", borderRadius: "7px" }} /></a>
                        <a href={appStore}><img src="/media/images/Product/appleStoreBadge.png" alt="App Store" style={{ height: "40px", borderRadius: "7px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection
