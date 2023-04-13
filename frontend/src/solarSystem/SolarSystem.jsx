// import React from 'react'

// const SolarSystem = () => {
//     useEffect(() => {

//         const textureLoader = new TextureLoader();
    
    
//         const moonTexture= textureLoader.load(moonImage);
//         const spaceTexture= textureLoader.load(galaxyImage);
//         const murcuryTexture= textureLoader.load(murcuryImage);
//         const venusTexture= textureLoader.load(venusImage);
//         const sunTexture= textureLoader.load(sunImage);
//         const earthTexture= textureLoader.load(earthImage);
//         const marsTexture= textureLoader.load(marsImage);
//           const saturnTexture = textureLoader.load(saturnImage)
//           const saturnRingTexture = textureLoader.load(ringImage)
//           const jupiterTexture = textureLoader.load(jupiterImage)
//           const uranusTexture = textureLoader.load(uranusImage)
//           const uranusRingTexture = textureLoader.load(uranusRingImage)
//           const neptuneTexture = textureLoader.load(neptuneImage)
//           const plutoTexture = textureLoader.load(plutoImage)
    
    
//         const scene =new THREE.Scene();
//       const camera =new THREE.PerspectiveCamera(75, 
//           window.innerWidth / window.innerHeight,
//           0.1,
//           1000);
//         const canvas = document.querySelector(".homeCanvas");
//         const renderer=new THREE.WebGLRenderer({canvas});
//         renderer.setSize(window.innerWidth,window.innerHeight);
    
    
    
        
        
        
        
        
        
        
        
        
        
//         const ambientLight =new THREE.AmbientLight(0x333333);
        
//         //point light---------------------789456123+++...
        
//         const pointLight=new THREE.PointLight(0xffffff, 2,200);
//         const pointLight2=new THREE.PointLight(0xffffff, 0.01,300);
//         const light = new THREE.PointLightHelper(pointLight);
//         pointLight.position.set(1,1,1);
//         pointLight2.position.set(-1,-1 ,-1);
        
//         const control = new OrbitControls(camera, renderer.domElement)
        
//         const sunGeometry = new THREE.SphereGeometry(28,64,64);
//         const sunMaterial = new THREE.MeshBasicMaterial({map:sunTexture});
//         const sun = new THREE.Mesh(sunGeometry,sunMaterial);
        
//         //murcury  geometry and object  
//         const murcuryGeometry = new THREE.SphereGeometry(10,54,66);
//         const murcuryMaterial = new THREE.MeshStandardMaterial({map:murcuryTexture});
//         const murcury = new THREE.Mesh(murcuryGeometry,murcuryMaterial);
//         const murcuryObj=new THREE.Object3D();
//         murcuryObj.add(murcury)
//         scene.add(murcuryObj)
//         murcury.position.set(40,5,1)
    
//         //venus geometry:-------------------
    
//     const venusGeometry = new THREE.SphereGeometry(15,60,60);
//     const venusMaterial = new THREE.MeshStandardMaterial({map:venusTexture});
//     const venus = new THREE.Mesh(venusGeometry,venusMaterial);
//     const venusObj=new THREE.Object3D();
//     venusObj.add(venus);
//     scene.add(venusObj)
//     venus.position.set(75,5,1)
    
//     //earth geometry and object---------------
//     const earthGeometry = new THREE.SphereGeometry(20,64,64);
//     const earthMaterial = new THREE.MeshStandardMaterial({map:earthTexture});
//     const earth = new THREE.Mesh(earthGeometry,earthMaterial);
    
//     const earthObj=new THREE.Object3D();
//     earthObj.add(earth);
//     scene.add(earthObj);
//     earth.position.set(120,25,10)
    
//     //  moonGeometry and object
//     const moonGeometry = new THREE.SphereGeometry(10,54,66);
//     const moonMaterial = new THREE.MeshStandardMaterial({map:moonTexture});
//     const moon = new THREE.Mesh(moonGeometry,moonMaterial);
    
//     const moonObj=new THREE.Object3D();
//     earth.add(moon);
//     scene.add(moonObj)
//     moon.position.set(35,5,5)
    
//     //mars geometry and object  
//         const marsGeometry = new THREE.SphereGeometry(12,54,66);
//         const marsMaterial = new THREE.MeshStandardMaterial({map:marsTexture});
//         const mars = new THREE.Mesh(marsGeometry,marsMaterial);
//         const marsObj=new THREE.Object3D();
//         marsObj.add(mars)
//         scene.add(marsObj)
//         mars.position.set(155,50,35);
    
