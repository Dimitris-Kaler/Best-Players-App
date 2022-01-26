
import React,{Component} from 'react'


class Table extends Component{
    // constructor(props){
    //     super(props)
    // }

 

    renderTableData=()=>{
        console.log(this.props)
        const playerStats=this.props.stat

        
        
      
        
        
       return (
         playerStats.map((stat,i)=>{
           const {years,team,apps,goals}=stat
           return(
            <React.Fragment key={i}>
           <tr>
               <td >{years}</td>
               <td >{team}</td>
               <td >{apps}</td>
               <td >{goals}</td>
        </tr>
        </React.Fragment>
        
        )
       }) )
      
       

        }

        renderTableNationalData=()=>{
            const NationalStats=this.props.nationalStat
            
            return(
                NationalStats.map((stat,j)=>{
                    const{years,team,apps,goals}=stat
                    return( 
                    <React.Fragment key={j}>
                        <tr>
                            <td>{years}</td>
                            <td>{team}</td>
                            <td>{apps}</td>
                            <td>{goals}</td>
                       </tr>
                    </React.Fragment>
                     )

                })
               
               

            )
             }
    

    render(){
        return(
    <div id="career-tableDiv">
    <table className="datatable">
        <thead className="thead">
                <tr>
                    <th>Years</th>
                    <th>Team</th>
                    <th>Apps</th>
                    <th>Goals</th>
                </tr>
        </thead>
        <tbody>
           
            <tr className="tr-heading">
                <th></th>
                <th>Senior Career</th>
            </tr>
            {this.renderTableData()}
            <tr className="tr-heading">
                <th></th>
                <th>National Team</th>
            </tr>
            {this.renderTableNationalData()}

        </tbody>
    </table> 
    </div>

        )
    }
}


export default Table