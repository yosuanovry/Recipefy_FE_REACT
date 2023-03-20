import axios from "axios";

export const loginUser = (data,navigate) => async (dispatch)=> {
    try{
        dispatch({type:'USER_LOGIN_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/auth/login`,data)
        const user = result.data.data
        localStorage.setItem("token",user.token)
        localStorage.setItem("email",user.email)
        localStorage.setItem("name",user.fullname)
        localStorage.setItem("photo",user.photo)
        dispatch({type:'USER_LOGIN_SUCCESS',payload:user})
        navigate('/user-recipes')
    } catch(err){
        console.log("loginUser error")
        console.log(err)
    }
}