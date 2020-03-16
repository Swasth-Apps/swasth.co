import React from 'react'
import { Row } from 'antd'
import ACT from '../assets/images/ACT-Record-diary.png'

class LifeCoachFeature extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='feature-section-group'>
        <Row className='card-row' style={{justifyContent:'center'}}>
          <div className='cell'>
            <div className='well tac'>
              <h2>The only coaching Platform for Evidence-Based Behavioral Health</h2>
            </div>
          </div>
        </Row>
        <div className='cell well'>
          <div>
            <div className='card card--feature remove-width'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <div style={{width:'100%'}}>
                  <h2 style={{marginBottom:10}}>
                    <a><b>The easiest way to bring evidence-based therapies to your clients.</b></a>
                  </h2>
                  <p style={{ textAlign: 'start' }}>
                    Set up group and individual programs, accept payments, sign contracts - everything needed to run a successful practice.
                    <br/>
                    Integrates seamlessly with our popular apps: DBT Coach     CBT Companion       ACT Coach
                    <br/>
                    Enables Telehealth:    Secure Messaging   &nbsp;    Video Conferencing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='cell well updivider'>
          <h2>
            A comprehensive set of features to make your coaching experience engaging, effective and fulfilling.
          </h2>
          <div className='grid two-grid'>
            <div className='card--feature card--feature-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <h3>
                  <a>Create Programs and Add Sessions</a>
                </h3>
                <p style={{ textAlign: 'start' }}>
                  Get started by adding your Program and schedule sessions for individuals and groups. Add content from your library or from our apps
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <h3>
                  <a>Seamlessly integrates with our Evidence-based Apps</a>
                </h3>
                <p style={{ textAlign: 'start' }}>
                  You can add content from our apps such as DBT Coach, CBT Companion, ACT Coach and assign lessons, exercises etc. as homework for the session.
                  Also view your clients' progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LifeCoachFeature