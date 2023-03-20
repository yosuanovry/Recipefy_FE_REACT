import axios from "axios";

export const addMenu = (data,navigate) => async (dispatch)=> {
    try{
        const token = localStorage.getItem("token")
        if(!token) navigate('/login')
        let headers = {
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
          }}
        dispatch({type:'ADD_MENU_PENDING'})
        const result = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/recipes`,data,headers)
        const payload = result.data
        dispatch({type:'ADD_MENU_SUCCESS',payload})
        navigate('/user-recipes')
    } catch(err){
        dispatch({type:'ADD_MENU_FAILED',payload:err.response.data.message})
        console.log("addMenu error")
        console.log(err)
    }
}

export const getMenu = () => async (dispatch)=> {
    try{
        dispatch({type:'GET_MENU_PENDING'})
        const result = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/recipes`)
        const get_menu = result.data.data
        dispatch({type:'GET_MENU_SUCCESS',payload:get_menu})
    } catch(err){
        dispatch({type:'GET_MENU_FAILED',payload:err.response.data.message})
        console.log("getMenu error")
        console.log(err)
    }
}

export const getMenuByUser = (navigate) => async (dispatch)=> {
    try{
        const token = localStorage.getItem("token")
        if(!token) navigate('/login')
        let headers = {
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
          }}
        dispatch({type:'GET_MENU_PENDING'})
        const result = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/recipes/my-recipes`, headers)
        const get_menu = result.data.data
        dispatch({type:'GET_MENU_SUCCESS',payload:get_menu})
    } catch(err){
        dispatch({type:'GET_MENU_FAILED',payload:err.response.data.message})
        console.log("getMenu error")
        console.log(err)
    }
}

export const deleteMenu = (id, navigate) => async (dispatch)=> {
    try{
        const token = localStorage.getItem("token")
        if(!token) navigate('/login')
        let headers = {
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
          }}
        dispatch({type:'DELETE_MENU_PENDING'})
        const result = await axios.delete(`${process.env.REACT_APP_SECRET_KEY}/recipes/${id}`, headers)
        const menu = result.data
        dispatch({type:'DELETE_MENU_SUCCESS',payload:menu})
    } catch(err){
        dispatch({type:'DELETE_MENU_FAILED',payload:err.response.data.message})
        console.log("DELETEMenu error")
        console.log(err)
    }
}

export const editMenu = (id, data, navigate) => async (dispatch)=> {
    try{
        const token = localStorage.getItem("token")
        if(!token) navigate('/login')
        let headers = {
            headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
          }}
        dispatch({type:'EDIT_MENU_PENDING'})
        const result = await axios.put(`${process.env.REACT_APP_SECRET_KEY}/recipes/${id}`,data,headers)
        const payload = result.data
        dispatch({type:'EDIT_MENU_SUCCESS',payload})
        navigate('/user-recipes')
    } catch(err){
        dispatch({type:'EDIT_MENU_FAILED',payload:err.response.data.message})
        console.log("editMenu error")
        console.log(err)
    }
}

