import React, {useState, useEffect} from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import axios from 'axios'
// import bombch from '../../pictures/bombch.png'
import karen from '../../pictures/karen.png'
import Footer from '../../Component/footer/indexFooter'
import { Link } from 'react-router-dom'

// let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyMWZlMDFjLTA1ZmItNDYwMi1iMDZkLTA5OWI2NjAxNzExNiIsImVtYWlsIjoieW9zdWF0ZXN0QHNnLmlkIiwiZnVsbG5hbWUiOiJ5b3N1YS50ZXN0IiwicGhvdG8iOm51bGwsInZlcmlmIjoxLCJvdHAiOiIzODAwOTYiLCJjcmVhdGVkX2F0IjoiMjAyMy0wMy0xMFQwNzowMjozNy4yMzlaIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc4NDQ0NDY1LCJleHAiOjE2Nzk3NTg0NjV9.sCMx-8csBKUc8vpFpZPW9DZ2_6P-soFPLJwzRPXyMHE'

export default function SearchMenu() {

const [searchText, setSearchText] = useState()
const [data,setData] = useState()

useEffect(() => {
  getData();
}, []);

const getData = () => {
  var url = `${process.env.REACT_APP_SECRET_KEY}/recipes`
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function searchRecipes() {

  var url = `${process.env.REACT_APP_SECRET_KEY}/recipes?search=` + searchText

  axios.get(url).then((res) => {
    console.log(res)
    setData(res.data.data)
  }).catch((err) => {
    console.log(err)
  })
}


console.log(data)

  return (
    <> <NavbarProfile/>

<div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
            <div className="col-11 d-flex justify-content-start">
                <div className="row d-flex flex-column justify-content-center">
                    <div className="col" >
                    <h1 className="text-header" style={{color: '#2e266f', fontWeight:'600', fontSize:'60px'}}>Discover Recipe</h1>
                    </div>
                    <div className="col">
                        <h1 className="text-header" style={{color: '#2e266f', fontWeight:'600', fontSize:'60px'}}>& Delicious Food</h1>
                        </div>
                  </div>
            </div>
        <div className="col-sm-7 d-flex w-100">
          <div className="col-1"></div>
            <input onChange={(e) => setSearchText(e.target.value)}type="text" className="form-control" id="" placeholder="Telur Gulung" style={{maxWidth:'440px'}}/>
            <button onClick={(e) => searchRecipes(e)} className="button-search btn btn-warning text-white p-3 ms-4" style={{width:'200px'}}>Search</button>
        </div>
          <div className="col-sm-7 mt-4 d-flex w-100">
            <div className="col-1"></div>
            <button className="button-tag btn btn-warning text-white p-3">New</button>
            <button className="button-tag btn btn-warning text-white p-3 ms-4">Popular</button>
            <button className="button-tag rounded text-white p-3 ms-4" style={{backgroundColor:'#00E092', border:'none'}}>Vegetarian</button>
            <button className="button-tag rounded text-white p-3 ms-4" style={{backgroundColor:'#00E092', border:'none'}}>Breakfast</button>
          </div>
        </div>
        {data?.map((item, index) => (
          <div key={index}>
            <Link to={`/detailmenu/${item.id}`} style={{textDecoration:'none', color:'black', cursor:'default'}}>
          <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-8 mt-5">
                <div  className="row">
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
                          <div className="col-lg-8 d-flex flex-rows mt-3">
                            <img src={karen} alt="" />
                            <h5 className='d-flex align-items-center ps-3'>{item.email}</h5>
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
    
<div className="container-fluid" style={{marginTop:'120px'}}>
    <div className="row" style={{}}>   
        <div className="col-lg-12 d-flex justify-content-center">
            <div className="date">Show 1-5 From 20</div>
          <button className="btn btn-warning btn-sm text-white shadow-none ms-4" style={{minWidth:'100px',fontSize: '20px'}}>Next</button>
        </div>
</div>
</div>

<Footer/>
    </>
  )
}
