import React from 'react'
import {Link} from 'react-router-dom'
// import {FootballPlayers} from './FootballPlayers'
import './Card.css'
import Stats from './Stats'


const Card=(props)=>{


    const{id,name,years,img}=props
    
    // console.log(props.id)
    
    return (
    <div className="card">
        <img className="playerImg"alt={name} src={`../images/${img}.jpg`}/>
      <div>
       <Link 
        to={{
          pathname:`/stats/${id}`,
          state:{id,name,years,img}
        }} className="underline-effect" >
          <h2 >{name}</h2>
       </Link>
        <p>{years}</p>
        
      </div>
    </div>
    )
}


export default Card