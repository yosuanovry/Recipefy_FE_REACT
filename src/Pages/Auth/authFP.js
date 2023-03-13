import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

export default function AuthForgotPassword() {

    const [email, setEmail] = useState('')
    
    console.log(email)
    
  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text1 mt-3" style={{fontWeight:'700', color:'#EFC81A'}}>Recipe...</h2>
            </div>
            <div className="col-lg-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text2 mt-3" style={{fontWeight:'600', color:'#EFC81A'}}>Forgot Password</h2>
            </div>
            <div className="col-lg-12 col-md-6 mt-1 text-center">
              <h2 className="recipe-text3 mt-3" style={{fontSize:'18px', color:'#8692A6'}}>Send OTP to your email !</h2>
            </div>
            <div className="d-flex justify-content-center">
              <form className="col-lg-5 mt-5">
                <div className="mb-3">
                  <label for="" className="form-label">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email address" />
                </div>
                
                <div className="mb-3">
                  <button className="btn btn-warning text-white shadow-none p-3 w-100 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Send OTP</button>
                </div>
                <div className="d-inline-flex">
                    <p className="text-center">Login instead? <Link className='text-warning text-decoration-none'to={'/login'}>Click Here</Link></p>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
