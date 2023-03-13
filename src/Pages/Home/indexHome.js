import React from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import Footer from '../../Component/footer/indexFooter'
import eggs from '../../pictures/eggs.png'
import burger from '../../pictures/burger.png'
import bombch from '../../pictures/bombch.png'
import bsmooth from '../../pictures/bsmooth.png'
import coflava from '../../pictures/coflava.png'
import chickare from '../../pictures/chickare.png'
import indisalad from '../../pictures/indisalad.png'
import sugsalm from '../../pictures/sugsalm.png'
import toast from '../../pictures/toast.png'
import {Link} from 'react-router-dom'



export default function Home() {
  
  return (
    <>
    <div>
        <NavbarProfile />
        
        <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="row d-flex flex-column justify-content-center">
                    <div className="col">
                    <h1 className="text-header" style={{color: '#2e266f', fontWeight:'600', fontSize:'60px'}}>Discover Recipe</h1>
                    </div>
                    <div className="col">
                        <h1 className="text-header" style={{color: '#2e266f', fontWeight:'600', fontSize:'60px'}}>& Delicious Food</h1>
                        </div>
                        <div className="col">
                <Link to='/search'>
                    <input type="text" className="form-control" id="search" aria-describedby="emailHelp" placeholder="Search, Restaurant, Food"  style={{}}/>
                  </Link>
                        </div>
                  </div>
            </div>
            <div className="gradient-1 col-lg-6 d-flex justify-content-center align-items-center">
                <img src={eggs} alt="" className="rounded float-end me-5" style={{width: '600px'}} />
            </div>
    </div>
</div>


<div className="container-fluid">
    <div className="row">
        <div className="col-6"></div>
        <div className="gradient-2 col-6 d-flex justify-content-end align-items-center" style={{height: '300px'}}>
        </div>
    </div>
</div>


<div className="container-fluid">
    <div className="row">
        <div className="col-1"></div>
        <div className="col-6 d-flex align-items-center border-start border-5 border-warning" style={{height: '100px', margin:'20px', borderWidth:'2vh'}}>
            <h2 className="title-2 ps-2" style={{fontWeight:'600'}}>Popular For You !</h2>
        </div>
    </div>
</div>

<div className="container-fluid">
    <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <img src={toast} alt="" className="d-flex align-items-center" style={{maxWidth: '80vh'}}/>
        </div>
        <div className="col-6 d-flex align-items-center">
            <div className="row d-flex flex-column align-items-center justify-content-center" style={{margin: '20px'}}>
                <div className="col-8">
                    <h1 style={{lineHeight: '7.5vh'}}>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                </div>
                <div className="col-8 mt-3" style={{fontSize: '1.3vw' ,fontWeight:'500'}}>
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                </div>
                <div className="col-8">
                    <button className="btn btn-warning text-white shadow-none mt-3" style={{}}>Learn More</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container-fluid pt-5 mt-5">
    <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-6 d-flex align-items-center border-start border-5 border-warning" style={{height: '100px',borderWidth: '2vh'}}>
            <h2 className="title-2 ps-2" style={{fontWeight:'600'}}>New Recipe</h2>
        </div>
    </div>
</div>


<div className="container-fluid" style={{}}>
    <div className="row">
        <div className="col-6">
            <img src={burger} alt="" className="rounded mx-auto d-block mt-5" style={{maxWidth: '80vh'}} />
        </div>
        <div className="col-6 d-flex align-items-center">
            <div className="row d-flex flex-column align-items-center justify-content-center" style={{}}>
                <div className="col-8">
                    <h1 style={{lineHeight: '6vh'}}>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                </div>
                <div className="col-8 mt-3" style={{fontSize: '1.3vw' , fontWeight:'500'}}>
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                </div>
                <div className="col-8">
                    <button className="btn btn-warning text-white shadow-none mt-3" style={{}}>Learn More</button>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="container-fluid pt-5 mt-5">
    <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-6 d-flex align-items-center border-start border-5 border-warning" style={{height: '100px', borderWidth: '2vh'}}>
            <h2 className="title-2 ps-2">Popular Recipe</h2>
        </div>
    </div>
</div>

<div className="container-fluid mt-5">
    <div className="row d-flex justify-content-evenly">
        <div className="col-3">
            <img src={chickare} alt="" className="rounded" style={{maxWidth: '25vw'}}/>
            <h5 style={{fontSize: '1.5vw', width: '130px'}}>Chicken Kare</h5>
        </div>
        <div className="col-3">
            <img src={bombch} alt="" className="rounded" style={{maxWidth: '25vw'}}/>
            <h5 style={{fonSize: '1.5vw', width: '130px'}}>Bomb Chicken</h5>
        </div>
        <div className="col-3">
            <img src={bsmooth} alt="" className="rounded" style={{maxWidth: '25vw'}}/>
            <h5 style={{fontSize: '1.5vw', width: '220px'}}>Banana Smoothie Pop</h5>
        </div>
    </div>
</div>

<div className="container-fluid mt-5">
    <div className="row d-flex justify-content-evenly">
        <div className="col-3">
            <img src={coflava} alt=""className="rounded" style={{maxWidth: '25vw'}}/>
            <h5 style={{fontSize: '1.5vw', width: '190px'}}>Coffee Lava Cake</h5>
        </div>
        <div className="col-3">
            <img src={sugsalm} alt="" className="rounded" style={{maxWidth: '25vw'}}/>
            <h5 style={{fontSize: '1.5vw', width: '130px'}}>Sugar Salmon</h5>
        </div>
        <div className="col-3">
            <img src={indisalad} alt="" className="rounded" style={{maxWidth: '25vw'}}/>
            <h5 style={{fontSize: '1.5vw' , width: '120px'}}>Indian Salad</h5>
        </div>
    </div>
</div>

<div className="container-fluid pt-5 mt-5">
    <div className="row">
        <div className="col-6" style={{height: '15vh'}}></div>
        <div className="col-6 d-flex justify-content-end align-items-center">
        </div>
    </div>
</div>
    </div>

    <Footer />
    </>
  )
}