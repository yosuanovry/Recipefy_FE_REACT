import React from 'react';
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../Storages/Actions/authLogin'

export default function AuthLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  console.log(email)
  console.log(password)

  
  const Login = (e) => {
    e.preventDefault()
        console.log(email)
        console.log(password)
        let data = {
            email, password
        }
        dispatch(loginUser(data,navigate))
  
  }

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text1 mt-3" style={{fontWeight:'700', color:'#EFC81A'}}>Recipe...</h2>
            </div>
            <div className="col-lg-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text2 mt-3" style={{fontWeight:'600', color:'#EFC81A'}}>Welcome ... !</h2>
            </div>
            <div className="col-lg-12 col-md-6 mt-1 text-center">
              <h2 className="recipe-text3 mt-3" style={{fontSize:'18px', color:'#8692A6'}}>Login to your existing account</h2>
            </div>
            <div className="d-flex justify-content-center">
              <form className="col-lg-5 mt-5" onSubmit={Login}>
                <div className="mb-3">
                  <label for="" className="form-label">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" value={email} placeholder="Enter email address" />
                </div>
                <div className="mb-3">
                  <label for="" className="form-label">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control" value={password} placeholder="Password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="exampleCheck1">I agree to terms & conditions</label>
                </div>
                <div className="mb-3">
                  <button className="btn btn-warning text-white shadow-none p-4 w-100 mt-3">Login</button>
                </div>
                <div className="d-inline-flex">
                  <p className="text-center">Forgot Your Password? <Link className='text-warning text-decoration-none' to={'/forgot-password'}> Click Here</Link></p>
                </div>
                <div className="my-2 mt-5">
                  <p className="text-center">Don't have an account ?<Link className="text-warning text-decoration-none" to={'/register'}> Sign Up </Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
