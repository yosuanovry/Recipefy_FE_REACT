import React from "react";
import style from './footer.module.css'

export default function Footer() {
  return (
    <div className={`container-fluid d-flex justify-content-center align-items-center ${style.footContainer}`} >
      <div className="row d-flex flex-column">
        <div className={`col d-flex justify-content-center ${style.footHeaderText}`}>
          Eat, Cook, Repeat
        </div>
        <div className={`col d-flex justify-content-center mb-5 ${style.footDescText}`}>
          Share Your Best Recipe By Uploading Here !
        </div>
        <div className="col d-flex justify-content-center align-items-end">
          <div className="row-sm">
            <div className="col-1 mt-5"></div>
            <div className="col-10" style={{margin:'20px'}}>
              <div className="d-flex align-items-end justify-content-start" style={{color:'#707070'}}>
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
