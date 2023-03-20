import {useState} from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import Footer from '../../Component/footer/indexFooter'
import  {addMenu } from '../../Storages/Actions/userMenu'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function AddMenu() {
  
  const [inputData, setInputData] = useState({
    title: "",
    ingredients:"",
    category_id:1
  })

  const profileText = "Test Props"

  const [photo,setPhoto] = useState()
  const [alert,setAlert] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const postForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title",inputData.title)
    formData.append("ingredients",inputData.ingredients)
    formData.append("category_id",inputData.category_id)
    formData.append("photo",photo)
    console.log(formData)
    
    dispatch(addMenu(formData,navigate))
  }

  // useEffect(() => {
  //   const fetchcategories = async () => {
  //     const result = await axios.get(url + `/categories`, {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });
  //     const data = result.data.data;
  //     setCategories(data);
  //     console.log("fetched categories=", data);
  //   };
  //   fetchcategories();
  // }, [token, url]);


  return (
    <> <NavbarProfile profText={profileText}/> 
      <div className="container-fluid">
        <div className="container d-flex justify-content-center">
          <form onSubmit={postForm} className="d-flex flex-column justify-content-center mt-5 pt-5" style={{minWidth:'50vw'}}>
          <input type='file' onChange={handlePhoto} name='photo' placeholder='Add Photo' className="form-control" required style={{minHeight:'30vw'}}/>

          <input type='text'onChange={handleChange} value={inputData.title}  className="form-control my-3 mt-4" placeholder='Title' name='title' required style={{minHeight:'4vw'}}/>

          <input type='text' onChange={handleChange} value={inputData.ingredients} className="form-control my-3" name='ingredients' required style={{minHeight:'20vw'}} placeholder='Ingredients'/>
          
          <input type='number' onChange={handleChange} value={inputData.category_id}className="form-control my-3" name='category_id' required style={{maxWidth:'10vw'}} placeholder='Category'/>

          <button  type='submit' className='btn btn-warning text-white shadow-none my-5 p-4'>Submit Menu</button>
          </form>
        </div>
      </div>

      <div className="container">

          {  alert && <div className="alert alert-success my-2" role="alert" onClick={()=>setAlert(false)}>
            Input data success
          </div>}

          </div>
      

    <Footer />
    </>
  )  
}
