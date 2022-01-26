import React from 'react';
import { Route,Routes } from 'react-router-dom'
import './App.css';
import Stats from '../components/Stats.js';
import Home from '../components/Home'
import Footer from '../components/Footer'




    const App=()=>{
    
    return(
    <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/stats/:id' element={<Stats/>} />
        </Routes>
        <Footer/>
      
    </div>
  )}



export default App;
