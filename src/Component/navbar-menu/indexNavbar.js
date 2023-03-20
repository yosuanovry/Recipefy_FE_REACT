import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './indexNavbar.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import { useSelector } from 'react-redux'

export default function NavbarProfile(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const user = localStorage.getItem('name')
  const photos = localStorage.getItem('photo')

  const navigate = useNavigate()

  const confirmLogout = () => {
    handleShow();
  };

  const Logout = () => {
    localStorage.clear()
    navigate('/home')
  }

  if(!user) {
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
                    <Link to='/login' style={{color: '#2e266f',textDecoration:'none'}}>Login</Link>
                    </li>
                  </div>
                  <div className="col-sm-4">
                    <li className="nav-item">
                    <Link to='/register' style={{color: '#2e266f',textDecoration:'none'}}>Register</Link>
                    </li>
                  </div>
                  <div className="col-sm-4">
                    <li className="nav-item">
                      <Link to='/search'style={{color: '#2e266f',textDecoration:'none'}}>Search Menu</Link>
                    </li>
                  </div>
                  <div className="col-sm-4">
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
            </div>
          </div>
      </div>
  )}
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
                <div className="col-sm-4">
                    <li className="nav-item">
                      <Link to='/update-profile' style={{color: '#2e266f',textDecoration:'none'}}>{props.updateProf}</Link>
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
              <img src={photos} alt="" className="rounded-circle" style={{width:'60px'}}/>
              </div>
              <div className="col d-flex-rows">
                <div className="col" style={{fontSize:'24px',fontWeight:'500', width:'200px'}}>{user}</div>
                <div className="col" onClick={confirmLogout} style={{fontSize:'24px',fontWeight:'900', color:'black', cursor:'pointer'}}>Logout</div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Kamu yakin ingin logout?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="danger" onClick={() => Logout()}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};
