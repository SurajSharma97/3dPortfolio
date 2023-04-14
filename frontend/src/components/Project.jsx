import React from 'react'
import "../styles/Project.css"
import {AiOutlineProject} from "react-icons/ai";
import Typography from "@mui/material/Typography" 
import Delete from "@mui/icons-material/Delete"
import  Button  from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../actions/User';


export const ProjectCard=({
  url,
  projectTitle,
   projectImage,
   description,
   technologies, 
   id,
   isAdmin=false})=>{
  
const dispatch =useDispatch();


const deleteHandler=async(id)=>{
  await dispatch(deleteProject(id));
  dispatch(getUser());
}


    return(
    <>
    <a href={url} className="projectCard" /* target="_black" */>
      <div> 
        <img src={projectImage} alt="project1" />
        <Typography variant='h5'>{projectTitle}</Typography>
      </div>

      <div>
        <Typography variant='h4'> About Project</Typography>
        <Typography>{description}</Typography>
        <Typography variant='h6'> Tech Stack :{technologies}</Typography>
      </div>
    </a>

    {
      isAdmin && (
        <Button 
        style={{color:"rgba(40,40,40,0.586)"}}
         onClick={()=>deleteHandler(id)}><Delete/></Button>
      )
    }
    </>
  )
}


const Project = ({projects}) => {
  return (
    <div className='projects'>
      <Typography variant='h4'> Projects <AiOutlineProject/></Typography>
      <div className="projectWrapper">
        {
          projects.map((item)=>
            <ProjectCard 
            id={item._id}
            key={item._id}
            url={item.url}
            projectTitle={item.title}
            projectImage={item.image.url}
            description={item.description}
            technologies={item.techStack}
            />
            
          )}
      </div>
    </div>
  )
}

export default Project;

