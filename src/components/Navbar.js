import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron } from 'reactstrap';


class NavBar extends Component {
  render() {
    const titleFont = {
      fontFamily: "Brush Script MT, Brush Script Std, cursive"
    }

    const imgStyle = {
      height: 40,
      width: 70

    }

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" >
          <a class="navbar-brand" href="/"><img src="/images/logo.jpeg" alt="logo" style={imgStyle} /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/gallery">Gallery</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div class="jumbotron" style={jumbotron}>
          <img src="images/logo.jpeg" alt="Company logo" />
          
          <p class="lead" style={textFont}>We turn tiling into an art form</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
         
        </div> */}
      </div>
   
    );
  }
}

export default NavBar;