import React,{Component} from 'react';


class PersonalInfo extends Component{
    constructor(props){
        super(props)
    }
    renderPersonalInfo=()=>{
    
        const personalInformation=this.props.personal

       
        console.log(personalInformation)
        return(

         
           
            
        personalInformation.map(info=>{
          const {fullName,nationality,dateOfBirth,dateOfDeath,height,positions}=info
            return(
            <React.Fragment>
             <p>Full Name:<span>{fullName}</span></p>
             <p>Nationality:<span>{nationality}</span></p>
             <p>Date of Birth:<span>{dateOfBirth}</span></p>
             <p>Date of death:<span>{dateOfDeath}</span></p>
             <p>Height:<span>{height}</span></p>
             <p>Positions:<span>{positions}</span></p>
            </React.Fragment>
            )
        })
            
         )

    }

    render(){
        return(
        <div className="personal-stats">
                  {this.renderPersonalInfo() }  
        </div>)

    }

}






export default PersonalInfo