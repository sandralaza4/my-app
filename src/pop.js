import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Popup from "reactjs-popup";
class pop1 extends Component {
  
constructor(props) {
    super(props)
    this.state = { open: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  openModal (){
    this.setState({ open: true })
  }
  closeModal () {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Controlled Popup
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
          <p className="close" onClick={this.closeModal}>confirmer <button >non</button>
            <button>oui</button></p>
            
          </div>
        </Popup>
      </div>
    )
  }
}

export default pop1;
