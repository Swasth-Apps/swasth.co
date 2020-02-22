import React from 'react'
import { Button, Row } from 'antd'

class LiveCoachFeature extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='feature-section-group'>
        <Row className='card-row'>
          <div className='cell'>
            <div className='well tac'>
              <h1>Swasth Case Studies</h1>
              <div>
                Learn how the worlds's top fitness professionals are using TrueCoach to save time and grow their
                businesses.
              </div>
            </div>
          </div>
        </Row>
        <div className='cell well'>

          <div className='has-studies well'>
            <div className='card card--callout study'>
              <blockquote>
                "Our coaches and clients expect the best from OPEX and TrueCoach is an integral part of what we offer
                them."
              </blockquote>
              <p className='mb2'>
                <strong style={{color:'#fff'}}>James FitzGerald</strong>
                <br/>
                <small>Founder of OPEX Fitness</small>
              </p>
            </div>
            <div className='card card--study card--vertical study'>
              <a
                title='Active Life Case Study'
                className='card-image'
                style={{ backgroundImage: 'url(\'https://truecoach.co/assets/images/case-studies/active_life.jpg\')' }}
              >
                <div className='card-title'>Active Life</div>
              </a>
              <div className='card-content'>
                <blockquote className='mb1'>"TrueCoach has increased our monthly revenue by over $55,000."</blockquote>
                <p className='mb2'>
                  <strong>Sean Pastuch</strong>
                  {' : '}
                  <small>Founder of Active Life</small>
                </p>
                <Button type='primary'>Read the case study</Button>
              </div>
            </div>
            <div className='card card--study card--horizontal study'>
              <a
                className='card-image'
                style={{ backgroundImage: 'url(\'https://truecoach.co/assets/images/case-studies/revival_strength.jpg\')' }}
              >
                <div className='card-title'>Active Life</div>
              </a>
              <div className='card-content'>
                <blockquote className='mb1'>"TrueCoach has increased our monthly revenue by over $55,000."</blockquote>
                <p className='mb2'>
                  <strong>Sean Pastuch</strong>
                  {' : '}
                  <small>Founder of Active Life</small>
                </p>
                <Button type='primary'>Read the case study</Button>
              </div>
            </div>
            <div className='card card--study card--vertical study'>
              <a  className='card-image'
                  style={{ backgroundImage: 'url(\'https://truecoach.co/assets/images/case-studies/opex_fitness.jpg\')' }}
              >
                <div className='card-title'>Active Life</div>
              </a>
              <div className='card-content'>
                <blockquote className='mb1'>"TrueCoach has increased our monthly revenue by over $55,000."</blockquote>
                <p className='mb2'>
                  <strong>Sean Pastuch</strong>
                  {' : '}
                  <small>Founder of Active Life</small>
                </p>
                <Button type='primary'>Read the case study</Button>
              </div>
            </div>
          </div>

          <div className='has-studies well'>
            <div className='card card--callout study'>
              <blockquote>
                "Our coaches and clients expect the best from OPEX and TrueCoach is an integral part of what we offer
                them."
              </blockquote>
              <p className='mb2'>
                <strong style={{color:'#fff'}}>James FitzGerald</strong>
                <br/>
                <small>Founder of OPEX Fitness</small>
              </p>
            </div>
            <div className='card card--study card--vertical study'>
              <a
                title='Active Life Case Study'
                className='card-image'
                style={{ backgroundImage: 'url(\'https://truecoach.co/assets/images/case-studies/active_life.jpg\')' }}
              >
                <div className='card-title'>Active Life</div>
              </a>
              <div className='card-content'>
                <blockquote className='mb1'>"TrueCoach has increased our monthly revenue by over $55,000."</blockquote>
                <p className='mb2'>
                  <strong>Sean Pastuch</strong>
                  {' : '}
                  <small>Founder of Active Life</small>
                </p>
                <Button type='primary'>Read the case study</Button>
              </div>
            </div>
            <div className='card card--study card--horizontal study'>
              <a
                className='card-image'
                style={{ backgroundImage: 'url(\'https://truecoach.co/assets/images/case-studies/revival_strength.jpg\')' }}
              >
                <div className='card-title'>Active Life</div>
              </a>
              <div className='card-content'>
                <blockquote className='mb1'>"TrueCoach has increased our monthly revenue by over $55,000."</blockquote>
                <p className='mb2'>
                  <strong>Sean Pastuch</strong>
                  {' : '}
                  <small>Founder of Active Life</small>
                </p>
                <Button type='primary'>Read the case study</Button>
              </div>
            </div>
            <div className='card card--study card--vertical study'>
              <a  className='card-image'
                  style={{ backgroundImage: 'url(\'https://truecoach.co/assets/images/case-studies/opex_fitness.jpg\')' }}
              >
                <div className='card-title'>Active Life</div>
              </a>
              <div className='card-content'>
                <blockquote className='mb1'>"TrueCoach has increased our monthly revenue by over $55,000."</blockquote>
                <p className='mb2'>
                  <strong>Sean Pastuch</strong>
                  {' : '}
                  <small>Founder of Active Life</small>
                </p>
                <Button type='primary'>Read the case study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LiveCoachFeature