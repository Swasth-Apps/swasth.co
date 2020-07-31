import React from 'react'
import { Row } from 'antd'
import ComingSoon from '../assets/images/coming-soon.png'

const CoachingComponent = (props) => {
  return (
    <section className='home-section-group coaching-coming-soon-section'>
    <Row>
     {/* <h2 className='bottom-space base-text'>Coming Soon <br/> </h2> */}
      <img src={ComingSoon} className='custom-image'/>
  </Row>
    </section>
)
}

export default CoachingComponent
