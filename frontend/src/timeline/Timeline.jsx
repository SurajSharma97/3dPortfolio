import React, { useState,useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addTimeline,deleteTimeline} from "../actions/User"
import {MdKeyboardBackspace} from "react-icons/md";
import { Link } from 'react-router-dom';
import  Typography  from '@mui/material/Typography/Typography';
import { Button } from '@mui/material';
import { getUser } from '../actions/User'
import { FaTrash } from 'react-icons/fa';

const Timeline = () => {
    const {message, error, loading }=useSelector((state)=>state.update)
    const {user}=useSelector((state)=>state.user);

        const dispatch = useDispatch();
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[date,setDate] = useState("");


    const submitHandler = async(e)=>{
        e.preventDefault();
        await dispatch(addTimeline(title, description,date));
        dispatch(getUser());
    };
    const deleteHandler = async(id)=>{
        await dispatch(deleteTimeline(id));
        dispatch(getUser())
    };
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

  return (
    <div className='adminPanel'>
    <div className="adminPanelContainer">
      <Typography variant='h4'> 
        <p>A</p>
        <p>D</p>
        <p>M</p>
        <p>I</p>
        <p style={{marginRight:"1vmax"}}>N</p>
        <p>P</p>
        <p>A</p>
        <p>N</p>
        <p>E</p>
        <p>L</p>
      </Typography>
<form onSubmit={submitHandler}>

<input type="text" placeholder="Title"
value={title} onChange={(e)=>{setTitle(e.target.value)}}
 className='adminPanelInput' />


<input type="text" placeholder="Description"
value={description} onChange={(e)=>{setDescription(e.target.value)}}
 className='adminPanelInput' />

<input type="date" placeholder="Date"
value={date} onChange={(e)=>{setDate(e.target.value)}}
 className='adminPanelInput' />



  <Link to="/account">BACK<MdKeyboardBackspace/></Link>


 
  <Button type='submit'
   variant="contained"
    disabled={loading}> ADD</Button>

      </form>
      <div className='adminPanelBox'>

      {
        user && user.timeline && user.timeline.map((item) => (
  <div className='card' key={item._id}>
                    <Typography variant='h5'>{item.title}</Typography>
                    
                    <Typography variant='body1'
                        style={{ letterSpacing: "2px" }}>
                        {item.description}
                    </Typography>

                    <Typography variant='body1'
                        style={{ fontWeight: 600 }}>
                  {item.date!=null ? item.date.toString().split("T")[0]:""}
                    </Typography>
                    
                    <Button style={{
                        margin: "auto",
                        display: "inline-block",
                        justifyContent:"flex-end",
                        color: "rgba(40,40,40,0.9)",
                        backgroundColor:"rgba(125,125,125,0.23)"                            }}
                        onClick={(item) => deleteHandler(item._id)}>
                        <FaTrash style={{margin:"0.1vmax",width:"20px"}}/>
                    </Button>

                </div>))
                }
                          </div>
    </div>
  </div>
  )
}

export default Timeline