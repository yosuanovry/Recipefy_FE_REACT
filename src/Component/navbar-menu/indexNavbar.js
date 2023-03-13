import React from 'react'
import { Link } from 'react-router-dom'
import './indexNavbar.css'
import ayudia from './ayudia.png'

export default function NavbarProfile() {
  return (
    <div className='container-fluid mt-3' style={{fontWeight:'bold',fontFamily:'serif'}}>
        <div className="row">
          <div className="col">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="container text-center">
                  <div className="row">
                <ul className="navbar-nav">
                  <div className="col-sm-4">
                  <li className="nav-item">
                  <Link to='/home' style={{color: '#2e266f',textDecoration:'none'}}>Home</Link>
                  </li>
                </div>
                <div className="col-sm-4">
                  <li className="nav-item">
                  <Link to='/add' style={{color: '#2e266f',textDecoration:'none'}}>Add Recipe</Link>
                  </li>
                </div>
                <div className="col-sm-4">
                  <li className="nav-item">
                    <Link to='/search'style={{color: '#2e266f',textDecoration:'none'}}>Search Menu</Link>
                  </li>
                </div>
                <div className="col-sm-4">
                  <li className="nav-item">
                    <Link to='/user-recipes'style={{color: '#2e266f',textDecoration:'none'}}>Profile</Link>
                  </li>
                </div>
                </ul>
              </div>
              </div>
            </div>
        </div>
          </nav>
          </div>
          <div className="col-4"></div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="row d-flex align-items-center">
              <div className="col border-start border-5 border-warning p-3">
              <img src={ayudia} alt="" style={{width:'60px'}}/>
              </div>
              <div className="col d-flex-rows">
                <div className="col" style={{fontSize:'24px',fontWeight:'500'}}>Ayudia</div>
                <div className="col" style={{fontSize:'24px',fontWeight:'900'}}><Link to='/login' style={{textDecoration:'none', color:'black'}}>Logout</Link></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
