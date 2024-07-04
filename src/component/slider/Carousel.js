import React from 'react'
import "../../assets/css/Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {


// Slider

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
















// 
  return (
    <>
 

<div className="slider-container">
      <Slider {...settings}>
                   <div className="box">

          <h3>Product Name</h3>
        </div>
                   <div className="box">

                   <h3>Product Name</h3>
        </div>
                   <div className="box">

                   <h3>Product Name</h3>
        </div>
                 
       
     
      </Slider>
       <div className='' style={{display:"flex",
             justifyContent:"center"}}>
      <button style={{
             backgroundColor:"#111",
             color:"#fff",
             fontWeight:600,
             border:"none",
             display:"flex",
             justifyContent:"center",
             marginTop:"20px",
             padding:"14px",
             borderRadius:"4px"

           }}>Explore now</button>
       </div>
    </div>


    </>
  )
}
