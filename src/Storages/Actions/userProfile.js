import axios from "axios";


export const getProfile = (navigate) => async (dispatch)=> {
    try{
        const token = localStorage.getItem("token")
        if(!token) navigate('/login')
        let headers = {
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
          }}
        dispatch({type:'GET_PROFILE_PENDING'})
        const result = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/users/my-profile`, headers)
        const get_user = result.data.data
        dispatch({type:'GET_PROFILE_SUCCESS',payload:get_user})
    } catch(err){
        dispatch({type:'GET_PROFILE_FAILED',payload:err.response.data.message})
        console.log("getProfile error")
        console.log(err)
    }
}

export const editProfile = (data,navigate) => async (dispatch)=> {
    try{
        const token = localStorage.getItem("token")
        if(!token) navigate('/login')
        let headers = {
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
          }}
        dispatch({type:'EDIT_PROFILE_PENDING'})
        const result = await axios.put(`${process.env.REACT_APP_SECRET_KEY}/users/update-profile`,data,headers)
        const payload = result.data
        dispatch({type:'EDIT_PROFILE_SUCCESS',payload})
        navigate('/login')
    } catch(err){
        dispatch({type:'EDIT_PROFILE_FAILED',payload:err.response.data.message})
        console.log("editProfile error")
        console.log(err)
    }
}