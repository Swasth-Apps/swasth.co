import React, {Fragment, useState} from 'react'
import {Button, Col, Modal, Row} from 'antd'
import bannerGraphic from '../assets/images/MI_Dashboard.png'
import sessions from '../assets/images/MI_Session.png'
import lessons from '../assets/images/MI_Lessons.png'
import recordEntries from '../assets/images/MI_DailyTracking.png'
import assessments from '../assets/images/MI_Assesment.png'
import exercises from '../assets/images/MI_Exercise.png'
import journal from '../assets/images/MI_Journal.png'
import entriesTimeline from '../assets/images/MI_Entries.png'
import breathingExercise from '../assets/images/MI_Breathing.png'
import meditation from '../assets/images/MI_Meditation.png'
import summary from '../assets/images/MI_Summary.png'
import moreScreen from '../assets/images/MI_MoreScreen.png'
import community from '../assets/images/MI_Community.png'

import appStore from '../assets/images/app-store.png'
import googlePay from '../assets/images/google-play.png'

const Banner = (props) => {
  const [visible, setVisible] = useState(false)
  const store = (
    <Row className='card-row -row-flex-center store-icons' style={{ padding: '32px 0px 15px', display: 'flex',flexDirection:'row' }}>
      <Col md={4} style={{marginRight: 15}}>
        <a href="https://apps.apple.com/us/app/mi-coach/id1572316783">
          <img src={appStore} alt='MI Coach on App Store' />
        </a>

      </Col>
      <Col md={4}>
        <a href="https://play.google.com/store/apps/details?id=com.resiliens.miapp">
          <img src={googlePay} alt='MI Coach on Play Store' />
        </a>
      </Col>
    </Row>
  )
  return (
    <Fragment>
      <section className='app-section-group'>
        <Row className='card-row divider'>
          <Col md={12} className='card-col -margin-right'>
            <h1 className='-highlighted-secondary-text apps-title base-text'>MI Coach</h1>
            <p className='bottom-space base-text'>A comprehensive app for
              <span className='-highlighted-text base-text' style={{marginTop:'5px'}}>{' '}finding your motivation for change</span>.</p>
            <div className="para-text black-18-font">
            Learn about Motivational Interviewing (MI), enhance your motivation and practice behavior change skills with MI Coach App. Engage better with your Therapist using our comprehensive Behavioral Health Platform.
            </div>
          {/*  <Row className='card-row store-icons' style={{ padding: '32px 32px 0px', display: 'flex',flexDirection:'row' }}>
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
            </Row>*/}
            <Row>

              <Row
                  className='card-row -row-flex-center store-icons'
                  style={{ padding: '32px 0 0px', display: 'flex',flexDirection:'row',justifyContent:"flex-start" }}
              >
                <Col md={6} style={{marginRight: 15}}>
                  <a href="https://apps.apple.com/us/app/mi-coach/id1572316783">
                    <img src={appStore} alt='MI Coach on App Store' />
                  </a>
                </Col>
                <Col md={6}>
                  <a href="https://play.google.com/store/apps/details?id=com.resiliens.miapp">
                    <img src={googlePay} alt='MI Coach on Play Store' />
                  </a>
                </Col>
              </Row>
              <Button
                  className="request-demo-btn"
                  onClick={()=>setVisible(true)}
                  style={{margin: "20px 0"}}
              >
                Watch the Video
              </Button>
              {/*<a style={{fontSize:'24px'}} className="base-text black-18-font" onClick={()=>setVisible(true)}><Icon type="video-camera"/> {' '}Watch the Video</a>*/}
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
                    src="https://d2ot3z5xcrn0h2.cloudfront.net/videos/MICoach/mi-coach-welcome.mp4"
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
            <img src={bannerGraphic} className='custom-imagesk' style={{width: "100%"}}/>
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
            <img className='custom-image' src={sessions} />
          </Col>
          <Col md={12}>
            <h2 className='bottom-space'>
              <span className='-highlighted-text base-text'>Sessions{' '}</span>{' '}</h2>
            <div className="para-text black-18-font">
              Comprehensive sessions by our expert on Motivational Interviewing  and how it can be used for behavior change at your own pace. All the learning materials are organized cleanly into different sessions by topic with lessons and activities.
            </div>
          </Col>
        </Row>

        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <h2 className='bottom-space'>
              <span className='-highlighted-text base-text'>Daily Checkin {' '}</span>{' '}& Tracking</h2>
            <div className="para-text black-18-font">
              Record your mood, behavior change measures, track your behaviors and journal multiple times a day.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={recordEntries} />
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={lessons} alt='Therapy' />
          </Col>
         <Col md={12}>
            <h2 className='bottom-space'>
              <span className='-highlighted-text base-text'>Video{' '}</span>{' '}guided lessons</h2>
            <div className="para-text black-18-font">
              Learn about Motivational Interviewing with our MI Expert by following sessions organized by different topics to help with behavior change.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <p className='bottom-space'>
              <span className='-highlighted-text base-text'>
               Easy to Follow
                    </span>{' '}
              Exercises
            </p>
            <div className="para-text black-18-font">
              Practice MI skills using our well-designed, user-friendly exercises. You can do your exercises anytime from anywhere.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={exercises} alt='Therapy' />
          </Col>
        </Row>

          <Row className='card-row divider'>
            <Col md={12} className='-margin-right'>
              <img className='custom-image' src={journal} />
            </Col>
            <Col md={12}>
              <p className='bottom-space'>
              <span className='-highlighted-text base-text'>
                               Journal
              </span>{' '}your thoughts </p>
            <div className="para-text black-18-font">
              You can journal your thoughts daily or multiple times a day and upload pictures and videos to help with your behavior change journey.
            </div>
          </Col>
        </Row>


          <Row className='card-row divider'>
            <Col md={12} className='-margin-right'>
              <p className='bottom-space'>
              <span className='-highlighted-text base-text'>
               Easy to Follow
                    </span>{' '}
               Assessments
             </p>
             <div className="para-text black-18-font">
               Track your progress and measure outcome to share with your clinician using our user-friendly quiz and standardized assessments.
             </div>
           </Col>
           <Col md={12} className='card-col'>
            <img className='custom-image' src={assessments} alt='Assessments' />
          </Col>
        </Row>

        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={entriesTimeline} />
          </Col>
          <Col md={12}>
            <p className='bottom-space'>
              <span className='-highlighted-text base-text'>Track & Manage with Entries</span>{' '}Timeline</p>
            <div className="para-text black-18-font">
              User-friendly timeline for entries, change measures, behavior tracking, exercises, meditations etc.
            </div>
          </Col>
        </Row>

        <Row className='card-row divider'>
          <Col md={12} className="-margin-right">
            <p className='bottom-space base-text'>
              Feel better with{' '}
              <span className='-highlighted-text'>
                Breathing Exercises
                    </span>
            </p>
            <div className="para-text black-18-font">
              We provide a range of options and guided techniques to practice breathing exercises. You can choose what works best for you.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={breathingExercise} alt='Breathing Exercise' />
          </Col>
        </Row>
        <Row className='card-row divider'>
          <Col md={12} className='-margin-right'>
            <p className='bottom-space base-text'>
              Easy to summarize
              <span className='-highlighted-text'>{' '}Data</span></p>
            <div className="para-text black-18-font">
              Share what you want to share with your provider and care team. Providers in our clinician app can see it in real-time. You can also share via email with who you choose.
            </div>
          </Col>
          <Col md={12} className='card-col'>
            <img className='custom-image' src={summary} />
          </Col>
        </Row>
        <Row className='card-row divider'>

          <Col md={12} className='-margin-right'>
            <img className='custom-image' src={meditation} />
          </Col>
          <Col md={12}>
              <p className='bottom-space base-text'>
              <span className='-highlighted-text'>{' '}Meditations</span></p>
            <div className="para-text black-18-font">
              Choose from a library of 500+ meditations created by world's leading meditation teachers.
            </div>
          </Col>
        </Row>
        <Row className='card-row divider'>

          <Col md={12}  className='-margin-right'>
            <p className='bottom-space base-text'>
              Join the
              <span className='-highlighted-text'>{' '}Community</span></p>
            <div className="para-text black-18-font">
              Come join the MI Coach Community. There are discussion forums where you can discuss MI skills application and anything MI, motivation, commitment and change. Further, use existing Peer Groups or create your own to support each other.
            </div>
          </Col>
          <Col md={12}  className='card-col'>
            <img className='custom-image' src={community} />
          </Col>
        </Row>

          <Row className='card-row' />
          {/* <Row className='card-row -row-flex-center divider'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <div style={{ textAlign: 'center' }} className="para-text black-18-font">
                <p className='bottom-space base-text'>
                  <span className='-highlighted-secondary-text '>{' '}Testimonials</span>{' '}about<span className='-highlighted-text'>{' '}DBT Coach</span> </p>
                Over 200,000 users have already benefited from DBT Coach.
              </div>
            </Row>
          </Col>
        </Row>
        <Carousel reviews={dbtcoach} />*/}
          {/*<div style={{textAlign:'center'}} className='all-testimonials divider'>
          <a className='-highlighted-secondary-text'>Check all testimonials</a>
      </div> */}
      {/*  <Row className='card-row -row-flex-center divider -padding-zero'>
          <Col md={24}>
            <Row className='card-row -row-flex-center'>
              <p className='bottom-space base-text' style={{ fontWeight: '600' }}>Frequently Asked Questions</p>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Can I record multiple times a day?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. You can record entries as many times as you like. All entries, exercises etc. are shown in clean timeline view.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user base-text -font-bold black-18-font' style={{ color: 'black' }}>
                  Can I share my diary card report?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. You can share your diary card with your therapist and care team. It also integrates to a therapist portal.
                </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Do you have lessons for each skill?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes and even more. There are over 50+ video lessons and 200+ animations.
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
                  You can set multiple reminders. For eg. you can set a daily reminder say at 8 AM. But also set a weekly reminder repeating on specific days at another time.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  What are mood correlations?
              </div>
                <div className='blog-user black-18-font para-text'>
                  They are top 5 items in each category (skills, targets, activities, sleep etc.) that correspond to a particular mood. They help your draw insights from the most common things you did when you were in a particular mood.
              </div>
              </Col>
            </Row>
            <Row className='card-row -row-flex-space-between -asked-question-card'>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Can I do my homework or exercises in the app?
                </div>
                <div className='blog-user para-text black-18-font'>
                  Yes. If your provider is on our clinician app, they can assign you homework, practice ideas, exercises and assessments to you and you can complete and submit them all via the app. You can choose what to share with your clinician and he / she can see it in the clinician app.
                </div>
              </Col>
              <Col md={12} className='blog-container question-container'>
                <div className='blog-user -font-bold black-18-font base-text' style={{ color: 'black' }}>
                  Do you have monthly subscription?
                </div>
                <div className='blog-user black-18-font para-text'>
                  Yes. We have a monthly subscription, but we don't believe anyone can learn DBT in a month. We offer a discounted six month subscription as well as a monthly subscription depending on your choice. We have a 3-day trial period during which you can access all areas of the app for free.
                </div>
              </Col>
            </Row>

          </Col>
        </Row> */}

        <Row className='card-row mobile-app-container -row-flex-center'>
          <Col md={24} className='dbt-box-container'>
            <Row className='card-row -row-flex-center dbt-box-border'>
              <div style={{ textAlign: 'center' }}>
                <h4 className='-font-bold base-text'>Download <span className='-highlighted-secondary-text'>{' '}MI Coach</span> App</h4>
                <div className='blog-user black-18-font'>The most comprehensive app for finding the motivation for change using Motivational Interviewing. Come and be part of the community! </div>
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
