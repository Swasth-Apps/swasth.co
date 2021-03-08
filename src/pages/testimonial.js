import React, { Fragment } from 'react'
import { Row } from 'antd'
import { testimonials } from '../components/testimonialData'
import Layout from '../components/Layout/layout.js'

const Testimonial = (props) => {
  return (
    <Fragment>
      <Layout>
          <div
              id='wrapper'
              className={'coach-wrapper'}
              style={{paddingBottom: 0}}
          >
      <section className='home-section-group all-testimonial-section'>
        <Row>
          <h2 style={{ textAlign: 'center' }} className='base-text'> <span className='-highlighted-secondary-text'>Testimonials</span>
          </h2>
        </Row>
        <Row gutter={24} className='second-fold-row' style={{ marginTop: 20 }}>
          <div className='cell well user-testimonial'>
            <div className='grid grid--3 well--m mt4 pricing-relative'>
              {testimonials?.map((item, i) =>
                <div className={`card card--vertical card--starter pricing-relative life-coach-grid-section`}>
                  <div className='card-text'>
                    <img src={item.img} />
                    <p className='para-text navy-text line-clamp-para' style={{fontSize: 16}}>{item.desc}</p>
                    {/*<a className='para-text more-link-text' onClick={() => handleTestimonial(i)}>{i === testimonial ? 'READ LESS' :'READ MORE'}</a>*/}
                    <span className='-font-bold user-img navy-text'>
                      <div className="user-info"><img src={item.user} /><strong className="para-text">{item.name}</strong></div>
                                        <strong className="para-text">{item.userType}</strong>

                      </span>
                  </div>
                </div>)}
            </div>
          </div>
        </Row>
      </section>
          </div>
      </Layout>
    </Fragment>
  )
}

export default Testimonial
