import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'; 


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  //idk what this is
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
//queries?
export default App;
