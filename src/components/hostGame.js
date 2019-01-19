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
            <form action='/'method="POST">
                <input class="input-form" type="text" name="sessionName"></input>
                <button class ="submit" type="submit" value="Submit"></button>
                
            </form>
        </header>

        </div>
    )
}
}

export default HostGame;