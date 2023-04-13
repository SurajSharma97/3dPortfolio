import React, { useEffect, useState } from 'react'
import { addProject } from '../actions/User';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/User';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
// import User from "../../../backend/models/user"

import {ProjectCard} from "../components/Project"


const Project_Timeline = () => {
    const { message, error, loading } = useSelector((state) => state.update)
    const {message:loginMessage} =useSelector((state)=>state.login)
    const { user } = useSelector((state) => state.user)
// console.log(user.projects.image)

    const dispatch = useDispatch();

    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [techStack, setTechStack] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addProject(url, title, image, description, techStack));
        dispatch(getUser());
       
    };

    const handleProjectImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();

        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result);
                console.log(Reader.result)
            }
        }
    };
    console.log(user.projects)
   
    useEffect(() => {
        if (error) {
            console.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            console.warn(message)
            dispatch({ type: "CLEAR_MESSAGE" })
        }
        if (loginMessage) {
            console.warn(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
           }},[error, message, loginMessage,dispatch])
    return (
<div className='adminPanel'>
    <div className="adminPanelContainer">
        <Typography variant='h4'>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>
            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
    </Typography>
    <form onSubmit={submitHandler}>

        <input type="url" placeholder="link"
            value={url} onChange={(e) =>  setUrl(e.target.value) }
            className='adminPanelInput' />


        <input type="text" placeholder="title"
            value={title} onChange={(e) => setTitle(e.target.value) }
            className='adminPanelInput' />

        <input type="file"
            placeholder='Choose Image'
            onChange={handleProjectImage}
            accept='image/*' 
            className='adminPanelInput'/>

        <input type="text" placeholder="description"
            value={description} 
            onChange={(e) =>  setDescription(e.target.value)}
            className='adminPanelInput' />

        <input type="text" placeholder="techStack"
            value={techStack} onChange={(e) => setTechStack(e.target.value) }
            className='adminPanelInput' />



<Link to="/account" >BACK<MdKeyboardBackspace /></Link>


<Button type='submit'
 variant="contained"
 disabled={loading}> ADD</Button>
  </form>

<div className="adminPanelBox">

{

    user && 
    user.projects &&
     user.projects.map((item)=>
     (<ProjectCard
        key={item._id}
        id={item._id}
         url={item.url}
          projectImage={item.image.url}
           projectTitle={item.title}
           description={item.description}
           technologies={item.techStack}
            isAdmin={true}
            className="card"
            />)
    )}
</div>


</div >
</div>
    )
}

export default Project_Timeline