import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';
import NavBar from "./components/Navbar"


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <NavBar />
        
      </div>
   
    );
  }
}

export default App;
