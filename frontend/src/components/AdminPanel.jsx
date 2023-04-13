import React, { useEffect, useState } from 'react'
import {Button, Typography} from "@mui/material"
import {MdTimeline} from "react-icons/md"
import {AiOutlineProject} from "react-icons/ai"
import{ Link }from 'react-router-dom'
import "../styles/adminPanel.css"
import {logout, updateUser} from "../actions/User"
import {useDispatch, useSelector} from "react-redux"
const AdminPanel = () => {
  const dispatch =useDispatch();
  const {error,message,loading}=useSelector(state=>state.update)

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [skills,setSkills]=useState({});
  const [about,setAbout]= useState({});
  const {message:loginMessage}=useSelector(state=>state.login)
  
  //update button handler
    const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(updateUser(name, email, password,skills, about))
    };

    // logout button handler ------------
  const logoutHandler=()=>{
    dispatch(logout())
  };

  //handle-About-Images -------------
  const handleAboutImages=(e)=>{
    const file=e.target.files[0]
    const Reader=new FileReader();
    
    Reader.readAsDataURL(file);
    Reader.onload=()=>{
      if(Reader.readyState===2){
        setAbout({...about, avatar:Reader.result});
      }
    }};

    // handle images -------------
    const handleImages=(e,val)=>{
      const file = e.target.files[0];
    const Reader=new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload=()=>{
      if(Reader.readyState===2){
        if(val===1){
          setSkills({...skills, image1:Reader.result})
        }
        if(val===2){
          setSkills({...skills, image2:Reader.result})
         }
         if(val===3){ 
          setSkills({...skills, image3:Reader.result})
         }
         if(val===4){
          setSkills({...skills, image4:Reader.result})
         }
         if(val===5){
          setSkills({...skills, image5:Reader.result})
         }
         if(val===6){
          setSkills({...skills, image6:Reader.result})
         }
      }

    };
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
      if(loginMessage){
        console.warn(loginMessage)
        dispatch({type:"CLEAR_MESSAGE"})
      }
    },[error,message,dispatch,loginMessage])

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
 <input type="text" placeholder="Name"
  value={name} onChange={(e)=>{setName(e.target.value)}}
   className='adminPanelInput' />


 <input type="text" placeholder="Email"
  value={email} onChange={(e)=>{setEmail(e.target.value)}}
   className='adminPanelInput' />

 <input type="text" placeholder="Password"
  value={password} onChange={(e)=>{setPassword(e.target.value)}}
   className='adminPanelInput' />

<div className='adminPanelSkill'>
<div>
  <Typography> Skill 1 </Typography>
  <input type="file"
   placeholder='enter here'
     className='adminPanelFileUpload'
      onChange={(e)=>handleImages(e,1)} 
      accept='image/*'/>
</div>
<div>
  <Typography> Skill 2 </Typography>
  <input type="file"
   placeholder='enter here'
     className='adminPanelFileUpload'
      onChange={(e)=>handleImages(e,2)} 
      accept='image/*'/>
</div>
<div>
  <Typography> Skill 3 </Typography>
  <input type="file"
   placeholder='enter here'
     className='adminPanelFileUpload'
      onChange={(e)=>handleImages(e,3)} 
      accept='image/*'/>
</div>
<div>
  <Typography> Skill 4 </Typography>
  <input type="file"
   placeholder='enter here'
     className='adminPanelFileUpload'
      onChange={(e)=>handleImages(e,4)} 
      accept='image/*'/>
</div>
<div>
  <Typography> Skill 5 </Typography>
  <input type="file"
   placeholder='enter here'
     className='adminPanelFileUpload'
      onChange={(e)=>handleImages(e,5)} 
      accept='image/*'/>
</div>
<div>
  <Typography> Skill 6 </Typography>
  <input type="file"
   placeholder='enter here'
     className='adminPanelFileUpload'
      onChange={(e)=>handleImages(e,6)} 
      accept='image/*'/>
</div>
</div>

<div className="adminPanelAbout">
  <fieldset>
    <legend>About</legend>
    <input type="text"
     placeholder='Name'
      value={about.name}
       onChange={(e)=>setAbout({...about, name:e.target.value})}
        className='adminPanelInput' />

    <input type="text"
     placeholder='Title'
      value={about.title}
       onChange={(e)=>setAbout({...about, title:e.target.value})}
        className='adminPanelInput' />

    <input type="text"
     placeholder='Subtitle'
      value={about.subtitle}
       onChange={(e)=>setAbout({...about, subtitle:e.target.value})}
        className='adminPanelInput' />

    <input type="text"
     placeholder='Description'
      value={about.description}
       onChange={(e)=>setAbout({...about, description:e.target.value})}
        className='adminPanelInput' />

    <input type="text"
     placeholder='Quote'
      value={about.quote}
       onChange={(e)=>setAbout({...about, quote:e.target.value})}
        className='adminPanelInput' />

<input type="file"
     placeholder='Choose Avatar'
       onChange={handleAboutImages}
        className='adminFileUpload' 
        accept='image/*' />
  </fieldset>
</div>


    <Link to="/admin/timeline">TIMELINE <MdTimeline/></Link>

    <Link to="/admin/project">PROJECT<AiOutlineProject/></Link>
   
    <Button type='submit'
     variant="contained"
      disabled={loading}> Update</Button>

        </form>
        <Button variant="contained"
         color="error"
          style={{display:"block", margin:"4vmax auto"}}
          onClick={logoutHandler}>Logout</Button>
      </div>
    </div>
  )
}

export default AdminPanel;