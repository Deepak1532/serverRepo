import React from 'react'

function Carousel() {
    return (
        <div id="carouselhead" className="container-fluid" >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" ></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" ></li>
               </ol>

                 <div className="container-fluid carousel-inner">
                <div className="carousel-item active" data-bs-interval='2000'>
                    <img src="image/carousel/c4.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="image/carousel/c1.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item " data-bs-interval='2000'>
                    <img src="image/carousel/c7.png" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="image/carousel/c9.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="image/carousel/c3.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="image/carousel/c11.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                 
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="image/carousel/c2.jpg" className="d-block w-100"  alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval='2000'>
                    <img src="image/carousel/c5.jpg" className="d-block w-100"  alt="..."/>
                  </div>
              </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <i class="fa fa-angle-left"></i>

                  {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                <i class="fa fa-angle-right"></i>
                  {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                </a>
          </div>
        </div>
    )
}

export default Carousel
