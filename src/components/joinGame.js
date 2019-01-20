import React,{Component} from "react";
import "./Home.css";
/*import '../../node_modules/bootstrap/dist/css/bootstrap.css';*/


class JoinGame extends Component {
    constructor(props){
        super(props)
    }

    render(){
      return(
        <div className="App">
        
            <p>
                Enter the session name:
            </p>
            <form action='/'method="POST">
                <div class="form-group">
                <label for="exampleFormControlInput1">Session Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="D@NK @$$ M3MEz"></input>
                </div>
            </form>
        

        </div>
          
      )  
    }
}

export default JoinGame;