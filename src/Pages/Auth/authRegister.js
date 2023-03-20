import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Storages/Actions/authRegister"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AuthRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const confirmRegister = (data) => {
    Register(data)
    handleShow()
  }

  const Register = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
    };
    dispatch(registerUser(data));
  };


  return (
    <>
      <div className="container-fluid">
        <div className="col-lg-12">
          <div className="row align-items-center">
            <div className="col-md-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text1 mt-3" style={{ fontWeight: "700", color: "#EFC81A" }}>
                Recipe...
              </h2>
            </div>
            <div className="col-md-12 col-md-6 mt-5 text-center">
              <h2 className="recipe-text2 mt-3" style={{ fontWeight: "600", color: "#EFC81A" }}>
                Let's Get Started !
              </h2>
            </div>
            <div className="col-md-12 col-md-6 mt-1 text-center">
              <h2 className="recipe-text3 mt-3" style={{ fontSize: "18px", color: "#8692A6" }}>
                Create new account to access all features
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <form onSubmit={confirmRegister} className="col-md-4 mt-5">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input onChange={(e) => setName(e.target.value)} required type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email address" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" required />
                  <label className="form-check-label" for="exampleCheck1">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="mb-3 mt-5 d-flex justify-content-center">
                  <button className="btn btn-warning text-white shadow-none p-4 w-100">Register</button>
                </div>
                <div className="my-2 mt-5">
                  <p className="text-center mt-5 pt-5">
                    Already have an account ?{" "}
                    <Link className="text-warning text-decoration-none" to={"/login"}>
                      Log in Here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title className="text-warning">You're All Set</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
          <p>Please check your email for verification</p>
        </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button className="btn-warning text-white shadow-none" variant="secondary" style={{width:'200px'}}onClick={() => navigate("/verif")}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>


    </>
  );
}
