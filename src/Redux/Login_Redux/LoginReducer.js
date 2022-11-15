import { store } from "../store"
import { LOGIN_ERROR, LOGIN_LODING, LOGIN_SUCCESS, LOGOUT } from "./LoginAction"

const initialState={
    isAuthenticated:false,
    user:{},
    loding:false,
    error:false
}

export const LogReducer=(store =initialState,{type,payload})=>{
   switch(type){
    case LOGIN_LODING:return {...store,loding:true};

    case LOGIN_ERROR:return{...store,loding:false,error:true};

    case LOGIN_SUCCESS:return{...store,loding:false,error:false,isAuthenticated:true,user:payload};
    
    case LOGOUT:return{...initialState,isAuthenticated:false}

    default:return store;
   } 
}