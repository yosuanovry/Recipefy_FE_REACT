import {Link, useParams} from 'react-router-dom'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import ayudia from '../../pictures/karen.png'
import axios from 'axios'
import {useState, useEffect} from 'react'
import thumb1 from '../../pictures/thumb-1.PNG'
import thumb2 from '../../pictures/thumb-2.PNG'
import Footer from '../../Component/footer/indexFooter'


export default function DetailMenu() {

  const {id} = useParams()

  const [data,setData] = useState()

  useEffect(() => {
    getDataById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const getDataById = () => {
    var url = `${process.env.REACT_APP_SECRET_KEY}/recipes/${id}`
    axios
      .get(url)
      .then((res) => {
        console.log(res)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data)

  return (
  <>
  <NavbarProfile />
  {data?.map((item, index) => (
    <div className="container-fluid" key={index}>
        <div className="col-lg-12 mt-5">
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-sm-4 ms-5">
              <div className="col-lg-6 p-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="d-flex ">
                      <div className="col-lg border-start border-5 border-warning p-3">
                        <img src={item.user_photo} alt="" className="rounded-circle" style={{maxWidth:'80px'}} />
                      </div>
                      <div className="col-lg-4 d-flex flex-column mt-4 ms-2" style={{ marginTop: "7px" }}>
                        <h5 className="h-1">{item.username}</h5>
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
              <div className="date d-flex justify-content-end">{item.posttime}</div>
              <div className="date d-flex justify-content-end">20 Likes - 2 Comments</div>
            </div>
          </div>
        </div>
      </div>
  ))}
  

{data?.map((item,index) => (
  <>
  <div key={index}>
<div className="container-fluid">
  <div className="row text-center">
          <div className="col-12">
            <h1 className="mt-5" style={{fontWeight:'bold'}}>{item.title}</h1>
          </div>
          <div className="col-12 mt-2">
            <img src={item.photo} alt="" className="rounded mt-5" style={{maxWidth: '1200px'}}/>
            </div>  
        </div>
      </div>
  </div>

  <div class="container-fluid" >
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="d-flex flex-column mb-3">
                    <div className="p-2 h1 ingredients-head" style={{fontWeight:'bold'}}>Ingredients</div>
                    <div class="p-2 ingredients-body" style={{fontSize:'24px'}}>{item.ingredients}</div>
                  </div>
            </div>
        </div>
        </>
))}

<div className="container-fluid" style={{marginTop:'120px'}}>
    <div className="row" style={{}}>   
        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
            <div className="date d-flex justify-content-center">Go back to search Menu</div>
          <Link to='/search'><button className="btn btn-warning btn-sm text-white shadow-none ms-4 d-flex justify-content-center p-3" style={{minWidth:'300px',fontSize: '20px'}}>Back</button></Link>
        </div>
</div>
</div>

<div class="container-fluid mt-5 pt-5">
        <div class="row">
        <div class="col mt-5">
        </div>
        <div class="col col-8 d-flex flex-rows justify-content-start border-bottom border-5 border-warning">
          <div class="col-2 d-flex justify-content-start">
            <img src={thumb1} alt="" style={{height: '60px'}} class="rounded mb-4 p-2"/>
            <img src={thumb2} alt="" style={{height: '60px'}} class="rounded mb-4 p-2"/>
          </div>
        </div>
        <div class="col"></div>
    </div>
      </div>

      <div class="container-fluid">
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col-8 pt-5 mt-5">
                <div class="row">
                    <div class="col-4 d-flex flex-rows">
                <img src={ayudia} alt="" class="rounded-circle" style={{maxWidth:'100px'}}/>
                <div class="row d-flex align-items-center ms-4" >
                <h5 class="h-1">Karen</h5>
                <h5 class="h-2">20 Recipes</h5>
                </div>
                </div>
                <div class="col border-start border-5 border-warning d-flex align-items-center">
                    <p class="ms-3" style={{fontWeight: '600'}}>wow, i just made this and it was delicious! thanks for sharing!</p>
                </div>
                </div>
            </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col-8 pt-5 mt-5">
                <div class="row">
                    <div class="col-4 d-flex flex-rows">
                <img src={ayudia} alt="" class="rounded-circle" style={{maxWidth:'100px'}}/>
                <div class="row d-flex align-items-center ms-4" >
                <h5 class="h-1">Ariel</h5>
                <h5 class="h-2">20 Recipes</h5>
                </div>
                </div>
                <div class="col border-start border-5 border-warning d-flex align-items-center">
                    <p class="ms-3" style={{fontWeight: '600'}}>simple and delicious!</p>
                </div>
                </div>
            </div>
        </div>
      </div>

      <div class="container-fluid mt-4 pt-5">
        <div class="row">
        <div class="col mt-5">
        </div>
        <div class="col col-8 d-flex justify-content-center border-bottom border-5 border-warning"></div>
        <div class="col"></div>
    </div>
      </div>

    <div class="container-fluid mt-5 pt-5">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 mt-5">
                <textarea class="comment-box" id="" cols="80" rows="9" placeholder="Your Comment Here!"></textarea>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-5" style={{}}>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <button class="button-comment btn btn-lg text-white shadow-none" style={{backgroundColor: '#FFB167'}}>Send a comment</button>
            </div>
        </div>
    </div>
    

  <Footer/>
  </>   
  )
}
