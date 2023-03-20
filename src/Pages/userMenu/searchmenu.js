import React, { useState, useEffect } from "react";
import NavbarProfile from "../../Component/navbar-menu/indexNavbar";
import axios from "axios";
// import bombch from '../../pictures/bombch.png'
import Footer from "../../Component/footer/indexFooter";
import { Link } from "react-router-dom";


export default function SearchMenu() {
  const [searchText, setSearchText] = useState();
  const [data, setData] = useState();
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  // const [pageLimit] = useState(5)

  const sortOptions = ["asc", "desc"]

  useEffect(() => {
    getData(1,5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async (page, limit) => {
    var url = `${process.env.REACT_APP_SECRET_KEY}/recipes?page=${page}&limit=${limit}`;
    return await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setCurrentPage(page)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function searchRecipes() {
    var url = `${process.env.REACT_APP_SECRET_KEY}/recipes?search=` + searchText;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (!searchText) {
          window.location.reload(false);
        }
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSort = async (e) => {
    let value = e.target.value;
    setSort(value);
    return await 
    axios.get(`${process.env.REACT_APP_SECRET_KEY}/recipes?sort=${value}&limit=5`)
    .then((res) => {
      console.log(res)
      setData(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const pagination = () => {
    if(currentPage === 1) {
      console.log(currentPage)
      return (
        <div className="container-fluid" style={{ marginTop: "120px" }}>
        <div className="row" style={{}}>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="date">Show 1-5 From 10</div>
            <button onClick={() => getData(currentPage+1 , 5)}className="btn btn-warning btn-sm text-white shadow-none ms-4" style={{ minWidth: "100px", fontSize: "20px" }}>
              Next 
            </button>     
          </div>
        </div>
      </div>
      )
    } else if(currentPage !== 1) {
      return (
    <div className="container-fluid" style={{ marginTop: "120px" }}>
        <div className="row" style={{}}>
          <div className="col-lg-12 d-flex justify-content-center">
            <button onClick={() => getData(currentPage - 1 ,5)}className="btn btn-warning btn-sm text-white shadow-none" style={{ minWidth: "100px", fontSize: "20px" }}>
              Prev 
            </button>     
            <div className="date ms-4">Show 6-10 From 10</div>
          </div>
        </div>
      </div>
      )
    }
  }



  console.log(data);

  return (
    <>
      <NavbarProfile />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11 d-flex justify-content-start">
            <div className="row d-flex flex-column justify-content-center">
              <div className="col">
                <h1 className="text-header" style={{ color: "#2e266f", fontWeight: "600", fontSize: "60px" }}>
                  Discover Recipe
                </h1>
              </div>
              <div className="col">
                <h1 className="text-header" style={{ color: "#2e266f", fontWeight: "600", fontSize: "60px" }}>
                  & Delicious Food
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm-7 d-flex w-100">
            <div className="col-1"></div>
            <input onChange={(e) => setSearchText(e.target.value)} type="text" className="form-control" id="" placeholder="Telur Gulung" style={{ maxWidth: "440px" }} />
            <button onClick={(e) => searchRecipes(e)} className="button-search btn btn-warning text-white p-3 ms-4" style={{ width: "200px" }}>
              Search
            </button>
          </div>
          <div className="col-sm-7 mt-4 d-flex w-100">
            <div className="col-1"></div>
              <select className="btn btn-warning p-3 dropdown-toggle text-white shadow-none" onChange={handleSort} value={sort}>
                <option>Sort By: </option>
                {sortOptions.map((item, index) => (
                  <option value={item} key={index}>{item}</option>
                ))}
              </select>
            <button className="button-tag btn btn-warning text-white p-3 ms-4">Popular</button>
            <button className="button-tag rounded text-white p-3 ms-4" style={{ backgroundColor: "#00E092", border: "none" }}>
              Vegetarian
            </button>
            <button className="button-tag rounded text-white p-3 ms-4" style={{ backgroundColor: "#00E092", border: "none" }}>
              Breakfast
            </button>
          </div>
        </div>
        {data?.map((item, index) => (
          <div key={index}>
            <Link to={`/detailmenu/${item.id}`} style={{ textDecoration: "none", color: "black", cursor: "default" }}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-8 mt-5">
                    <div className="row">
                      <img className="rounded" alt="" src={item.photo} style={{ maxWidth: "400px" }} />
                      <div className="col">
                        <div className="row-lg-12">
                          <div className="col">
                            <h4 className="text-start mt-2" style={{ width: "160px", fontWeight: "600" }}>
                              {item.title}
                            </h4>
                          </div>
                          <div className="mt-3">
                            <p className="text-start" style={{ width: "220px", fontWeight: "600" }}>
                              {item.ingredients}
                            </p>
                          </div>
                          <div className="row-sm-12 mt-4">
                            <div className="col-12">
                              <button className="btn btn-warning btn-sm text-white shadow-none">10 Likes - 12 Comment - 3 Bookmark</button>
                            </div>
                            <div className="row d-flex justify-content-start mt-4">
                              <div className="col-lg-8 d-flex flex-rows mt-3">
                                <img src={item.user_photo} alt="" className="rounded-circle"style={{maxWidth:'80px'}}/>
                                <h5 className="d-flex align-items-center ps-3">{item.username}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>{pagination()}</div>
      <Footer />
    </>
  );
}
