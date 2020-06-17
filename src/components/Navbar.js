import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron } from 'reactstrap';


class NavBar extends Component {
  render() {
    const jumbotron = {
      backgroundColor: "#7C90DB"
    }
    const titleFont = {
      fontFamily: "Brush Script MT, Brush Script Std, cursive"
    }

    const textFont = {
      fontFamily: "Bookman, URW Bookman L, serif",
      fontSize: "74px",
      fontStyle: "italic"
    }

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" >
          <a class="navbar-brand" href="#">Navbar w/ text</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text"> Navbar text with an inline element</span>
          </div>
        </nav>
        <div class="jumbotron" style={jumbotron}>
          <img src="images/logo.jpeg" alt="Company logo" />
          
          <p class="lead" style={textFont}>We turn tiling into an art form</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
         
        </div>
      </div>
   
    );
  }
}

export default NavBar;