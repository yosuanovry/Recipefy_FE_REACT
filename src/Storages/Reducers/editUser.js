const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const edit_user = (state=initialState,action)=>{
    if(action.type === 'EDIT_USER_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'EDIT_USER_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'EDIT_USER_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
    } else{
        return state
    }
}

export default edit_user