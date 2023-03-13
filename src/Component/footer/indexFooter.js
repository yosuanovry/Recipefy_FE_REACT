import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "450px", backgroundColor: "#efc81a", marginTop:'100px' }}>
      <div className="row d-flex flex-column" style={{marginBottom:'-90px'}}>
        <div className="col d-flex justify-content-center h1" style={{ fontSize: "72px", color:'#2E266F'}}>
          Eat, Cook, Repeat
        </div>
        <div className="col d-flex justify-content-center mb-5" style={{ fontSize: "24px" }}>
          Share Your Best Recipe By Uploading Here !
        </div>
        <div className="col d-flex justify-content-center align-items-end">
          <div className="row" style={{}}>
            <div className="col-1 mt-5"></div>
            <div className="col-10" style={{margin:'20px'}}>
              <div className="d-flex align-items-end justify-content-start mt-4" style={{color:'#707070'}}>
                <div className="p-3">Product</div>
                <div className="p-3">Company</div>
                <div className="p-3" style={{maxWidth:'200x'}}>Learn More</div>
                <div className="p-3">Get in Touch</div>
              </div>
            </div>
            <div className="col-1 d-flex justify-content-end"></div>
          </div>
        </div>
        <div className="col d-flex justify-content-center" style={{fontWeight:'bolder'}}>
        © 2023 PijarCamp
        </div>
      </div>
    </div>
  );
}
