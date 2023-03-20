import { React, useEffect, useState } from "react";
import NavbarProfile from "../../Component/navbar-menu/indexNavbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile, editProfile } from "../../Storages/Actions/userProfile";


export default function UpdateProfile() {
  const [updateData, setUpdateData] = useState({
    fullname: ""
  });
  const [photo, setPhoto] = useState();
  const [currentPhoto, setCurrentPhoto] = useState(null);

  // const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user_photo = localStorage.getItem('photo')
  const name = localStorage.getItem('name')
  

  useEffect(() => {
    dispatch(getProfile(navigate));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
    window.URL.revokeObjectURL(currentPhoto);
    setCurrentPhoto(window.URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", updateData.fullname);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(editProfile(formData, navigate));
  };
  return (
    <>
      <NavbarProfile />
          <div className="container-fluid">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <form onSubmit={updateProfile}>
                <div className="col-lg-12 col-md-6 mt-5 mb-5 text-center">
                  <img src={currentPhoto || user_photo} alt="" className="rounded-circle" style={{ maxWidth: "250px" }} />
                </div>
                <div className="col-md-12 col-md-6 mb-1 text-center">
                  <input style={{marginLeft:'109px'}} type="file" required onChange={handlePhoto} />
                </div>
                <div className="col-md-12 col-md-6 mt-1 text-center"></div>
                <div className="d-flex justify-content-center">
                  <div className="col-lg-4 mt-5">
                    <div className="mt-4">
                      <label for="" className="form-label">
                        Name
                      </label>
                      <input required onChange={handleChange} type="text" className="form-control" placeholder={name} name='fullname' value={updateData.fullname}/>
                    </div>
                    <div className="mt-5">
                      <button type="submit" className="btn btn-warning text-white shadow-none p-4 w-100 mt-3">Update Profile</button>
                    </div>
                    <div className="d-inline-flex mt-3 p-1">
                      <p className="text-center">
                        Change Password?{" "}
                        <Link to="/change-password-profile" className="text-warning text-decoration-none">
                          Click Here
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
       
    </>
  );
}
