import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tapable } from 'tapable';

class App extends React. Component {
  constructor(props){
    super(props);
    this.state={name:'',Prenom:''};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
      this.setState({name:'RAKOTO',Prenom:'laza'})
  }
  render() {
    return (
      <div className="App">
        <label for="Nom">Nom </label>
          <input type="text"></input>
          <label for="Nom">Prenom </label>
          <input type="text"></input>
          <button onClick={this.handleClick}>Ajouter</button>
         <h1>{this.state.name}</h1>
         <h1>{this.state.Prenom}</h1>
      </div>
    );
  }
}

export default App;
