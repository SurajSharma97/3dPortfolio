


import React from 'react'
import Typography from "@mui/material/Typography"
import profilePic from "../assets/profile pic.png"
import "../styles/About.css"

const About = ({about}) => {
  return (
    <div className='about'>
      <div className="aboutContainer">
        <Typography> {about.quote}</Typography>
      </div>
      <div className="aboutContainer2">

        <div>
        <img src={about.avatar.url} alt="surajpic" className='Avatar' />
    <Typography variant='h4' style={{
      margin:"1vmax 0",
      padding:"1vmax",
      color:"black"}}>{about.name}</Typography>

    <Typography > {about.title}</Typography>
    <Typography style={{
      margin:"1vmax 0",

    }}>{about.subtitle}</Typography>
        </div>

        <div> 
          <Typography style={{
            textAlign:"right",
            wordSpacing:"5px",
            letterSpacing:"5px",
            lineHeight:"50px"


          }}>{about.description}</Typography>  </div>
      </div>



    </div>
  )
}

export default About