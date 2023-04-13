import React from 'react';
import "./home.css";


import earthImg from "../assets/earth.jpg"
import sun_image from "../assets/venus.jpg"
import {Link} from "react-router-dom"
// import cpp from "../assets/c++.jpeg"
// import nodejs from "../assets/nodejsPng.jpg"
// import mongodb from "../assets/mongodb.png"
// import react from "../assets/reactImage.png"
// import javascript from "../assets/jfavascript.png"
// import express from "../assets/express.png"
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import stars from "../assets/starry-sky.jpg"
import { MouseOutlined } from '@mui/icons-material';

import { useEffect } from 'react';
import {
  SiCplusplus,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript
} from "react-icons/si"
import * as THREE from "three";
import { Typography } from '@mui/material';

import TimeLine from '../components/TimeLine.jsx';
const Home = ({timelines,skills}) => {
useEffect(()=>{

  
  const textureLoader = new THREE.TextureLoader();
  const sunTexture =textureLoader.load(sun_image);
  const starsTexture =textureLoader.load(stars);
  const earthTexture =textureLoader.load(earthImg);



  const scene=new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
    );


    camera.updateProjectionMatrix();

 const canvas= document.querySelector(".homeCanvas")
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(window.innerWidth,window.innerHeight)
  
  const pointlight= new THREE.PointLight(0xffffff,1,200);
  pointlight.position.set(1,1,1);
  scene.add(pointlight)
  const pointlight2= new THREE.PointLight(0xffffff,0.001,200);
  pointlight2.position.set(-1,-1,-1);
  scene.add(pointlight2)

  // const controls = new OrbitControls(camera,renderer.domElement)
  const lightHelper = new THREE.PointLightHelper(pointlight)








  const sunGeo = new THREE.SphereGeometry(9,64,64)
    const sunMat = new THREE.MeshBasicMaterial({map:sunTexture})
    const sunMesh= new THREE.Mesh(sunGeo,sunMat);
scene.add(sunMesh);
sunMesh.position.set(1,2,10)
    const earthGeo = new THREE.SphereGeometry(6,64,64);
    const earthMat = new THREE.MeshStandardMaterial({map:earthTexture})
    const earth=  new THREE.Mesh(earthGeo,earthMat);
    const earthObj = new THREE.Object3D();
    scene.add(earthObj);
    scene.add(earth);
    earth.position.set(-20,-8,1)

          const ambientLight = new THREE.AmbientLight(0x333333);
        // controls.update();

        scene.add(ambientLight)
        scene.add(lightHelper);

        scene.background=starsTexture;
    
  camera.position.set(-10,-2,20);
  

  
const animation=()=>{
  sunMesh.rotation.y +=0.008;
  earth.rotation.y+=0.02;
  requestAnimationFrame(animation);
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.render(scene,camera);

  const skillBox = document.getElementById("homeSkillBox");
  if(window.scrollY> 1500){
    skillBox.style.animationName="homeSkillBoxScrollAnimationOn"
  }
  else{
    skillBox.style.animationName="homeSkillBoxScrollAnimationOff"
    
  }
}

animation();

return window.addEventListener("scroll",()=>{
  camera.rotation.y=window.scrollY * 0.001;
  camera.rotation.z=window.scrollY * 0.002;
})


},[])


  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      
<div className="homeCanvasContainer">
<Typography variant='h1'>
  <p>S</p>
  <p>U</p>
  <p>R</p>
  <p>A</p>
  <p style={{marginBottom:"1vmax"}}>J</p>
  <p>S</p>
  <p>H</p>
  <p>A</p>
  <p>R</p>
  <p>M</p>
  <p>A</p>
</Typography>

<div className="homeCanvasBox">
<Typography variant='h2'>Designer</Typography>
<Typography variant='h2'>Developer</Typography>
<Typography variant='h2'>Creator</Typography>
</div>
<Link to="/projects"> View Work</Link>
</div>
<div className="homeScrollBtn">
  <MouseOutlined/>
</div>

      <div className="homeContainer">
        <Typography variant="h2"> Timeline  </Typography>
      <TimeLine timelines={timelines}/>
      </div>

      <div className="homeSkill">
        <Typography variant='h3'>SKILLS</Typography>

        <div className="homeCubeSkill">

          <div className="homeCubeSkillFaces face1">
            <img src={skills.image1.url} alt=" face1" />
          </div>

          <div className="homeCubeSkillFaces face2">
            <img src={skills.image2.url} alt="face2" />
          </div>

          <div className="homeCubeSkillFaces face3">
            <img src={skills.image3.url} alt="face3" />
          </div>

          <div className="homeCubeSkillFaces face4">
            <img src={skills.image4.url} alt="face4" />
          </div>

          <div className="homeCubeSkillFaces face5">
            <img src={skills.image5.url} alt="face5" />
          </div>

          <div className="homeCubeSkillFaces face6">
            <img src={skills.image6.url} alt="face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillBox" id='homeSkillBox'>
      <SiCplusplus/>
      <SiJavascript/>
      <SiExpress/>
      <SiMongodb/>
      <SiNodedotjs/>
      <SiReact/>
        </div>


      </div>
      </div>
  )
}

export default Home