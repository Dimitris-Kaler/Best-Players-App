import React,{Component} from'react'
import CardList from '../components/CardList.js';
import SearchBox from "../components/SearchBox.js";
import Scroll from '../components/Scroll.js'
import {FootballPlayers} from '../FootballPlayers.js';




class Home extends Component{
    constructor(){
      super()
      this.state={
        footballPlayers:FootballPlayers,
        searchField:''
      }
    }
    onSearchChange=(event)=>{
      this.setState({searchField:event.target.value})
  
    }
    render(){ 
      const filteredPlayers=this.state.footballPlayers.filter(player=>{
       
        return player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })

    return (
       <React.Fragment>
         
        <h1>World Best Players</h1>
        <SearchBox searchChange={this.onSearchChange} />
       <Scroll>
          <CardList FootballPlayers={filteredPlayers} />
        </Scroll>
      </React.Fragment>
    )
}
}



export default Home