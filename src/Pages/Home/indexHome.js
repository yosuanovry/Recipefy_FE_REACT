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
import style from './home.module.css';


export default function Home() {
  
  return (
    <>
    <div className={style.body}>
        <NavbarProfile />
        
        <div className="container-fluid mt-5">
        <div className={`row`}>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="row d-flex flex-column justify-content-center">
                    <div className="col">
                    <h1 className={style.textHeader}>Discover Recipe</h1>
                    </div>
                    <div className="col">
                        <h1 className={style.textHeader}>& Delicious Food</h1>
                        </div>
                        <div className={`col ${style.searchBar}`}>
                <Link to='/search'>
                    <input type="text" className={`form-control`}id="search" aria-describedby="emailHelp" placeholder="Search, Restaurant, Food"/>
                  </Link>
                        </div>
                  </div>
            </div>
            <div className={`col-lg-6 d-flex justify-content-center align-items-center mt-4 ${style.eggImage}`}>
                <img src={eggs} alt="" className={`rounded float-end ${style.eggImage}`} />
            </div>
    </div>
</div>



<div className="container-fluid mt-5">
    <div className={`row`}>
        <div className="col-1"></div>
        <div className={`col-6 d-flex align-items-center border-start border-5 border-warning ${style.textHeader1}`}>
            <h2 className="ps-2" style={{fontWeight:'600'}}>Popular For You !</h2>
        </div>
    </div>
</div>

<div className="container-fluid">
    <div className={`row-sm ${style.row1}`}>
        <div className={`col-6 d-flex align-items-center justify-content-center ${style.imageCrash}`}>
            <img src={toast} alt="" className={`d-flex align-items-center ${style.toastImage}`}/>
        </div>
        <div className={`col-6-sm d-flex align-items-center ${style.imageRow}`}>
            <div className={`row-sm d-flex flex-column align-items-center justify-content-center ${style.textMargin}`}>
                <div className="col-8-sm">
                    <p className={style.imageTextHeader}>Healthy Bone Broth Ramen (Quick & Easy)</p>
                </div>
                <div className={`col-8-sm ${style.imageTextDesc}`} >
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                </div>
                <div className="col-8-sm">
                    <button className="btn btn-warning text-white shadow-none mt-3" style={{}}>Learn More</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={`container-fluid`}>
    <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-6 d-flex align-items-center border-start border-5 border-warning" style={{height: '100px',borderWidth: '2vh'}}>
            <h2 className="title-2 ps-2" style={{fontWeight:'600'}}>New Recipe</h2>
        </div>
    </div>
</div>


<div className="container-fluid">
    <div className={`row-sm ${style.row1}`}>
        <div className={`col-6 d-flex align-items-center justify-content-center ${style.imageCrash}`}>
            <img src={burger} alt="" className={`rounded mx-auto d-block mt-5 ${style.burgerImage}`} />
        </div>
        <div className={`col-6-sm d-flex align-items-center ${style.imageRow}`}>
            <div className={`row-sm d-flex flex-column align-items-center justify-content-center ${style.textMargin}`}>
                <div className="col-8-sm">
                    <p className={style.imageTextHeader}>Healthy Bone Broth Ramen (Quick & Easy)</p>
                </div>
                <div className={`col-8-sm ${style.imageTextDesc}`}>
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                </div>
                <div className="col-8-sm">
                    <button className="btn btn-warning text-white shadow-none mt-3" style={{}}>Learn More</button>
                </div>
            </div>
        </div>
    </div>
</div>


<div className={`container-fluid mb-5`}>
    <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-6 d-flex align-items-center border-start border-5 border-warning" style={{height: '100px', borderWidth: '2vh'}}>
            <h2 className="title-2 ps-2">Popular Recipe</h2>
        </div>
    </div>
</div>

<div className={`container-fluid ${style.cardContainer}`}>
    <div className={`row d-flex justify-content-evenly`}>
        <div className="col-3">
            <img src={chickare} alt="" className={`rounded ${style.cardImage}`}/>
            <h5 className={style.cardImageText}>Chicken Kare</h5>
        </div>
        <div className="col-3">
            <img src={bombch} alt="" className={`rounded ${style.cardImage}`}/>
            <h5 className={style.cardImageText}>Bomb Chicken</h5>
        </div>
        <div className="col-3">
            <img src={bsmooth} alt="" className={`rounded ${style.cardImage}`}/>
            <h5 className={style.cardImageText}>Banana Smoothie Pop</h5>
        </div>
    </div>
</div>

<div className="container-fluid mt-5">
    <div className={`row d-flex justify-content-evenly`}>
        <div className="col-3">
            <img src={coflava} alt=""className={`rounded ${style.cardImage}`}/>
            <h5 className={style.cardImageText}>Coffee Lava Cake</h5>
        </div>
        <div className="col-3">
            <img src={sugsalm} alt="" className={`rounded ${style.cardImage}`}/>
            <h5 className={style.cardImageText}>Sugar Salmon</h5>
        </div>
        <div className="col-3">
            <img src={indisalad} alt="" className={`rounded ${style.cardImage}`}/>
            <h5 className={style.cardImageText}>Indian Salad</h5>
        </div>
    </div>
</div>

    </div>

    <Footer />
    </>
  )
}