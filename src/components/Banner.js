import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import bannerGraphic from '../assets/images/home-woman.jpeg'
import topBg from '../assets/images/top-bg@3x.png'

const changingText=['Behavioral','Mental','Emotional'];

class Banner extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({
        count: this.state.count + 1
      })
    },2000);
  }

  render() {
    const { count } = this.state;
    return (
        <Row
            className='card-row divider -margin-bottom home-top-bg'
            style={{background: `url(${topBg}) no-repeat center center fixed`, backgroundSize: "cover"}}
        >
          <div className="home-top-bg-inner-div">
            <Col md={12} className='card-col -margin-right -margin-bottom'>
              <p className='bottom-space base-text'>Driving towards better{' '}<br/>
                <span className='-highlighted-text' id='change-text'>{changingText[count % 3]}</span>{' '}Health.</p>
              <div className='para-text'>
                Resiliens is transforming behavioral health care by creating a seamless experience for clients,
                providers and employers. Using technology within the context of evidence based treatments, we
                connect clients to behavioral health providers and treatments that work, making the experience
                personalized and effective.
              </div>
            </Col>
            <Col md={12} className='card-col'>
              <img src={bannerGraphic} className='custom-image'/>
            </Col>
          </div>
        </Row>
    )
  }


};

export default Banner
