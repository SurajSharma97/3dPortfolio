import React from 'react'
import "../styles/footer.css"
import  Typography  from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {BsInstagram,BsFacebook,BsLinkedin,BsGithub} from "react-icons/bs"
const Footer = () => {
  return (
    <div className='footer'>
<div>

<Typography variant='h5'> About Me</Typography>
<Typography> hey my name is suraj sharma . I am a full stack developer and it is my portfolio app</Typography>

<Link to="/contact"  className='footerContactBtn'>
    <Typography>
        Contact Us
    </Typography>
</Link>
</div>

<div>
    <Typography variant='h6'>Social Media</Typography>
    <a href="https://github.com/SurajSharma97" target="blank">
        <BsGithub/>
    </a>
    <a href="https://linkedin.com/in/surajsharma06" target="blank">
        <BsLinkedin/>
    </a>
    <a href="https://instagram/ajstar.97" target="blank">
        <BsInstagram/>
    </a>
    <a href="https://facebook.com/profile.php?id=100005867528378" target="blank">
        <BsFacebook/>
    </a>
</div>

    </div>
  )
}

export default Footer