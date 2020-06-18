import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Jumbotron } from 'reactstrap';
import { Link, animateScroll as scroll } from 'react-scroll';

class NavBar extends Component {
  render() {
    const titleFont = {
      fontFamily: "Brush Script MT, Brush Script Std, cursive"
    }

    const imgStyle = {
      height: 50,
      width: 100
    }
    
    const topStyle = {
      backgroundColor: "#7C90DB"
    }

    const navStyle = {
      color: "whitesmoke",
      fontSize: 24,
      fontFamily: "Bookman, URW Bookman L, serif"
    }

return (
  <div>

  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={topStyle}>
    <div class="container">
      <a class="navbar-brand" href="/"><img src="/images/logo.jpeg" alt="logo" style={imgStyle} /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">

          <Link
            activeClass= "active"
            to= "home"
            spy = {true}
            smooth={true}
            offset= {0}
            duration= {1250}
            style={navStyle}
          >Home</Link>

          <Link
            activeClass= "active"
            to= "gallery"
            spy = {true}
            smooth={true}
            offset= {0}
            duration= {1250}
            style= {navStyle}
          >Gallery</Link>

          <Link
            activeClass= "active"
            to= "contact"
            spy = {true}
            smooth={true}
            offset= {0}
            duration= {1250}
            style={navStyle}
          >Contact Us</Link>

          <Link
            activeClass= "active"
            to= "about"
            spy = {true}
            smooth={true}
            offset= {0}
            duration= {1250}
            style={navStyle}
          >About Us</Link>
       
        </ul>
      </div>
    </div>
  </nav>

</div>
   
    );
  }
}

export default NavBar;


 {/* <li class="nav-item">
          <a class="nav-link" href="/" style={navStyle}>Home</a>
        </li> */}