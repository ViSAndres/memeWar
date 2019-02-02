import React,{Component} from "react";
import "./Home.css";
/*import '../../node_modules/bootstrap/dist/css/bootstrap.css';*/
class HostGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
        }
        getInput = (e) => {
            this.setState({input: e.target.value});
        }
    
        submitHost = async () => {
            const {input} = this.state;
    
            if(input.length > 0) {
                try{
                    const response = await axios.post('http://localhost:3001/host', {
                        name: input
                    });
                    console.log(response);
                    //redirect here to lobby;
    
                } catch(e) {
                    console.log(e);
                }
            }
    
        }
       
    }

    
    render(){
    
    return(
        
        <div className="App">
        <header>
            <p>
                Enter the session name:
            </p>
            <div class="form-group">
                <label for="exampleFormControlInput1">Session Name</label>
                <input type="text" class="form-control" onChange={this.getInput} id="exampleFormControlInput1" placeholder="D@NK @$$ M3MEz"></input>
                <button className="btn btn-primary" onClick={this.submitHost}> Submit </button>
            </div>
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