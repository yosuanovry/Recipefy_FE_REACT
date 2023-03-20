import React from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import bombch from '../../pictures/bombch.png' 
import Footer from '../../Component/footer/indexFooter'
import { Link } from 'react-router-dom'

export default function Bookmark() {
  const user = localStorage.getItem('name')
  const photos = localStorage.getItem('photo')
  return (
    <> <NavbarProfile/>
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
                            <img src={photos} alt="" className="rounded-circle" style={{maxWidth:'80px'}} />
                          </div>
                          <div className="col-lg-4 d-flex flex-column mt-4 ms-2" style={{marginTop:'7px'}}>
                            <h5 className="h-1" style={{minWidth: "400px"}}>{user}</h5>
                            <h5 className="h-2" style={{minWidth:'150px'}}>10 Recipes</h5>
                          </div>
                          <div className="col d-flex align-items-center">
                          </div>
                          <div className="col d-flex align-items-center">
                          </div>
                          </div>
                          </div>
                          <div className="col-lg-2">
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-5 d-flex-column justify-content-end mt-4">
                <div className="date d-flex justify-content-end" style={{marginRight:'32px'}}>21 February 2023</div>
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
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-4">
                          <div className="row">
                            <div className="col-lg d-flex flex-rows ms-5" style={{}}>
                                <Link to='/user-recipes' className="header border-bottom border-5 border-warning p-3">Recipes</Link>
                                <Link href='/user-recipes-bookmark' className="header ps-5 border-bottom border-5 border-warning p-3" style={{color:'black'}}>Bookmarked</Link>
                                <a href='html' className="header ps-5 border-bottom border-5 border-warning p-3">Liked</a>
                        </div>
                        <div className="col-lg-4 d-flex flex-column" style={{}}>
                        </div>
                        <div className="col d-flex align-items-center">
                        </div>
                        <div className="col d-flex align-items-center">
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-3">
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-sm-5 d-flex justify-content-end">
            </div>
    </div>
  </div>
  </div>

  <div className="container-fluid">
    <div className="row">
      <div className="col-1 ms-5"></div>
      <div className="col-8 mt-5 ps-4 ms-5">
      <div className="row">
                <img src={bombch} alt="" className="rounded" style={{maxWidth: '400px'}}/>
                <div className="col">
                    <div className="row-lg-12">
                        <div className="col mt-3">
                            <h4 className="text-start mt-2" style={{width: '20px', fontWeight: '600'}}>Bomb Chicken</h4>
                        </div>
                        <div className="mt-3">
                            <p className="text-start" style={{width: '160px',fontWeight: '600'}}>Ingredients: chicken, dumpling wrap, garlic, spring onion, soy sauce, black sesame seed  </p>
                        </div>
                        <div className="row-sm-12 mt-4">
                            <div className="col-12">
                                <button className="btn btn-warning btn-sm text-white shadow-none">10 Likes - 12 Comment - 3 Bookmark</button>
                            </div>
                            <div className="row d-flex justify-content-start mt-4">
                            <div className="col-lg-8 mt-3">
                                <button className="btn btn-sm text-white shadow-none ms-2" style={{backgroundColor:'#F57E71'}}>Delete From Bookmark</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>

  <div className="container-fluid">
    <div className="row">
      <div className="col-1 ms-5"></div>
      <div className="col-8 mt-5 ps-4 ms-5">
      <div className="row">
                <img src={bombch} alt="" className="rounded" style={{maxWidth: '400px'}}/>
                <div className="col">
                    <div className="row-lg-12">
                        <div className="col mt-3">
                            <h4 className="text-start mt-2" style={{width: '20px', fontWeight: '600'}}>Bomb Chicken</h4>
                        </div>
                        <div className="mt-3">
                            <p className="text-start" style={{width: '160px',fontWeight: '600'}}>Ingredients: chicken, dumpling wrap, garlic, spring onion, soy sauce, black sesame seed  </p>
                        </div>
                        <div className="row-sm-12 mt-4">
                            <div className="col-12">
                                <button className="btn btn-warning btn-sm text-white shadow-none">10 Likes - 12 Comment - 3 Bookmark</button>
                            </div>
                            <div className="row d-flex justify-content-start mt-4">
                            <div className="col-lg-8 mt-3">
                                <button className="btn btn-sm text-white shadow-none ms-2" style={{backgroundColor:'#F57E71'}}>Delete From Bookmark</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
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
  )
}
