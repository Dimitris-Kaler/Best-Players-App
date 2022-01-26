import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css';
import Stats from '../components/Stats.js';
import Home from '../components/Home'
import Footer from '../components/Footer'




    const App=()=>{
    
    return(
    <div className="App">
      <BrowserRouter>   
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/stats/:id' element={<Stats/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )}



export default App;
