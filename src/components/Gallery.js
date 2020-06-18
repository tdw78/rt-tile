import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    
    return (
      <div id="gallery">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p class="galleryText">Here are some examples of our work.</p>


      {/* <div class="row">
        <div class="col-lg-5"></div>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/tile/tile2.jpg" class="d-block w-100" alt="Bathroom Tile" />
            </div>
            <div class="carousel-item">
              <img src="/images/tile/tile2.jpg" class="d-block w-100" alt="Tile" />
            </div>
            <div class="carousel-item">
              <img src="/images/tile/tile3.jpg" class="d-block w-100" alt="Tile" />
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
    <div class="col-lg-4"></div> */}






      <div class="row">
        <div class="col-lg-1"></div>
          <div>
            <img src="/images/tile/tile1.jpg" class="d-block w-100" alt="Tile" />
          </div>
          <div>
            <img src="/images/tile/tile2.jpg" class="d-block w-100" alt="Tile" />
          </div>
          <div>
            <img src="/images/tile/tile3.jpg" class="d-block w-100" alt="Tile" />
          </div>
          <div>
            <img src="/images/tile/tile4.jpg" class="d-block w-100" alt="Tile" />
          </div>
      </div>  
      










</div>
   
    );
  }
}

export default Gallery;