import React, { Component } from 'react';

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
      </div>
   
    );
  }
}

export default HomePage;