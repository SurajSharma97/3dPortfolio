import React,{ useEffect, useState} from 'react'
import "../styles/login.css"
import { Typography } from '@mui/material';
import Button from '@mui/material/Button/Button';
import { login } from '../actions/User';
import {Alert} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
// import Avatar from '@mui/material/Avatar';
 const Login = () => {
const [email, setEmail]= useState("");
const [password,setPassword]=useState("");

const dispatch = useDispatch();
const {loading,message,error}=useSelector(state=>state.login)


useEffect(()=>{
  if(error){
    console.error(error);
    dispatch({type:"CLEAR_ERRORS"});
  }
  if(message){
    console.warn(message)
    dispatch({type:"CLEAR_MESSAGE"})
  }
},[error,message,dispatch])

    const formHandler=(e)=>{
      e.preventDefault();
      dispatch(login(email,password));
    }
  return (
    <div className='admin'>
<Alert className='alert' severity='success'> Login SuccessFully</Alert>

<div className="container">

<Typography variant='h3'>Login</Typography>
<form action="" onSubmit={formHandler} className="formContainer">
<input type="text" placeholder='Enter Your Email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder='Enter Your Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button type='submit' disabled={loading} >Login</Button>
</form>
</div>


    </div>
  )
}

export default Login;