//       // jupiter geometry and object
//       const jupiterGeometry = new THREE.SphereGeometry(30,54,66);
//       const jupiterMaterial = new THREE.MeshStandardMaterial({map:jupiterTexture});
//       const jupiter = new THREE.Mesh(jupiterGeometry,jupiterMaterial);
//       const jupiterObj=new THREE.Object3D();
//       marsObj.add(jupiter)
//       scene.add(jupiterObj)
//       jupiter.position.set(220,60,55)
    
//     //saturn solar-system----------------
//     const saturnGeometry = new THREE.SphereGeometry(20,64,64);
//         const saturnMaterial = new THREE.MeshStandardMaterial({map:saturnTexture});
//         const saturn = new THREE.Mesh(saturnGeometry,saturnMaterial);
//         //Saturn-Ring---------- 
//         const saturnRingGeometry = new THREE.RingGeometry(22,30,42);
//         const saturnRingMaterial = new THREE.MeshBasicMaterial({
//           map:saturnRingTexture,
//           side:THREE.DoubleSide});
//           const saturnRing = new THREE.Mesh(saturnRingGeometry,saturnRingMaterial);
          
    
    
     
//       // uranus geometry and object
//       const uranusGeometry = new THREE.SphereGeometry(19,54,66);
//       const uranusMaterial = new THREE.MeshStandardMaterial({map:uranusTexture});
//       const uranus = new THREE.Mesh(uranusGeometry,uranusMaterial);
//       const uranusObj=new THREE.Object3D();
//       uranusObj.add(uranus)
//       scene.add(uranusObj)
//       uranus.position.set(320,85,140);
    
    
//       const uranusRingGeo = new THREE.RingGeometry(22,34,30);
//       const uranusRingMaterial = new THREE.MeshBasicMaterial({
//         map:uranusRingTexture,
//         side:THREE.DoubleSide,
//       });
//     const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMaterial);
//     uranusObj.add(uranusRing);
//     uranusRing.position.set(320,85,140)  
//     uranusRing.rotation.x = -0.38;   
    
    
//       // neptune geometry and object
//       const neptuneGeometry = new THREE.SphereGeometry(18,54,66);
//       const neptuneMaterial = new THREE.MeshStandardMaterial({map:neptuneTexture});
//       const neptune = new THREE.Mesh(neptuneGeometry,neptuneMaterial);
//       const neptuneObj=new THREE.Object3D();
//       neptuneObj.add(neptune);
//       scene.add(neptuneObj);
//       neptune.position.set(380,100,185);
    
    
      
//       // pluto geometry and object
//       const plutoGeometry = new THREE.SphereGeometry(8,54,66);
//       const plutoMaterial = new THREE.MeshStandardMaterial({map:plutoTexture});
//       const pluto= new THREE.Mesh(plutoGeometry,plutoMaterial);
//       const plutoObj=new THREE.Object3D();
//       plutoObj.add(pluto)
//       scene.add(plutoObj)
//       pluto.position.set(400,120,220);
    
//     //Adding saturn into scene and its roatation:- 
//           const saturnObj =new THREE.Object3D();
//           saturnObj.add(saturn);
//           scene.add(saturnObj);
//           saturn.position.set(250,85,100)
//           saturn.rotation.x=-0.05 * Math.PI;
//           //: saturn ring rotation:-
//           saturnObj.add(saturnRing);
//         saturnRing.position.set(250,85,100)  
//         saturnRing.rotation.x = -0.78;   
    
    
     
    
//     // adding object into scene to display into screen 
//         scene.add(light)
//         scene.add(pointLight);
//         scene.add(pointLight2);
//         scene.add(sun);
//         scene.background=spaceTexture;
//         scene.add(ambientLight)
        
        
        
//         camera.position.set(-330,180,120);
//         control.update();
    
//     //animate function to continuely rotate our solar body
//     /*  const animate =()=>{
//           sun.rotateY(0.01)
//           murcury.rotateY(0.053)
//           murcuryObj.rotateY(0.00845)
    
//           venus.rotateY(0.0002)
//           venusObj.rotateY(0.0412)
    
//           earth.rotateY(0.0069)
//           earthObj.rotateY(0.0081);
//           moon.rotateY(0.012);
    
//           mars.rotateY(0.021)
//           marsObj.rotateY(0.008)
          
    
//           saturn.rotateY(0.0009)
//           saturnObj.rotateY(0.009)
    
//           jupiter.rotateY(0.0002)
//           jupiterObj.rotateY(0.115)
    
//           uranus.rotateY(0.0002)
//           uranusObj.rotateY(0.0055)
    
//           neptune.rotateY(0.0002)
//           neptuneObj.rotateY(0.0141)
    
//           pluto.rotateY(0.0002)
//           plutoObj.rotateY(0.00795)
    
    
//           // requestAnimationFrame(animate)
//           // renderer.render(scene, camera);
//         };    
//         // animate();
//      */
//   return (
//     <div>SolarSystem</div>
//   )
// }

// export default SolarSystem