
import './App.css';
import Home from "./Home/Home"
import Header from "./Header/Header"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import  Login from './components/Login';
import {useDispatch, useSelector} from "react-redux";
import {useEffect}  from 'react';
import {getUser, loadUser}from "./actions/User.js" 
import AdminPanel from './components/AdminPanel';
import Timeline from './timeline/Timeline';
import Project_Timeline from './Project/Project';

function App() {
  const dispatch = useDispatch();
const {isAuthenticated} = useSelector(state=>state.login);
const {loading,user} = useSelector(state=>state.user);


  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser())
  }, [dispatch]);
  
  return (
    <Router>
     {
      loading? <div> loading</div> : (<>
       <Header/>
        <Routes>
          <Route path='/' element={<Home timelines={user.timeline} skills={user.skills} />}/>
          <Route path='/about' element={<About about={user.about} />}/>
          <Route path='/project' element={<Project projects={user.projects} />}/>
          {/* <Route path='/project' element={<Project/>}/> */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/account' element={isAuthenticated?<AdminPanel/> : <Login/>}/>
          <Route path='/admin/timeline' 
          element={isAuthenticated?<Timeline/> : <Login/>}/>
          <Route path='/admin/project' 
          element={isAuthenticated?<Project_Timeline/> : <Login/>}/>

        </Routes>

    <Footer/>
      </>)
     }
    </Router>
  );
}

export default App;
