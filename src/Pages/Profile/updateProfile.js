import React from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import ayudia from '../../Component/navbar-menu/ayudia.png'
import { Link } from 'react-router-dom'

export default function UpdateProfile() {
  return (
    <><NavbarProfile />
    <div className="container-fluid">
      <div className="col-lg-12" tabindex="0">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-6 mt-5 mb-5 text-center">
            <img src={ayudia} alt="" style={{width:'300px'}}/>
          </div>
          <div className="col-md-12 col-md-6 mb-1 text-center">
            <h3>Change Profile Picture</h3>
          </div>
          <div className="col-md-12 col-md-6 mt-1 text-center">
          </div>
          <div className="d-flex justify-content-center">
            <form className="col-lg-4 mt-5">
              <div className="mt-4">
                <label for="" className="form-label">Old Password</label>
                <input type="password" className="form-control" id="" placeholder="***********" />
              </div>
              <div className="mt-4">
                <label for="" className="form-label">New Password</label>
                <input type="password" className="form-control" id="" aria-describedby="emailHelp" placeholder="***********" />
              </div>
              <div className="mt-5">
                <button className="btn btn-warning text-white shadow-none p-4 w-100 mt-3">Update Profile</button>
              </div>
              <div className="d-inline-flex mt-3 p-1">
                <p className="text-center">Change Password? <Link to='/change-password-profile'className='text-warning text-decoration-none'>Click Here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></> 
        
  )
}
