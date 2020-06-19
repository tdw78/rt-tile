import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    const imgStyle = {
      height: 350,
      
    }
    return (
      <div id="gallery">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <p class="galleryText">See our past projects.</p>
  
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
        <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/tile/tile6.jpg" class=" w-50" alt="..." style={imgStyle} />
        </div>
        <div class="carousel-item">
          <img src="images/tile/tile2.jpg" class=" w-50" alt="..." style={imgStyle} />
        </div>
        <div class="carousel-item">
          <img src="images/tile/tile4.jpg" class=" w-50" alt="..." style={imgStyle} />
        </div>
        <div class="carousel-item">
          <img src="images/tile/tile5.jpg" class=" w-50" alt="..." style={imgStyle} />
        </div>
      </div>
       
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
     
    </div>
   

</div>
   
    );
  }
}

export default Gallery;