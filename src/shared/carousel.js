import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-multi-carousel/lib/styles.css'
import { Col } from 'antd'
import blogImg from '../assets/images/testimonial-user.jpg'

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  className: "center",
  centerMode: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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
/*
const CarouselContainer = ({reviews}) => (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      infinite
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {reviews && reviews.length ? reviews.map(({comment,name})=>(
        <Col md={6} className='blog-container'>
          <div className='testimonials-blogs'>
            <div style={{textAlign:'center',marginBottom:'15px'}}>
              <img src={blogImg} className='testimonial-user-img'/>
              <div className='testimonial-user-name'>{name ?`- ${name}` : ''}</div>
            </div>
            <h6>
              {comment}
            </h6>
          </div>
        </Col>
        )) :''}

    </Carousel>
)
*/

const CarouselContainer = ({reviews}) => (
  <Slider {...settings}>
    {reviews && reviews.length ? reviews.map(({comment,name})=>(
      <Col md={6} className='blog-container'>
        <div className='testimonials-blogs'>
          <div style={{textAlign:'center',marginBottom:'15px'}}>
            { <img src={blogImg} className='testimonial-user-img'/> }
            <div className='testimonial-user-name base-text'>{name ?`- ${name}` : ''}</div>
          </div>
          <h6 className="black-18-font para-text">
            {comment}
          </h6>
        </div>
      </Col>
    )) :''}

  </Slider>
)

export default CarouselContainer
