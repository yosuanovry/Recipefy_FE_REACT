import { useState } from 'react'
import { Otp } from '../../Storages/Actions/authRegister'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AuthOTP() {
  const [otp, setOtp] = useState('')
  const [usersId, setUsersId] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const confirmVerification = (data) => {
    verifOtp(data)
    handleShow()
  }

  const verifOtp = (e) => {
    e.preventDefault();
    dispatch(Otp(usersId,otp))
  }

  return (
    <>
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text1 mt-3" style={{fontWeight:'700', color:'#EFC81A'}}>Recipe...</h2>
            </div>
            <div className="col-lg-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text2 mt-3" style={{fontWeight:'600', color:'#EFC81A'}}>Verification Page</h2>
            </div>
            <div className="d-flex justify-content-center">
              <form className="col-lg-5 mt-5" onSubmit={confirmVerification}>
                <div className="mb-3">
                  <label for="" className="form-label">Users_Id</label>
                  <input onChange={(e) => setUsersId(e.target.value)} required type="text" className="form-control" value={usersId} placeholder="Enter email address" />
                </div>
                <div className="mb-3">
                  <label for="" className="form-label">Otp</label>
                  <input onChange={(e) => setOtp(e.target.value)} required type="text" className="form-control" value={otp} placeholder="Password" />
                </div>
                <div className="mb-3">
                  <button className="btn btn-warning text-white shadow-none p-4 w-100 mt-3">Verif</button>
                </div>
                <div className="d-inline-flex">
                  <p className="text-center"> Login? <Link className='text-warning text-decoration-none' to={'/forgot-password'}> Click Here</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title className="text-warning">User Verification Success</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
          <p>Please login!</p>
        </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button className="btn-warning text-white shadow-none" variant="secondary" style={{width:'200px'}}onClick={() => navigate("/login")}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    </>
  )
}
