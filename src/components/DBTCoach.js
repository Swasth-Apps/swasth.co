import React, { Fragment, useState } from 'react'
import { Col, Row } from 'antd'
import bannerGraphic from '../assets/images/Banner_graphic.png'
import therapyGraphic from '../assets/images/Therapy_graphic.png'
import logo1 from '../assets/images/logo - 1.png'
import logo2 from '../assets/images/logo - 2.png'
import logo3 from '../assets/images/logo - 3.png'
import logo4 from '../assets/images/logo - 4.png'
import logo5 from '../assets/images/logo - 5.png'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'

const Banner = (props) => {
  const [app, setApp] = useState('dbt')
  const store = (
    <Row className='card-row -row-flex-center' style={{padding:'32px 32px 0px'}}>
      <Col md={8}>
        <img src={appStore} alt='Therapy'/>
      </Col>
      <Col md={8}>
        <img src={googlePay} alt='Therapy'/>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='home-section-group'>
        <Row className='card-row'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
            <div className='-justified-text'>
              Swasth is transforming behavioral health care by creating a seamless experience for clients,
              providers and employers. Using technology within the context of evidence based treatments, we
              connect clients to behavioral health providers and treatments that work, making the experience
              personalized and effective.
            </div>
          </Col>
          <Col md={8} className='card-col'>
            <img src={bannerGraphic}/>
          </Col>
        </Row>
        <Row className='card-row -row-flex-space-evenly'>
          <Col md={4}>
            <img src={logo1}/>
          </Col>
          <Col md={4}>
            <img src={logo2}/>
          </Col>
          <Col md={4}>
            <img src={logo3}/>
          </Col>
          <Col md={4}>
            <img src={logo4}/>
          </Col>
          <Col md={4}>
            <img src={logo5}/>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>EASY TO FOLLOW</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        DBT
                    </span>{' '}
              Lessons
            </h2>
            <div className='-justified-text'>
              Learn DBT skills with user-friendly videos and animations. There are over 100+ video lessons and 200+ animations.
            </div>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>USE IT TO</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Record Diary</span>{' '}Entries</h2>
            <div className='-justified-text'>
              Record your mood, skills, emotions, urges, behaviors, activities and journal multiple times a day.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>EASY TO FOLLOW</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Practice
                    </span>{' '}
              Exercises
            </h2>
            <div className='-justified-text'>
              Practice DBT using well-designed exercises that replaces worksheets. Leave your manual at home and do your exercises from anywhere.
            </div>
          </Col>
        </Row>

        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>TRACK & MANAGE WITH</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>Entries</span>{' '}Timeline</h2>
            <div className='-justified-text'>
              User-friendly timeline for entries, exercises, meditations etc. Manage your crisis survival skills and track how you use them.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>STAY ON TOP OF EVERYTHING WITH</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Reminders & Affirmation
                    </span>
            </h2>
            <div className='-justified-text'>
              We provide a range of options to set multiple daily or weekly reminders for diary card entry, meditations, affirmations or anything else to help you stay on top of DBT Skills.
            </div>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>EASY TO</div>
            <h2 className='bottom-space'>
              Share Your
              <span className='-highlighted-text'>{' '}Data</span></h2>
            <div className='-justified-text'>
              Share what you want to share with your provider and care team. Providers in our clinician app can see it in real-time. You can also share via email with who you choose.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>EVEN MORE FEATURES</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Engage
                    </span>
              {' and '}
              <span className='-highlighted-text'>
                        Stay-Upto-Date
                    </span>
            </h2>
            <div className='-justified-text'>
              Engage better with your provider by taking assessments, doing homeworks all in the app. Additional tools such as summary, quiz and meditations keep you up to date with your DBT practice.
            </div>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
            <div className='-justified-text'>
              Swasth is transforming behavioral health care by creating a seamless experience for clients,
              providers and employers. Using technology within the context of evidence based treatments, we
              connect clients to behavioral health providers and treatments that work, making the experience
              personalized and effective.
            </div>
          </Col>
          <Col md={8} className='card-col'>
            <img src={bannerGraphic}/>
          </Col>
        </Row>
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <h5 className='bottom-space' style={{fontWeight:'600'}}>Frequently Asked Questions</h5>
            </Row>
            <Row className='card-row -row-flex-space-between'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  Can I Record Multiple time a day?
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  Can I share my diary card report?
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                 Do you have lessons for each skills?
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  Do you have Practice Idea for each skill?
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  What are mood correlation?
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  Do you have monthly subscription?
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  How do I set reminders for different time on different days?
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user' style={{color:'black'}}>
                  Can I do my homework or worksheets in app?
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='card-row'>
          <Col md={24} className='dbt-box-container'>
            <Row className='card-row -row-flex-center dbt-box-border'>
              <div style={{textAlign:'center'}}>
                <h4 className='-font-bold'>Download Swasth Mobile App</h4>
                <div className='blog-user'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
                {store}
              </div>
            </Row>
          </Col>
        </Row>
      </section>
</Fragment>
)
}

export default Banner
