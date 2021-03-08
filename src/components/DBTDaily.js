import React, { Fragment, useState } from 'react'
import { Col, Icon, Modal, Row } from 'antd'
import bannerGraphic from '../assets/images/Banner_graphic.png'
import therapyGraphic from '../assets/images/Therapy_graphic.png'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import Carousel from '../shared/carousel'
import { dbtdaily } from '../helper/helper'

const Banner = (props) => {
  const [visible, setVisible] = useState(false)
  const store = (
    <Row className='card-row -row-flex-center' style={{padding:'32px 32px 0px',display:'flex',flexDirection:'row'}}>
      <Col md={8}>
        <a href='https://apps.apple.com/us/app/dbt-daily/id1398462276'>
        <img src={appStore} alt='Therapy'/>
        </a>
      </Col>
      <Col md={8}>
        <a href={'https://play.google.com/store/apps/details?id=co.swasth.dbtdaily'}>
        <img src={googlePay} alt='Therapy'/>
        </a>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='app-section-group'>
        <Row className='card-row divider'>
          <Col md={12} className='card-col -margin-right'>
            <h1 className='-highlighted-secondary-text apps-title'>DBT Daily</h1>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
            <div >
              Swasth is transforming behavioral health care by creating a seamless experience for clients,
              providers and employers. Using technology within the context of evidence based treatments, we
              connect clients to behavioral health providers and treatments that work, making the experience
              personalized and effective.
            </div>
            <Row className='card-row' style={{padding:'32px 32px 0px',display:'flex',flexDirection:'row'}}>
              <Col md={8}>
                <a href='https://apps.apple.com/us/app/dbt-daily/id1398462276'>
                  <img src={appStore} alt='Therapy'/>
                </a>
              </Col>
              <Col md={8}>
                <a href={'https://play.google.com/store/apps/details?id=co.swasth.dbtdaily'}>
                  <img src={googlePay} alt='Therapy'/>
                </a>
              </Col>
            </Row>
            <Row>
              <a style={{fontSize:'24px'}} onClick={()=>setVisible(true)}><Icon type="video-camera"/> {' '}Watch a Video</a>
              <Modal
                visible={visible}
                className='video-modal-class'
                onCancel={()=>setVisible(false)}
              >
                {visible ?
                  <iframe
                    width='100%'
                    height={720}
                    className='iframe-video'
                    src="https://www.youtube.com/embed/xP6E0sSdTFE"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  >
                  </iframe>
                  :''}
              </Modal>
            </Row>
          </Col>
          <Col md={12} className='card-col'>
            <img src={bannerGraphic} className='custom-image'/>
          </Col>
        </Row>
      {/*  <Row className='card-row -row-flex-space-evenly'>
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
        </Row>*/}
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>AVAILABLE</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Cross
                    </span>{' '}
              Platform
            </h2>
            <div >
              Works seamlessly across multiple devices and platforms - iPhones, iPads, Android Phones and tablets.
              You can can even checkin diary card items and learn about DBT skills using your Alexa device.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>EASY TO FOLLOW</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Entries & Skill</span>{' '}details</h2>
            <div >
              Learn and practice DBT skills with detailed explanations with great examples helping you better understand and practice the skills.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>USE IT TO</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Record
                    </span>{' '}
            </h2>
            <div >
              Record your mood, skills, emotions, urges, behaviors, activities and journal multiple times a day.
            </div>
          </Col>
        </Row>

        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>GET INSIGHTS</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>Track </span>{' '}Progress</h2>
            <div >
              Track your progress with intuitive mood charts, different counts, check-in summary and gain insight from correlations.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>PRACTICE MINDFULNESS WITH</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Meditations
                    </span>
            </h2>
            <div >
              Over 1000 meditations ranging across multiple themes from some of the best teachers in the world.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>MANAGE CRISIS WITH</div>
            <h2 className='bottom-space'>
              Crisis
              <span className='-highlighted-text'>{' '}Survival</span>{' '} list</h2>
            <div >
              User friendly Crisis survival list, which you can tap into when you are undergoing a crisis. Lets you add skills or add your own items
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>STAY ON TOP OF EVERYTHING WITH</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Reminders
                    </span>
            </h2>
            <div >
              We provide a range of options to set multiple daily or weekly reminders for diary card entry, meditations or anything else to help you stay on top of DBT Skills.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>GET MOTIVATED WITH</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Affirmations</span></h2>
            <div >
              Affirmations are simple, positive statements that have profound effects on the mind. Easily manage the schedule for these affirmations.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={therapyGraphic}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={therapyGraphic} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>SHARE PROGRESS WITH THERAPIST AND CARE TEAM</div>
            <h2 className='bottom-space'>
                    <span className='-highlighted-text'>
                        Diary{' '}
                    </span>
              Card Summary
            </h2>
            <div >
              Share progress with your care team either via email or therapist portal. Intuitive design that helps your therapist gain insights quickly.
            </div>
          </Col>
        </Row>
        {/*<Row className='card-row'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-text'>{' '}Behavioral</span> Health.</h2>
            <div >
              Swasth is transforming behavioral health care by creating a seamless experience for clients,
              providers and employers. Using technology within the context of evidence based treatments, we
              connect clients to behavioral health providers and treatments that work, making the experience
              personalized and effective.
            </div>
          </Col>
          <Col md={8} className='card-col'>
            <img src={bannerGraphic}/>
          </Col>
        </Row>*/}

        <Row className='card-row' />
       {/* <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <div style={{textAlign:'center'}}>
                <h2 className='bottom-space'>Check out what our
                  <span className='-highlighted-secondary-text'>{' '}User are saying</span>{' '}about<span className='-highlighted-text'>{' '}Swasth</span> </h2>
                Millions of people around the world have already made swasth the place where their dream happens.
              </div>
            </Row>
          </Col>
        </Row>
        <Carousel reviews={dbtdaily}/>
        <div style={{textAlign:'center'}} className='all-testimonials divider'>
          <a className='-highlighted-secondary-text'>Check all testimonials</a>
        </div>*/}
        <Row className='card-row -row-flex-center -padding-zero divider'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <h5 className='bottom-space' style={{fontWeight:'600'}}>Frequently Asked Questions</h5>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  Can I Record Multiple time a day?
                </div>
                <div className='blog-user'>
                  Yes. You can record entries as many times as you like?.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  Can I share my diary card report?
                </div>
                <div className='blog-user'>
                  Yes. You can share your diary card with your therapist / care team. It also integrates to a therapist portal.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                 Do you have lessons for each skills?
                </div>
                <div className='blog-user'>
                  Yes and even more. There are over 100+ video lessons and 200+ animations.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  Do you have Practice Idea for each skill?
                </div>
                <div className='blog-user'>
                  We currently have practice ideas for most skills. It gives ideas on how you can practice these skills.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  What are mood correlation?
                </div>
                <div className='blog-user'>
                  They are top 5 items in each category (skills, targets, activities, sleep etc.) that correspond to a particular mood. It is what are the most common things you selected when you selected a particular mood.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  Do you have monthly subscription?
                </div>
                <div className='blog-user'>
                  Yes. We have a monthly subscription, but we don't believe anyone can learn DBT in a month. We offer a discounted six month subscription as well as a monthly subscription depending on your choice. We have a 3-day trial period during which you can access all areas of the app for free.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  How do I set reminders for different time on different days?
                </div>
                <div className='blog-user'>
                  You can set multiple reminders. For eg. you can set a daily reminder say at 8 AM. But also set a weekly reminder repeating on specific days at another time.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{color:'black'}}>
                  Can I do my homework or worksheets in app?
                </div>
                <div className='blog-user'>
                  Yes. If your provider is on our clinician app, they can assign you homework and assessments to you and you can complete and submit them all via the app.
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
