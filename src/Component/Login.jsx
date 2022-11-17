import { Box, Button,TextField, Typography } from "@mui/material";
import React from "react";
 import { useState} from "react"
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { loginSuccessData } from "../Redux/Login_Redux/LoginAction";
import { useNavigate } from "react-router-dom";
import{RiAdminLine} from "react-icons/ri"

export default function Login() {

  const [input,setInput]=useState({
    email:"",
    password:""
})

const dispatch=useDispatch();
const store=useSelector((store)=>store.LogReducer);
const navigate=useNavigate();
console.log(store);
console.log(input)
const userpattern = /[@#$%&*_ ]/;
  return (
    <>
      <Box className="loginbox"
        sx={{
          width: "50%",
          height: "70vh",
          margin: "auto",
          marginTop: "5%",
          boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          padding: "20px",
          textAlign: "center",
          backgroundColor:"InfoBackground"
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "monospace", fontSize: "25px"  , marginBottom:"10%"}}
        >
         Admin Login here from your username
         
        </Typography >
        <RiAdminLine style={{color:"red",fontSize:"100px"}}/>
         <Box sx={{display:"flex",flexDirection:"column" ,width:"100%" ,alignItems:"center"}}>
         <TextField variant="outlined" label='enter Admin email..' sx={{width:"60%" , marginBottom:"20px"}} onChange={(e)=>{
            setInput({...input,email:e.target.value})
         }}/>
         <TextField variant="outlined" label='enter Admin password..' sx={{width:"60%" , marginBottom:"20px"}} onChange={(e)=>{
            setInput({...input,password:e.target.value})
         }}/>
         
          <Button variant="contained" sx={{width:"60%" ,height:"45px"}}
          onClick={()=>{
           
              dispatch(loginSuccessData(input,navigate))
            
          }}
          >Submit</Button>
         </Box>
         <Link to={"/all"} style={{textDecoration:"none"}}>
         </Link>
      </Box>
    </>
  );
}
