import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import{ BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./components/Home";
import HostGame from "./components/hostGame"
import JoinGame from "./components/joinGame"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/hostgame" component={HostGame} />
      </Switch>
      </BrowserRouter>
      

    );
  }
}

export default App;
