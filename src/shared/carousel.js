import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Col, Row,Icon } from 'antd'
import blogImg from '../assets/images/Blog_img01.png'

const CustomLeftArrow = ({ onClick }) => (
  <Icon onClick={() => onClick()} className='custom-carousel-icon' type='left-circle' />
);
const CustomRightArrow = ({ onClick }) => (
  <Icon onClick={() => onClick()} className='custom-carousel-icon -right-icon' type='right-circle' />
);

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

export default CarouselContainer