import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button type="button" class="btn btn-primary">Join Game</button>
        <p> </p>
        <button type="button" class="btn btn-primary">Create Game</button>

        </header>
      </div>
    );
  }
}

export default App;
