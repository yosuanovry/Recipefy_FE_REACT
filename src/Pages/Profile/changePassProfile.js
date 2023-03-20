import React from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import ayudia from '../../pictures/karen.png'
import { Link } from 'react-router-dom'

export default function ChangePassword() {
  return (
    <><NavbarProfile />
    <div class="container-fluid">
      <div class="col-lg-12" tabindex="0">
        <div class="row align-items-center">
          <div class="col-lg-12 col-md-6 mt-5 mb-5 text-center">
            <img src={ayudia} alt="" style={{width:'300px'}}/>
          </div>
          <div class="col-md-12 col-md-6 mt-5 mb-5 text-center">
            <h2 class="recipe-text2 mt-2">Change Your Password Here</h2>
          </div>
          <div class="col-md-12 col-md-6 mt-3 text-center">
          </div>
          <div class="d-flex justify-content-center">
            <form class="col-lg-4 mt-5">
              <div class="mt-4">
                <label for="" class="form-label">Old Password</label>
                <input type="password" class="form-control" id="" placeholder="***********" />
              </div>
              <div class="mt-4">
                <label for="" class="form-label">New Password</label>
                <input type="password" class="form-control" id="" aria-describedby="emailHelp" placeholder="***********" />
              </div>
              <div class="mt-5">
                <button class="btn btn-warning text-white shadow-none p-4 w-100 mt-3">Update Profile</button>
              </div>
              <div class="d-inline-flex mt-3 p-1">
                <p class="text-center">Back to edit profile? <Link to='/update-profile' className='text-warning text-decoration-none'> Click Here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></> 
        
  )
}
