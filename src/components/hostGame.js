import React,{Component} from "react";

class HostGame extends Component {
    constructor(props){
        super(props)
        
    }
    
    render(){
    
    return(
        
        <div className="App">
        <header>
            <p>
                Enter the session name
            </p>
                <form action ="/test" method = "post">
                <input className="input-form" type="text" name= 'sessionName' ></input>
                <input type = "submit"></input>
                </form>
                
  
        </header>

        </div>
        
    )
}
}

export default HostGame;