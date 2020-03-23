import React from 'react'
import { Row } from 'antd'
import BannerLogo from '../assets/images/banner-image.png'
import CreateProgram from '../assets/images/create-programs-and-sessions@3x.png'
import SetupLibrary from '../assets/images/setup-library@3x.png'
import PaymentLogo from '../assets/images/payment@3x.png'
import WorkWithCoach from '../assets/images/work-with-coach@3x.png'
import EvidenceBased from '../assets/images/evidence-based-apps@3x.png'
import NeverMissedDetails from '../assets/images/never-miss-deadline@3x.png'
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
            <div className='well tac coach-heading'>
              <h2>The only coaching Platform for Evidence-Based Behavioral Health</h2>
              <p className='font-proxima-nova'>Health and Wellness coach practice management solution that enables coaches to holistically lead their clients, connecting mind, body and soul through behavior modification and accountability tools towards outcomes.</p>
            </div>
          </div>
        </Row>
        <div className='cell well' style={{marginBottom: 0}}>
          <div>
            <div className='card card--feature remove-width'>
              <div className='card-content'>
                <a href='#'>
                  <img src={BannerLogo}/>
                </a>
                <div style={{width:'100%'}}>
                  <h2 style={{marginBottom:10}}>
                    <a><b>The easiest way to bring evidence-based therapies to your clients.</b></a>
                  </h2>
                  <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
                    Set up group and individual programs, accept payments, sign contracts - everything needed to run a successful practice.
                    <div className='app-icons-title font-proxima-nova'>Integrates seamlessly with our popular apps:</div>
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
                    <div className='app-icons-title font-proxima-nova'>Enables Telehealth:</div>
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
        <div className='cell well'>
          <div className='grid two-grid'>
            <div className='card--feature card--feature-shadow coaching-box-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={CreateProgram}/>
                </a>
                <h3>
                  <a>Create Programs and Add Sessions</a>
                </h3>
                <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
                  Get started by adding your Program and schedule sessions for individuals and groups. Add content from your library or from our apps
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow coaching-box-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={EvidenceBased}/>
                </a>
                <h3>
                  <a>Seamlessly integrates with our Evidence-based Apps</a>
                </h3>
                <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
                  You can add content from our apps such as DBT Coach, CBT Companion, ACT Coach and assign lessons, exercises etc. as homework for the session.
                  Also view your clients' progress.
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow coaching-box-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={SetupLibrary}/>
                </a>
                <h3>
                  <a>Set up your library and reuse with multiple programs</a>
                </h3>
                <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
                  Get started by creating your workspace and adding documents, links etc. and then sharing them with different programs that you create.
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow coaching-box-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={NeverMissedDetails}/>
                </a>
                <h3>
                  <a>Never miss a deadline for you or your client.</a>
                </h3>
                <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
                  Set up one-time or recurring tasks for your clients as well as schedule teleconferences and webinars. Motivate your client to stay accountable and reach their goals!
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow coaching-box-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={PaymentLogo}/>
                </a>
                <h3>
                  <a>Accept payments for your sessions.</a>
                </h3>
                <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
                  Once you set up, you receive payments for your programs seamlessly. There is no need to set up a payment service for your program.
                </p>
              </div>
            </div>
            <div className='card--feature card--feature-shadow coaching-box-shadow'>
              <div className='card-content'>
                <a href='#'>
                  <img src={WorkWithCoach}/>
                </a>
                <h3>
                  <a>Work with other coaches</a>
                </h3>
                <p style={{ textAlign: 'start' }} className='font-proxima-nova'>
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