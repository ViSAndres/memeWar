import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import{ BrowserRouter, Route,Switch } from "react-router-dom";
<<<<<<< HEAD
import Home from "./Components/Home";
import HostGame from "./Components/hostGame"
import JoinGame from "./Components/joinGame"
=======
import Home from "./components/Home";
import HostGame from "./components/hostGame"

>>>>>>> 0598f3c3b9ad807c945313ce15c6cda1efc3b0bf


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Home} />
<<<<<<< HEAD
        <Route exact path="/hostgame" component={HostGame} />
        <Route exact path="/joingame" component = {JoinGame}/>
=======
        <Route exact path="/hostgame" component={HostGame} /> 
>>>>>>> 0598f3c3b9ad807c945313ce15c6cda1efc3b0bf
      </Switch>
      </BrowserRouter>
      

    );
  }
}

export default App;
