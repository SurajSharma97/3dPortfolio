import React from 'react'
import "./header.css"
import Diamond from "../assets/Diamond-Logo-PNG.png"
import {ReactNavbar}  from "overlay-navbar"
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
  return (
        <ReactNavbar 
        navColor1="white"
        navColor2="hsl(219,48%,8%)"
        burgerColorHover="hsl(219,48%,8%)"
        burgerColor="hsl(210,55%,55%)"

        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Project"
        link4Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/project"
        link4Url="/contact"
        logoWidth="150px"
        logo={Diamond}
        logoHoverColor="hsl(219,48%,8%)"
        link1Color="hsl(210,55%,55%)"
        link1ColorHover="white"
        link1Size="1.5rem"
        profileIcon={true}
        profileIconColor="hsl(210,55%,55%)"
        profileIconColorHover="white"
        ProfileIconElement={FaUserAlt}



        
        />
  )
}

export default Header