import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import BG from '../assets/images/BG.png'
import CoachingBG from '../assets/images/top-bg@3x.png'
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
          <Header isContentWhite={this.props.isContentWhite} show={this.props.show} isLogoWhite={this.props.isLogoWhite}/>
          {children}
        </div>
        {/*{this.props.coachingFooter ?*/}
          {/*<CoachingFooter increaseFooterMargin={this.props.increaseFooterMargin}/>*/}
          {/*:*/}
          <Footer show={this.props.show} hideFooter={this.props.hideFooter} showCustomBottom={this.props.topBg || false}/>
        {/*}*/}

        {/*<img src={footerImg}/>*/}
      </div>
    )
  }
}

export default Layout
