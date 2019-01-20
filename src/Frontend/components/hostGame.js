import React,{Component} from "react";
import "./hostGame.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class HostGame extends Component {
    constructor(props){
        super(props)
        
    }
    
    render(){
    
    return(
        
        <div className="App">
        <header>
            <p>
                Enter the session name:
            </p>
            <form action='/'method="POST">
                <div class="form-group">
                <label for="exampleFormControlInput1">Session Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="D@NK @$$ M3MEz"></input>
                </div>
            </form>
        </header>

        </div>
        
    )
}
}
/*
<div className="App">
        <header>
            <p>
                Enter the session name:
            </p>
            <form action='/'method="POST">
                <input class="input-form" type="text" name="sessionName"></input>
                <button class ="submit" type="submit" value="Submit"></button>
                
            </form>
        </header>

        </div>
*/
export default HostGame;