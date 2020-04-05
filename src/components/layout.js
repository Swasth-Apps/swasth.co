import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import BG from '../assets/images/BG.png'
import CoachingBG from '../assets/images/bg@3x.png'
import TopBG from '../assets/images/top-bg@3x.png'
import '../assets/scss/main.scss'

import BottomBg from '../assets/images/bottom-bg.png'
import { Col } from 'antd'
import blogImg from '../assets/images/testimonial-user.jpg'
import { lifeCoach } from '../helper/helper'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-carousel/lib/styles.css'


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props;
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
    return (
      <div className={`body ${this.state.loading} ${this.props.hideHomeImg ? 'light-body-bg' : ''}`}>
        {/*<img className='absoluted-header-image' src={BG}/>*/}
        {this.props.show ? this.props.topBg ? <img
            src={TopBG}
            className='home-bg-img coaching-bg-img client-bg-img'/>: <img
            src={CoachingBG}
            hidden={this.props.hideHomeImg}
            className='home-bg-img coaching-bg-img'/>
          : <img src={BG} className='home-bg-img'/>
        }
        <div
          id='wrapper'
          className={this.props.show && !this.props.hideHomeImg ? 'coach-wrapper' : ''}
          style={{ paddingBottom: this.props.hideHomeImg ? 15 : 0 }}
        >
          <Header show={this.props.show} isLogoWhite={this.props.isLogoWhite}/>
          {children}
        </div>
        {/*{this.props.coachingFooter ?*/}
          {/*<CoachingFooter increaseFooterMargin={this.props.increaseFooterMargin}/>*/}
          {/*:*/}
        {this.props.topBg ?<div>
          <img src={BottomBg} className='custom-footer-bg'/>
            <div className='custom-footer-carousel'>
              <Slider {...settings}>
                {lifeCoach && lifeCoach.length ? lifeCoach.map(({comment,name})=>(
                  <Col md={6} className='blog-container'>
                    <div className='testimonials-blogs'>
                      <div style={{textAlign:'center',marginBottom:'15px'}}>
                        { <img src={blogImg} className='testimonial-user-img'/> }
                        <div className='testimonial-user-name'>{name ?`- ${name}` : ''}</div>
                      </div>
                      <h6>
                        {comment}
                      </h6>
                    </div>
                  </Col>
                )) :''}

              </Slider>
            </div>
          </div> : null}
          <Footer show={this.props.show} showCustomBottom={this.props.topBg || false}/>
        {/*}*/}

        {/*<img src={footerImg}/>*/}
      </div>
    )
  }
}

export default Layout
