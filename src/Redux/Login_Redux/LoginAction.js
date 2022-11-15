import axios from "axios";


// ACTIONS 
export const LOGIN_SUCCESS='LOGIN_SUCCESS';

export const LOGIN_ERROR='LOGIN_ERROR';

export const LOGIN_LODING='LOGIN_LODING';

export const LOGOUT = 'LOGOUT';

// ACTION CREATORS

export const loginLoding=()=>({type:LOGIN_LODING});

export const loginError=()=>({type:LOGIN_ERROR});

export  const  loginSuccess=(payload)=>({type:LOGIN_SUCCESS,payload});

export const logoutUser=()=>({type:LOGOUT});


export const loginSuccessData=(data,navigate)=>(dispatch)=>{

    dispatch(loginLoding());
    axios.post("https://crimecheck-backend.herokuapp.com/users/login",data).then(({data})=>{
  dispatch(loginSuccess(data))
  setTimeout(() => {
    navigate("/home")
  }, 2000);
  console.log(data)
  alert("Logged in Successfully")
    }).catch((err)=>{
       dispatch(loginError())
       alert("please check your username")
    });
}
