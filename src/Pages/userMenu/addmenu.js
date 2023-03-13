import {useState} from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import axios from 'axios'
import Footer from '../../Component/footer/indexFooter'

let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3YmQzZDc1LWFlZGEtNDAyMS1hMWU3LTgzMjQ2M2MxNzA3ZSIsImVtYWlsIjoieW9zdWF0ZXN0QHlvcy5zZyIsImZ1bGxuYW1lIjoieW9zdWEiLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjQzNjkxOSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI2VDA2OjQ1OjIyLjA0NFoiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzg1MTk1NzcsImV4cCI6MTY3OTgzMzU3N30.0gxVaDdsb_NkJxCbMPMHyJdp_mXEgJ3Okkv4RtbZBV0'

let url = `${process.env.REACT_APP_SECRET_KEY}/recipes`

export default function AddMenu() {
  
  const [inputData, setInputData] = useState({
    title: "",
    ingredients:"",
    category_id:1
  })

  const [photo,setPhoto] = useState()



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
    axios.post(url,formData,{
      headers:{
        "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    }).then((res)=>{
      console.log("input data success")
      console.log(res)
    }).catch((err)=>{
      console.log("input data fail")
      console.log(err)
    })

  }

  return (
    <> <NavbarProfile/> 
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

    <Footer />
    </>
  )  
}
