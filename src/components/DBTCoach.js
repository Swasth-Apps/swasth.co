import React, { Fragment, useState } from 'react'
import { Col, Icon, Modal, Row } from 'antd'
import bannerGraphic from '../assets/images/DBT-splash_iphone.png'
import lessons from '../assets/images/DBT-lessons.png'
import recordEntries from '../assets/images/DBT-record-diary.png'
import practiceExercises from '../assets/images/DBT-practice_exercises.png'
import entriesTimeline from '../assets/images/DBT-entries-timeline.png'
import reminders from '../assets/images/DBT-reminder-affirmation.png'
import shareData from '../assets/images/DBT-sharesetting_iphone.png'
import engage from '../assets/images/DBT-engage-and-stayuptodate.png'
import community from '../assets/images/DBT-community.png'

import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import Carousel from '../shared/carousel'
import { dbtcoach } from '../helper/helper'

const Banner = (props) => {
  const [visible, setVisible] = useState(false)
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
    <Fragment>
      <section className='app-section-group'>
        <Row className='card-row divider'>
          <Col md={12} className='card-col -margin-right'>
            <h1 className='-highlighted-secondary-text apps-title'>DBT Coach</h1>
            <h2 className='bottom-space'>A comprehensive app for
              <span className='-highlighted-text' style={{marginTop:'5px'}}>{' '}Dialectical Behavior Therapy</span> (DBT).</h2>
            <div >
              Learn, practice and track your DBT skills
              with DBT Coach App. Engage better with your Therapist using
              our comprehensive Behavioral Health Platform.
            </div>
            <Row className='card-row store-icons' style={{ padding: '32px 32px 0px', display: 'flex',flexDirection:'row' }}>
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
            <Row>
              <a style={{fontSize:'24px'}} onClick={()=>setVisible(true)}><Icon type="video-camera"/> {' '}Watch the Video</a>
              <Modal
                visible={visible}
                onCancel={()=>setVisible(false)}
                className='video-modal-class'
              >
                {visible ?
                  <iframe
                    width='100%'
                    height={720}
                    className='iframe-video'
                    src="https://www.youtube.com/embed/rzqiPaAxbgo?rel=0"
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
            <img src={bannerGraphic} className='custom-imagesk' />
          </Col>
        </Row>
        {/* <Row className='card-row -row-flex-space-evenly'>
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
            <img className='custom-image' src={lessons} alt='Therapy' />
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>EASY TO FOLLOW</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>
                DBT
                    </span>{' '}
              Lessons
            </h2>
            <div >
              Learn DBT skills with user-friendly videos and animations. There are over 100+ video lessons and 200+ animations.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>USE IT TO</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Record Diary</span>{' '}Entries</h2>
            <div >
              Record your mood, skills, emotions, urges, behaviors, activities and journal multiple times a day.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={recordEntries} />
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={practiceExercises} alt='Therapy' />
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>EASY TO FOLLOW</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>
                Practice
                    </span>{' '}
              Exercises
            </h2>
            <div >
              Practice DBT using well-designed exercises that replaces worksheets. Leave your manual at home and do your exercises from anywhere.
            </div>
          </Col>
        </Row>

        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>TRACK & MANAGE WITH</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>Entries</span>{' '}Timeline</h2>
            <div >
              User-friendly timeline for entries, exercises, meditations etc. Manage your crisis survival skills and track how you use them.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={entriesTimeline} />
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={reminders} alt='Therapy' />
          </Col>
          <Col md={12}>
            <div className='-highlighted-secondary-text semi-title'>STAY ON TOP OF EVERYTHING WITH</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>
                Reminders & Affirmation
                    </span>
            </h2>
            <div >
              We provide a range of options to set multiple daily or weekly reminders for diary card entry, meditations, affirmations or anything else to help you stay on top of DBT Skills.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>EASY TO</div>
            <h2 className='bottom-space'>
              Share Your
              <span className='-highlighted-text'>{' '}Data</span></h2>
            <div >
              Share what you want to share with your provider and care team. Providers in our clinician app can see it in real-time. You can also share via email with who you choose.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={shareData} />
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={engage} alt='Engagement tools' />
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
            <div >
              Engage better with your provider by taking assessments, doing homeworks all in the app. Additional tools such as summary, quiz and meditations keep you up to date with your DBT practice.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <div className='-highlighted-secondary-text semi-title'>JOIN THE</div>
            <h2 className='bottom-space'>
              <span className='-highlighted-text'>{' '}Community</span></h2>
            <div >
              Come join the DBT Community. There are discussion forums where you can discuss about DBT skill application and anything DBT. Further, use existing Peer Groups or create your own to support each other.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={community} />
          </Col>
        </Row>
        <Row className='card-row' />
        <Row className='card-row -row-flex-center divider'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <div style={{ textAlign: 'center' }}>
                <h2 className='bottom-space'>
                  <span className='-highlighted-secondary-text'>{' '}Testimonials</span>{' '}about<span className='-highlighted-text'>{' '}DBT Coach</span> </h2>
                Over 200,000 users have already benefited from DBT Coach.
              </div>
            </Row>
          </Col>
        </Row>
        <Carousel reviews={dbtcoach} />
        <div className='divider' />
        {/*<div style={{textAlign:'center'}} className='all-testimonials divider'>
          <a className='-highlighted-secondary-text'>Check all testimonials</a>
      </div> */}
        <Row className='card-row -row-flex-center divider -padding-zero'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <h3 className='bottom-space' style={{ fontWeight: '600' }}>Frequently Asked Questions</h3>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  Can I record multiple times a day?
                </div>
                <div className='blog-user'>
                  Yes. You can record entries as many times as you like. All entries, exercises etc. are shown in clean timeline view.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  Can I share my diary card report?
                </div>
                <div className='blog-user'>
                  Yes. You can share your diary card with your therapist and care team. It also integrates to a therapist portal.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  Do you have lessons for each skill?
                </div>
                <div className='blog-user'>
                  Yes and even more. There are over 100+ video lessons and 200+ animations.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  Do you have Practice Idea for each skill?
                </div>
                <div className='blog-user'>
                  We currently have practice ideas for most skills. It gives ideas on how you can practice these skills.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  How do I set reminders for different time on different days?
                </div>
                <div className='blog-user'>
                  You can set multiple reminders. For eg. you can set a daily reminder say at 8 AM. But also set a weekly reminder repeating on specific days at another time.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  What are mood correlations?
              </div>
                <div className='blog-user'>
                  They are top 5 items in each category (skills, targets, activities, sleep etc.) that correspond to a particular mood. They help your draw insights from the most common things you did when you were in a particular mood.
              </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  Can I do my homework or exercises in the app?
                </div>
                <div className='blog-user'>
                  Yes. If your provider is on our clinician app, they can assign you homework, practice ideas, exercises and assessments to you and you can complete and submit them all via the app. You can choose what to share with your clinician and he / she can see it in the clinician app.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold' style={{ color: 'black' }}>
                  Do you have monthly subscription?
                </div>
                <div className='blog-user'>
                  Yes. We have a monthly subscription, but we don't believe anyone can learn DBT in a month. We offer a discounted six month subscription as well as a monthly subscription depending on your choice. We have a 3-day trial period during which you can access all areas of the app for free.
                </div>
              </Col>
            </Row>
           
          </Col>
        </Row>

        <Row className='card-row divider mobile-app-container -row-flex-center'>
          <Col md={24} className='dbt-box-container'>
            <Row className='card-row -row-flex-center dbt-box-border'>
              <div style={{ textAlign: 'center' }}>
                <h4 className='-font-bold'>Download <span className='-highlighted-secondary-text'>{' '}DBT Coach</span> App</h4>
                <div className='blog-user'>The most comprehensive app for Dialectical Behavior Therapy. Come on join and be part of the community! </div>
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
