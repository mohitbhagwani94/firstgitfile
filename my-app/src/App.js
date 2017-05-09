import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {username:''};
    this.changeValue = this.changeValue.bind(this)
    this.printValue = this.printValue.bind(this);

  }

  changeValue(e){
    this.setState({ username:e.target.value });
  }
  printValue(e){
    e.preventDefault();
    alert(this.state.username);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <label>Username</label>
        <input type="text" onChange={this.changeValue}></input>
        <button type="button" onClick={this.printValue}>Print</button>
      </div>
    );
  }
}

export default App;
