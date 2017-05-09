import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux"
import { addField, updateField } from "./actions/userAction"

class App extends React.Component {
  constructor(){
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentWillMount(){
    this.props.dispatch(addField({
      name:"username",
      value:""
    }));

    this.props.dispatch(addField({
      name:"age",
      value:""
    }));
  }
  handleOnChange(e){
    this.props.dispatch(updateField({
        name:e.target.name,
        value:e.target.value
      }))
  }
  getValue(key) {
    
    if(this.props.user.hasOwnProperty(key)) {
      return this.props.user[key];
    }
    console.log("called");
    return '';
  }
  render() {
    console.log(this.getValue("username"));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <label>Username</label>
        <input type="text" name="username"  onChange={this.handleOnChange} />
        <label>age</label>
        <input type="text" name="age" value={this.getValue("age")} onChange={this.handleOnChange} />
        <button type="button" onClick={this.printValue} >Print</button>
      </div>
    );
  }
}


export default connect((store) => {
  return{
    user:store.user
  };
})(App);