import React, { Component } from 'react';
import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery";


class HomePage extends Component {
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
        <div class="jumbotron" style={jumbotron}>
          <img src="images/logo.jpeg" alt="Company logo" />
          
          <p class="lead" style={textFont}>We turn tiling into an art form</p>
          <hr class="my-4" />
          {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
         
        </div>
        
        {/* <div id="contact">
        <Contact />
        </div>
        <div id="about">
        <About />
        </div>
        <div id="gallery">
        <Gallery />
        </div> */}
      </div>
   
    );
  }
}

export default HomePage;