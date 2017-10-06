import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App App-logo">
      <ul>
	     <li className="lime" onClick= {() =>{console.log("CP")}}>Central Park</li>
       <li className="lime" onClick= {() =>{console.log("SL")}}>Statue Of Liberty</li>
       <li className="blue" onClick= {() =>{console.log("ESB")}}>Empire State Building</li>
       <li className="orange" onClick= {() =>{console.log("RC")}}>Rockerfeller Center</li>
       <li className="red" onClick= {() =>{console.log("TS")}}>Times Square</li>
       <li className="orange" onClick= {() =>{console.log("HL")}}>High Line</li>
      </ul>
      </div>
    );
  }
}


export default App;
