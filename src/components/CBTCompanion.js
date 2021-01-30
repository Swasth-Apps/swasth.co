import React, { Fragment, useState } from 'react'
import {Col, Row, Modal, Icon, Button} from 'antd'
import bannerGraphic from '../assets/images/CBT-splash.png'
import lessons from '../assets/images/CBT-lessons.png'
import recordEntries from '../assets/images/CBT-Record-diary.png'
import practiceExercises from '../assets/images/CBT-Practice-exercises.png'
import entriesTimeline from '../assets/images/CBT-entriestimeline.png'
import reminders from '../assets/images/DBT-reminder-affirmation.png'
import shareData from '../assets/images/CBT-sharesetting_iphone.png'
import engage from '../assets/images/CBT-engage-and-stayuptodate.png'
import community from '../assets/images/CBT-community.png'
import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'
import Carousel from '../shared/carousel'
import { dbtdaily } from '../helper/helper'

const CBTCompanion = (props) => {
  const [visible, setVisible] = useState(false)
  const store = (
    <Row className='card-row -row-flex-center store-icons'
         style={{ padding: '32px 32px 0px', display: 'flex', flexDirection: 'row' }}>
      <Col md={8}>
        <a href="https://apps.apple.com/us/app/cbt-companion/id1445499245">
          <img src={appStore} alt='CBT Companion on App Store'/>
        </a>

      </Col>
      <Col md={8}>
        <a href="https://play.google.com/store/apps/details?id=co.swasth.cbtcompanion">
          <img src={googlePay} alt='CBT Companion on Play Store'/>
        </a>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='app-section-group'>
        <Row className='card-row divider'>
          <Col md={12} className='card-col -margin-right'>
            <h1 className='-highlighted-cbt-text apps-title base-text'>CBT Companion</h1>
            <h2 className='bottom-space base-text'><span className='-highlighted-cbt-secondary-text'>{' '}Change</span> your <span
              className='-highlighted-cbt-text'>{' '}Feelings</span> and <span
              className='-highlighted-cbt-text'>{' '}Behavior</span> by <span
              className='-highlighted-cbt-secondary-text'>{' '}Changing</span> your
              <span className='-highlighted-cbt-text'>{' '}Thoughts</span>.</h2>
            <div className="black-18-font">
              Learn about Cognitive Behavioral Therapy (CBT), Challenge Negative Thoughts, Track moods, emotions,
              activities etc. Engage better with your Therapist using
              our comprehensive Behavioral Health Platform.
            </div>
            <div>
              {/*<Row className='card-row store-icons'
                   style={{ padding: '32px 32px 0px', display: 'flex', flexDirection: 'row' }}>
                <Col md={8}>
                  <a href="https://apps.apple.com/us/app/cbt-companion/id1445499245">
                    <img src={appStore} alt='CBT Companion on App Store'/>
                  </a>

                </Col>
                <Col md={8}>
                  <a href="https://play.google.com/store/apps/details?id=co.swasth.cbtcompanion">
                    <img src={googlePay} alt='CBT Companion on Play Store'/>
                  </a>
                </Col>
              </Row>*/}
              <Row>
                <Button className="request-demo-btn" onClick={()=>setVisible(true)} style={{margin: "20px 0"}}>Watch the Video</Button>
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
                    src="https://www.youtube.com/embed/8s4QB4lBr_g"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  >
                  </iframe>
                    :''}
                </Modal>
              </Row>
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img src={bannerGraphic} className='custom-imagesk' style={{width:"100%"}}/>
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
            <img className='custom-image' src={lessons} alt='Therapy'/>
          </Col>
          <Col md={12}>
            {/*<div className='-highlighted-cbt-secondary-text semi-title base-text'></div>*/}
            <h2 className='bottom-space base-text'>
              Easy To Follow {' '}
                    <span className='-highlighted-cbt-text'>
                        CBT
                    </span>{' '}
              Lessons
            </h2>
            <div className="para-text black-18-font">
              Learn CBT skills with user-friendly videos and animations. These help you to learn quicker and retain
              longer.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            {/*<div className='-highlighted-cbt-secondary-text semi-title base-text'></div>*/}
            <h2 className='bottom-space base-text'>
              Use It To {' '}
              <span className='-highlighted-cbt-text'>{' '}Record Diary</span>{' '} Entries</h2>
            <div className="black-18-font">
              Record your mood, skills, emotions, urges, behaviors, activities and journal multiple times a day.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={recordEntries}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={practiceExercises} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <h2 className='bottom-space base-text'>
              Easy To Follow {' '}
              <span className='-highlighted-cbt-text'>
                       Practice Exercises
                    </span>{' '}
            </h2>
            <div className="black-18-font">
              Practice CBT using well-designed exercises that replaces worksheets. Leave your manual at home and do your
              exercises from anywhere.
            </div>
          </Col>
        </Row>

        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <h2 className='bottom-space base-text'>
              Track And Manage With {' '}
              <span className='-highlighted-cbt-text'>Entries </span>{' '}Timeline</h2>
            <div className="black-18-font">
              Track your progress with intuitive mood charts, different counts, check-in summary and gain insight from
              correlations.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={entriesTimeline}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={shareData} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <h2 className='bottom-space base-text'>
              Easy To {' '}
              <span className='-highlighted-cbt-text'>
                       Share your data
                    </span>
            </h2>
            <div className="black-18-font">
              Share what you want to share with your provider and care team. Providers in our clinician app can see it
              in real-time. You can also share via email with who you choose.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <h2 className='bottom-space base-text'>
              Stay On Top Of Everything{' '}

              <span className='-highlighted-cbt-text'>{' '}Reminders & Affirmations</span></h2>
            <div className="black-18-font">
              We provide a range of options to set multiple daily or weekly reminders for diary card entry, meditations,
              affirmations or anything else to help you stay on top of CBT Skills.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={reminders}/>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={engage} alt='Therapy'/>
          </Col>
          <Col md={12}>
            <h2 className='bottom-space base-text'>
              Even More Features{' '}
                    <span className='-highlighted-cbt-text'>
                        Engage
                    </span>
              {' and '}
              <span className='-highlighted-cbt-text'>
                        stay up-to-date
                    </span>
            </h2>
            <div className="black-18-font">
              Engage better with your provider by taking assessments, doing homeworks all in the app. Additional tools
              such as summary, quiz and meditations keep you up to date with your CBT practice.
            </div>
          </Col>
        </Row> {/*<Row className='card-row'>
          <Col md={8} className='card-col -margin-right'>
            <h2 className='bottom-space'>Driving towards better
              <span className='-highlighted-cbt-text'>{' '}Behavioral</span> Health.</h2>
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

        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <h2 className='bottom-space base-text'>
              Join The {' '}
              <span className='-highlighted-cbt-text'>{' '}Community</span></h2>
            <div className="black-18-font">
              Come join the CBT Community. There are discussion forums where you can discuss about CBT skill application
              and anything CBT. Further, use existing Peer Groups or create your own to support each other.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={community}/>
          </Col>
        </Row>
        <Row className='card-row'/>
        <Row className='card-row -row-flex-center'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <div style={{ textAlign: 'center' }}>
                <h2 className='bottom-space base-text'>
                  <span className='-highlighted-cbt-secondary-text'>{' '}Testimonials</span>{' '}about<span
                  className='-highlighted-cbt-text'>{' '}CBT Companion</span></h2>
              </div>
            </Row>
          </Col>
        </Row>
        <Carousel reviews={dbtdaily}/>
        {/*<div style={{textAlign:'center'}} className='all-testimonials divider'>
        <a className='-highlighted-cbt-secondary-text'>Check all testimonials</a>
    </div> */}
        <div className='divider'/>
        <Row className='card-row -row-flex-center divider -padding-zero'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <h3 className='bottom-space base-text' style={{ fontWeight: '600' }}>Frequently Asked Questions</h3>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Can I record multiple times a day?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. You can record entries as many times as you like. All entries, exercises etc. are shown in clean
                  Timeline view.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Can I share my daily entries?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. You can share your entries with your therapist and care team. It also integrates to a Therapist /
                  Clinician portal.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Do you have lessons for each skill?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes and even more. There are over 70+ video lessons and animations.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Do you have Practice Idea for each skill?
                </div>
                <div className='blog-user black-18-font para-text'>
                  We currently have practice ideas for most skills. It gives ideas on how you can practice these skills.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  How do I set reminders for different time on different days?
                </div>
                <div className='blog-user black-18-font para-text'>
                  You can set multiple reminders. For eg. you can set a daily reminder say at 8 AM. But also set a
                  weekly reminder repeating on specific days at another time.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  What are mood correlations?
                </div>
                <div className='blog-user black-18-font para-text'>
                  They are top 5 items in each category (skills, targets, activities, sleep etc.) that correspond to a
                  particular mood. They help your draw insights from the most common things you did when you were in a
                  particular mood.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Can I do my homework or exercises in the app?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. If your provider is on our clinician app, they can assign you homework, practice ideas, exercises
                  and assessments to you and you can complete and submit them all via the app. You can choose what to
                  share with your clinician and he / she can see it in the clinician app.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Do you have monthly subscription?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. We have a monthly subscription, but we don't believe anyone can learn CBT in a month. We offer a
                  discounted six month subscription as well as a monthly subscription depending on your choice. We have
                  a 3-day trial period during which you can access all areas of the app for free.
                </div>
              </Col>
            </Row>

          </Col>
        </Row>

        <Row className='card-row mobile-app-container -row-flex-center'>
          <Col md={24} className='dbt-box-container'>
            <Row className='card-row -row-flex-center dbt-box-border'>
              <div style={{ textAlign: 'center' }}>
                <h4 className='-font-bold base-text'>Download <span
                  className='-highlighted-cbt-text'>{' '}CBT Companion </span> App</h4>
                <div className='blog-user black-18-font para-text'>The only app that has everything about Cognitive Behavioral Therapy. Join and
                  be part of the community!
                </div>
                {store}
              </div>
            </Row>
          </Col>
        </Row>
      </section>
    </Fragment>
  )
}

export default CBTCompanion
