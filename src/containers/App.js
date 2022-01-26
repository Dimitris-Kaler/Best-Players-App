import React,{Component} from 'react';
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom'
import CardList from '../components/CardList.js';
import SearchBox from "../components/SearchBox.js";
import Scroll from '../components/Scroll.js'
import './App.css';
import {FootballPlayers} from '../FootballPlayers.js';
import Stats from '../components/Stats.js';
import Home from '../components/Home'
import Footer from '../components/Footer'


// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       footballPlayers:FootballPlayers,
//       searchField:''
//     }
//   }
//   onSearchChange=(event)=>{
//     this.setState({searchField:event.target.value})

//   }
//   render(){ 
//     const filteredPlayers=this.state.footballPlayers.filter(player=>{
     
//       return player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
//     })

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
