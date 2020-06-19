import React, { Component } from 'react';
import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery";


class HomePage extends Component {
  render() {
    const jumbotron = {
      // backgroundColor: "#7C90DB"
      // backgroundColor: "#FFFFF0"
      backgroundColor: "#F6FFFF"
    }
    const titleFont = {
      fontFamily: "Brush Script MT, Brush Script Std, cursive"
    }

    const textFont = {
      fontFamily: "Bookman, URW Bookman L, serif",
      fontSize: "48px",
      fontStyle: "italic",
      wordSpacing: 2,
      letterSpacing: 1.4,
      fontWeight: "bold"
    }

    const hr = {
      height: .8,
      borderWidth: 0,
      color: "#7C90DB",
      backgroundColor: "#7C90DB",
      width: 1000
    }
    return (
      <div id="home">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div class="row">

          <div class="col-lg-12" style={jumbotron}>
            <div class="col-lg-12 col-sm-4 col-xs-4">
              <img src="images/logo.jpeg" class="img-responsive" alt="Company logo" />
            </div>
            <hr class="my-1" style={hr} />
            <p class="lead" style={textFont}>We turn tiling into an art form</p>
       </div>
        
        
        <container>
          <div id="gallery">
            <Gallery />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="about">
            <About />
          </div>
        </container>
      </div>

     </div>
   
    );
  }
}

export default HomePage;