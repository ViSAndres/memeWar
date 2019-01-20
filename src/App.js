import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import{ BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./Components/Home";
import HostGame from "./Components/hostGame"
import JoinGame from "./Components/joinGame"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/hostgame" component={HostGame} />
        <Route exact path="/joingame" component = {JoinGame}/>
      </Switch>
      </BrowserRouter>
      

    );
  }
}

export default App;
