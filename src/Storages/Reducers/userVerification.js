const initialState = {
    data: null,
    errorMessage:null,
    isLoading:false
}

const userRegister = (state=initialState,action)=>{
    if(action.type === 'USER_VERIFICATION_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'USER_VERIFICATION_SUCCESS'){
        return{
            ...state,
            data : action.payload,
            isLoading:false
        }
    } else if(action.type === 'USER_VERIFICATION_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
        
    } else {
        return state
    }
}


export default userRegister