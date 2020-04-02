import React from 'react'
import { Col, Row } from 'antd'
import BannerLogo from '../assets/images/banner-image.png'
import CreateProgram from '../assets/images/create-programs-and-sessions@3x.png'
import SetupLibrary from '../assets/images/library-and-reuse.png'
import PaymentLogo from '../assets/images/payment@3x.png'
import WorkWithCoach from '../assets/images/work-with-coach@3x.png'
import EvidenceBased from '../assets/images/evidence-based-apps@3x.png'
import NeverMissedDetails from '../assets/images/calender@3x.png'
import ACTCoach from '../assets/images/ACT-app-icon.png'
import CBTCompanion from '../assets/images/CBT_app_icon.png'
import DBTCoachScreen from '../assets/images/DBT-app-icon.png'
import VideoConference from '../assets/images/video-conference.png'
import Message from '../assets/images/messaging.png'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'

class CoachDownload extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const store = (
      <Row className='card-row -row-flex-center store-icons' style={{ padding: '32px 32px 0px', display: 'flex',flexDirection:'row' }}>
        <Col md={8}>
          <a href="https://apps.apple.com/us/app/dbt-coach/id1452264969">
            <img src={appStore} alt='DBT Coach on App Store' />
          </a>

        </Col>
        <Col md={8}>
          <a href="https://play.google.com/store/apps/details?id=co.swasth.dbtcoach">
            <img src={googlePay} alt='DBT Coach on Play Store' />
          </a>
        </Col>
      </Row>
    )
    return (
      <section className='coaching-download'>
        <Row className='card-row' style={{justifyContent:'center'}}>
          <div className='cell'>
            <div className='well tac coach-heading'>
              <h1>Health Journey. Simplified.</h1>
              {store}
            </div>
          </div>
        </Row>
      </section>
    )
  }
}

export default CoachDownload