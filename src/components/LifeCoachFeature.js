import React from 'react'
import { Col, Row } from 'antd'
import ACT from '../assets/images/ACT-Record-diary.png'
import ACTCoach from '../assets/images/ACT-app-icon.png'
import CBTCompanion from '../assets/images/CBT_app_icon.png'
import DBTCoachScreen from '../assets/images/DBT-app-icon.png'
import VideoConference from '../assets/images/video-conference.png'
import Message from '../assets/images/messaging.png'

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
                    <div className='app-icons-title'>Integrates seamlessly with our popular apps:</div>
                    <div className='app-icons'>
                    <a href='https://play.google.com/store/apps/details?id=co.swasth.dbtcoach'>
                      <img className='custom-image'  src={DBTCoachScreen} alt='Therapy'/>
                      DBT Coach </a>
                    <a href='https://play.google.com/store/apps/details?id=co.swasth.cbtcompanion'>
                      <img className='custom-image'  src={CBTCompanion} alt='Therapy'/>
                      CBT Companion</a>
                    <a href='https://play.google.com/store/apps/details?id=co.swasth.actcoach'>
                      <img className='custom-image'  src={ACTCoach} alt='Therapy'/>
                      ACT Coach</a>
                    </div>
                    <br/>
                    <div className='app-icons-title'>Enables Telehealth:</div>
                    <div className='app-icons'>
                      <a>
                        <img className='custom-image'  src={Message} alt='Therapy'/>
                        Secure Messaging </a>
                      <a>
                        <img className='custom-image'  src={VideoConference} alt='Therapy'/>
                        Video Conferencing</a>
                    </div>
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
            <div className='card--feature card--feature-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <h3>
                  <a>Set up your library and reuse with multiple programs</a>
                </h3>
                <p style={{ textAlign: 'start' }}>
                  Get started by creating your workspace and adding documents, links etc. and then sharing them with different programs that you create.
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <h3>
                  <a>Never miss a deadline for you or your client.</a>
                </h3>
                <p style={{ textAlign: 'start' }}>
                  Set up one-time or recurring tasks for your clients as well as schedule teleconferences and webinars. Motivate your client to stay accountable and reach their goals!
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <h3>
                  <a>Accept payments for your sessions.</a>
                </h3>
                <p style={{ textAlign: 'start' }}>
                  Once you set up, you receive payments for your programs seamlessly. There is no need to set up a payment service for your program.
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={ACT}/>
                </a>
                <h3>
                  <a>Work with other coaches</a>
                </h3>
                <p style={{ textAlign: 'start' }}>
                  You can set up programs such that you can share your workload by appointing a co-coach so that when you are taking time off your clients have uninterrupted access to help.
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