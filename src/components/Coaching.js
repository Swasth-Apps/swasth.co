import React from 'react'
import { Row } from 'antd'
import UnderConstruction from '../assets/images/under_construction.png'

const CoachingComponent = (props) => {
  return (
    <section className='home-section-group coaching-coming-soon-section'>
    <Row>
      <h2 className='bottom-space base-text'>Coming Soon <br/> </h2>
      <img src={UnderConstruction} className='custom-image'/>
  </Row>
    </section>
)
}

export default CoachingComponent
