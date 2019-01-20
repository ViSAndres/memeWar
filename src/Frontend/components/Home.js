import React,{Component} from "react";


class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
    return (
    <div className="App">

        <header className="App-header">

        <button onClick={() => this.props.history.push('/hostgame')} type="button" class="btn btn-primary">Host Game</button>
        <p>


        </p>
        <button onClick={() => this.props.history.push('/joingame')} type="button" class="btn btn-primary">Join Game</button>
        
        

        </header>
      </div>
    );
};
}


export default Home;