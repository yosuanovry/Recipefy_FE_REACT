import {React, useState, useEffect} from 'react'
import NavbarProfile from '../../Component/navbar-menu/indexNavbar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Footer from '../../Component/footer/indexFooter'

let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3YmQzZDc1LWFlZGEtNDAyMS1hMWU3LTgzMjQ2M2MxNzA3ZSIsImVtYWlsIjoieW9zdWF0ZXN0QHlvcy5zZyIsImZ1bGxuYW1lIjoieW9zdWEiLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjQzNjkxOSIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTI2VDA2OjQ1OjIyLjA0NFoiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzg1MTk1NzcsImV4cCI6MTY3OTgzMzU3N30.0gxVaDdsb_NkJxCbMPMHyJdp_mXEgJ3Okkv4RtbZBV0"

let url = `${process.env.REACT_APP_SECRET_KEY}/recipes`

export default function UpdateRecipe() {
  const {id} = useParams()

  const [updateData,setUpdateData] = useState({
    title:"",ingredients:"",category_id:1
  })
  const [photo,setPhoto] = useState()
  const [alert,setAlert] = useState(false)

  const [data,setData] = useState()

useEffect(() => {
  getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

const getData = () => {
  var url = `${process.env.REACT_APP_SECRET_KEY}/recipes/${id}`
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
    return console.log(data)
};
  
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value
    })
  }

  const updateForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title",updateData.title)
    formData.append("ingredients",updateData.ingredients)
    formData.append("category_id",updateData.category_id)
    formData.append("photo",photo)
    axios.put(url+`/${id}`,formData,{
      headers:{
        "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    }).then((res)=>{
      console.log("update data success")
      console.log(res)
      setAlert(true)
    }).catch((err)=>{
      console.log("update data failed")
      console.log(err)
    })

  }

  return (
    <>
    <NavbarProfile/>

    <div className="container-fluid pt-5 mt-5">
        <div className="container">
          {data?.map((item,index) => (
            <div className='d-flex flex-column justify-content-center align-items-center' key={index}>
              <img src={item.photo} alt="" style={{maxWidth:'30vw'}}/>
            <form onSubmit={updateForm} className="d-flex flex-column justify-content-center mt-5 pt-5" style={{minWidth:'50vw'}}>
          <input type='file' onChange={handlePhoto} name='photo' placeholder='Add Photo' required style={{marginTop:'-60px', marginLeft:'280px', width:'8vw'}}/>

          <input type='text'onChange={handleChange} value={updateData.title}  className="form-control my-3" placeholder={item.title} name='title' required style={{minHeight:'4vw'}}/>

          <input type='text' onChange={handleChange} value={updateData.ingredients} className="form-control my-3" name='ingredients' required style={{minHeight:'20vw'}} placeholder={item.ingredients}/>

          <input type='number' onChange={handleChange} value={updateData.category_id}className="form-control my-3" name='category_id' required style={{maxWidth:'10vw'}} placeholder={item.category_id}/>

          <button  type='submit' className='btn btn-warning text-white shadow-none my-5 p-3'>Update Menu</button>
          </form>
          </div>
          ))}

<div className="container">

{  alert && <div className="alert alert-success my-2" role="alert" onClick={()=>setAlert(false)}>
  Update data success
</div>}

</div>
          
        </div>
      </div>

      <Footer/> 
    </>
  )
}
