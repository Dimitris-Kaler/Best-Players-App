import React from 'react'
import Card from './Card.js'
import './Card.css'


const CardList=({FootballPlayers})=>{
    return(
        <div className="list">
            {
    FootballPlayers.map((player,i)=>{
        return (
            
            <Card
            key={i}
            id={FootballPlayers[i].id}
            name={FootballPlayers[i].name}
            years={FootballPlayers[i].years}
            img={FootballPlayers[i].img}
            />
            
        )
    })
}
</div>
    )
}






export default CardList