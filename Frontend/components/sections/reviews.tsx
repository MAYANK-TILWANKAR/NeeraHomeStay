"use client"
import "../../app/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"
import Slider from "react-slick";
import ReviewCard from "../../components/ui/reviewCard";

const ReviewSection: React.FC = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    return(
        <>
            <section id="review" className="section7">
            <div className="section7headings">
            <p className='text-xl font-semibold mt-14'>-- Your Stay Host</p>
            {/* <h1 className="text-5xl font-bold mb-4 mt-10">What Our<span className='text-[#0d726c]'>Clients Say</span></h1> */}
            <h3 className="text-centersmall mt-2 text-3xl font-bold mb-9">
            What Our <span className="text-[#0d726c]">Clients Say</span>
          </h3>
            </div>
            <div className="slider-container">
      <Slider {...settings}>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      </Slider>
    </div>
            </section>
        </>
    )
}

export default ReviewSection;