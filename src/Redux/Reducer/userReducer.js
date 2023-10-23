import { USER_LOAD, USER_LOADING_ATTEMPT, USER_LOADING_FALSE, USER_LOADING_TRUE, USER_LOGIN } from "../type"



const initialstate = {
    isAuthenticated: false,
    user:{},
    loading:false
}

const userReducer = (state= initialstate, action) =>{
    switch (action.type) {
        case USER_LOADING_ATTEMPT:
            return{
                ...state,
                loading:true
            }
        case USER_LOADING_TRUE:
            return{
                ...state,
                loading:false
            }
        case USER_LOADING_FALSE:
            return{
                ...state,
                loading:false
            }
        case USER_LOGIN:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case USER_LOAD:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
       
    
        default:
            return{
                ...state
            }
    }
}

export default userReducer;