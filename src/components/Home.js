import React,{Component} from "react";
import "./Home.css";
/*import '../../node_modules/bootstrap/dist/css/bootstrap.css';*/

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
    return (
    <div>
        <h1 class="Title">Meme Wars</h1>
        <div class="buttons">

        <button onClick={() => this.props.history.push('/hostgame')} type="button" class="btn btn-primary">Host Game</button>
        <p>


        </p>
        <button onClick={() => this.props.history.push('/joingame')} type="button" class="btn btn-primary">Join Game</button>
        
        

        </div>
      </div>
    );
};
}


export default Home;