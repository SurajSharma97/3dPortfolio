import React,{useEffect, useState} from 'react'
import "../styles/contact.css"
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {contactUs} from "../actions/User"

const Contact = () => {

const {loading, message:alertMessage, error}= useSelector((state)=>state.update)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
const dispatch = useDispatch();
    const contactFormHandler=(e)=>{
        e.preventDefault();
      dispatch(contactUs(name,email,message))
    }

    useEffect(()=>{
        if(error){
          console.log(error);
          dispatch({type:"CLEAR_ERRORS"});
        }
        if(alertMessage){
          console.log(message);
          dispatch({type:"CLEAR_MESSAGE"});
        }
       
    },[error,alertMessage,dispatch])
  return (
    <div className="contact">
        <div className="contactRightBar"></div>
               <div className="contactContainer">
               <form  className="contactContainerForm" onSubmit={contactFormHandler}>
                    <Typography variant='h4'>Contact Us</Typography>
                     <input type="text" name='name' value={name}  onChange={(e)=>setName(e.target.value)} placeholder='name'/>
                     <input type="text" name='Email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                     <textarea cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='enter your comments'></textarea>
                     <Button variant='contained' disabled={loading} type='submit'> Send</Button>
                </form>
            
               </div>
            
    </div>
  )
}

export default Contact