import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'reactstrap';
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <NavBar />
        
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
          </Switch>  
        </main>
      </div>
   
    );
  }
}

export default App;
