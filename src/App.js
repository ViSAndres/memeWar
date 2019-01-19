import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createGame from "./Components/CreateGrame/createGame"






class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <button type="button" class="btn btn-primary">Join Game</button>
        <p> </p>
        <button type="button" class="btn btn-primary">Create Game</button>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
