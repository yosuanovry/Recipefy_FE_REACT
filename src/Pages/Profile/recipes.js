import { useState, useEffect } from "react";
import NavbarProfile from "../../Component/navbar-menu/indexNavbar";
import ayudia from "../../Component/navbar-menu/ayudia.png";
// import bombch from '../../pictures/bombch.png'
import Footer from '../../Component/footer/indexFooter'
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3YmQzZDc1LWFlZGEtNDAyMS1hMWU3LTgzMjQ2M2MxNzA3ZSIsImVtYWlsIjoieW9zdWF0ZXN0QHlvcy5zZyIsImZ1bGxuYW1lIjoieW9zdWEiLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjQzNjkxOSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI2VDA2OjQ1OjIyLjA0NFoiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzg1MTk1NzcsImV4cCI6MTY3OTgzMzU3N30.0gxVaDdsb_NkJxCbMPMHyJdp_mXEgJ3Okkv4RtbZBV0'


let url = `${process.env.REACT_APP_SECRET_KEY}/recipes`

export default function Recipes() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const confirmDelete = (id) => {
    setSelected(id);
    handleShow();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(url+`/my-recipes`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const deleteData = (id) => {
    axios.delete(url + `/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("delete data index ke ", id);
        console.log(res);
        handleClose();
        getData();
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavbarProfile />

        <div className="container-fluid">
          <div className="col-lg-12 mt-5">
            <div className="row ">
              <div className="col-1"></div>
              <div className="col-sm-4 ms-5">
                <div className="col-lg-6 p-4">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="d-flex ">
                        <div className="col-lg border-start border-5 border-warning p-3">
                          <img src={ayudia} alt="" className="rounded-circle" style={{}} />
                        </div>
                        <div className="col-lg-4 d-flex flex-column" style={{ marginTop: "7px" }}>
                          <h5 className="h-1">Ayudia</h5>
                          <h5 className="h-2" style={{ minWidth: "150px" }}>
                            10 Recipes
                          </h5>
                        </div>
                        <div className="col d-flex align-items-center"></div>
                        <div className="col d-flex align-items-center"></div>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 d-flex-column justify-content-end mt-4">
                <div className="date d-flex justify-content-end" style={{ marginRight: "32px" }}>
                  21 February 2023
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="container-fluid">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-sm-4">
              <div className="col-lg-4">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-4">
                      <div className="row">
                        <div className="col-lg d-flex flex-rows ms-5" style={{}}>
                          <Link to="/user-recipes" className="header border-bottom border-5 border-warning p-3" style={{ color: "black" }}>
                            Recipes
                          </Link>
                          <Link to="/user-recipes-bookmark" className="header ps-5 border-bottom border-5 border-warning p-3">
                            Bookmarked
                          </Link>
                          <a href="html" className="header ps-5 border-bottom border-5 border-warning p-3">
                            Liked
                          </a>
                        </div>
                        <div className="col-lg-4 d-flex flex-column" style={{}}></div>
                        <div className="col d-flex align-items-center"></div>
                        <div className="col d-flex align-items-center"></div>
                      </div>
                    </div>
                    <div className="col-lg-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 d-flex justify-content-end"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 ms-5"></div>
            <div className="col-8 mt-5 ps-4 ms-5">
              {data?.map((item, index) => (
                <div key={index + 1} className="row my-5">
                  <img className="rounded" alt="" src={item.photo} style={{ maxWidth: "400px" }} />
                  <div className="col">
                    <div className="row-lg-12">
                      <div className="col">
                        <h4 className="text-start mt-2" style={{ width: "140px", fontWeight: "600" }}>
                          {item.title}
                        </h4>
                      </div>
                      <div className="mt-3">
                        <p className="text-start" style={{ width: "160px", fontWeight: "600" }}>
                          {item.ingredients}
                        </p>
                      </div>
                      <div className="row-sm-12 mt-4">
                        <div className="col-12">
                          <button className="btn btn-warning btn-sm text-white shadow-none">10 Likes - 12 Comment - 3 Bookmark</button>
                        </div>
                        <div className="row d-flex justify-content-start mt-4">
                          <div className="col-lg-8 mt-3">
                            <Link to={`/update-recipes/${item.id}`}><button className="btn btn-primary btn-sm text-white shadow-none">Edit Menu</button></Link>
                            <button className="btn btn-danger btn-sm text-white shadow-none ms-5" onClick={() => confirmDelete(item.id)}>
                              Delete Menu
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Modal show={show} onHide={() => handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Kamu yakin hapus data ini</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="danger" onClick={() => deleteData(selected)}>
              Delete data
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container-fluid" style={{marginTop:'120px'}}>
    <div className="row" style={{}}>   
        <div className="col-lg-12 d-flex justify-content-center">
          <button className="btn btn-warning btn-sm text-white shadow-none" style={{minWidth:'100px',fontSize: '20px'}}>Prev</button>
            <div className="date ms-4">Show 6-10 From 10</div>
        </div>
</div>
</div>

      <Footer />
    </>
  );
}
