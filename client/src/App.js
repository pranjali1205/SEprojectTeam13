import React from 'react'
// import{Route} from "react-router-dom";
// import {Routes } from 'react-router-dom';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Transport from './components/Transport';
import Errorpage from './components/Errorpage';
// import "./App0.css"
import 'bootstrap/dist/css/bootstrap.css';
//import {BrowserRouter} from "react-router-dom";

const App=()=>{
  return(
    <>
      <Navbar/>
      <switch>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/transport" element={<Transport/>}/>
        <Route element={<Errorpage/>}/>

      </Routes>
      </switch>
       {/* <Route path="/">
          <Home/>
        </Route>
      
      <Route path="/about">
        <About/>
      </Route >

      <Route path="/contact">
        <Contact/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>
      <Route>
        <Errorpage/>
      </Route> */}

    </>
  )
}
export default App