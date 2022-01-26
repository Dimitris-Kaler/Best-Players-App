import React from 'react'
import { useParams } from 'react-router-dom'
import {FootballPlayers} from '../FootballPlayers.js'
import PersonalInfo from'./PersonalInfo'
import Table from './Table.js'
import './Stats.css'












const Stats=()=>{
    const {id}=useParams()
  
    const {name,img,stats,nationalStats,personalInfo,background}=FootballPlayers[id-1]
    console.log(background)
  const backgroundStyle={
    background:`linear-gradient(180deg, rgba(0, 0, 0, 0.98) 1.48%, rgba(93, 219, 68, 0.68) 12.52%, rgb(1, 87, 30) 89.52%), url(${process.env.PUBLIC_URL}/images/backgrounds/${background}.jpg)`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'100% 100%',
    backgroundAttachment:'fixed'
  }
    
    return(
        <React.Fragment>
        <a className="back-btn" href="/">&#x02190; Go Back!</a>
        <h3 className="stats-header">{name} Stats</h3>
    
      <div id="stat-card" style={backgroundStyle}> 
          <div className="img-personal">
            {/* <img className="playerImg" alt={name}src={`../public/images/${img}.jpg`}/> */}
            <img className="playerImg" alt={name}src={`${process.env.PUBLIC_URL}/images/${img}.jpg`}/>
            <PersonalInfo personal={personalInfo}/>
          </div>
            <Table stat={stats} nationalStat={nationalStats}/>

      </div>
  
        </React.Fragment>
    )
}


export default Stats