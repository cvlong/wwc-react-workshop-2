import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import ProgramExample from './ProgramExample'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <a href='/page'>bad link</a>
        <br />
        <Link to='/page'>Click me</Link>
        <Link to='/post'>Click me</Link>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProgramExample history={this.props.history}/>
      </div>
    );
  }
}

export default App;
