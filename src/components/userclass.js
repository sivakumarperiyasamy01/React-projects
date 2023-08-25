// import react for to tract classbased components in react component
import React from "react"

// syntax

class UserClass extends React.Component{

  constructor (props){
    super(props)

    this.state={
      userinfo:{
        name:"dummy",
        location:"dummy url"
      }
      
    }
    
  }
  

 async componentDidMount(){

  const data=await fetch("https://api.github.com/users/sivakumarperiyasamy01")
  const json= await data.json();

  this.setState({
   userinfo:json}
  );

  }
        render(){
            
          return(
            <div className="classcard">
              <h2>Name:{this.state.userinfo.name}</h2>
             
             
      
            </div>
          )
        }

};

export default UserClass ;
