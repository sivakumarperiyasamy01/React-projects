// import react for to tract classbased components in react component
import React from "react"

// syntax

class UserClass extends React.Component{

  constructor (props){
    super(props)

    this.state={
      
      
    }
    
  }
  

 async componentDidMount(){

  const data=await fetch("https://api.github.com/users/sivakumarperiyasamy01")
  const json= await data.json()
  console.log(json)

  }
        render(){
        
          return(
          
            <div className="classcard">
              <h2>Name</h2>
              <h3>location</h3>
              <h3>email</h3>
      
            </div>
          )
        }

};

export default UserClass ;
