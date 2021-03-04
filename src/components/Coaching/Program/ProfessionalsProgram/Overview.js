import React from "react";
import {CalendarOutlined, ClockCircleOutlined, HighlightOutlined} from '@ant-design/icons'
import {Button, Collapse, Tabs} from "antd";

const { Panel } = Collapse;
const { TabPane } = Tabs;
const Overview = () =>{
  return(
    <>
    <div className="individual-course-container">
      <div
          id='wrapper'
          className={'coach-wrapper'}
          style={{paddingBottom: 0}}
      >
      <h2 className="base-text">ACT for Adolescents</h2>
      <section className='course-section'>
        <div className="main-course-col">
          <img src="https://embed-fastly.wistia.com/deliveries/a8c1f0411e76801be933a23325ea1771.webp?image_crop_resized=960x540"/>
          <div className="course-basics">
            <p className="para-text">
              <CalendarOutlined />
              <span>Starts August 4</span>
            </p>
            <p className="para-text">
              <ClockCircleOutlined />
              <span>16hrs | 6 weeks + 10 Hours Bonus Content!</span>
            </p>
            <p className="para-text">
              <HighlightOutlined />
              <span>For Behavioral Health Professionals</span>
            </p>
          </div>
          <p className="para-text desc">This advanced level 6 week specialty course teaches you how to adapt ACT for young people. A host of world-renowned experts on the use of ACT with youth &ndash; including Darin Cairns (Australia), Chris McCurry (USA), and Sheri Turrell (Canada) &ndash; will share, explain and illustrate their approaches to treating adolescents (from age 10 to 19).</p>

          <p className="para-text desc">And much, much more!</p>

          <p className="para-text ce-credits">There are&nbsp;16&nbsp;CE/CME hours available. Prior to registering, please visit this<a href="https://psychwire.com/harris/credit-information" mx="1" theme="[object Object]">page</a>to review CE/CME details, course objectives, speaker/planner conflict of interest disclosure and more.</p>
        </div>
        <div className="course-payment-col">
          <div className="payment-card">
            <h3 className="base-text">ACT for Adolescents</h3>
            <h1 className="base-text">$400</h1>
            <Button className="request-demo-btn" style={{margin: "20px 0"}}>Purchase Program</Button>
          </div>
        </div>
      </section>
      </div>
    </div>
      <div className="course-modules">
        <div
            id='wrapper'
            className={'coach-wrapper'}
            style={{paddingBottom: 0}}
        >
          <div className="program-sessions" id="faqs">

            <p className="program-sessions-text base-text">What's in the program?</p>

            <Collapse expandIconPosition="right" accordion bordered={false}>
              <Panel header={<p className="para-text">Session 1</p>} key="1">
                <Tabs defaultActiveKey="1" className="coaching-landing-page-tab">
                  <TabPane tab="Video Sessions" key="1">
                    <div className="sessions-container">
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Activities" key="2">
                    <div className="sessions-container">
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                      <div className="sessions-section">
                        <p className="session-title para-text">
                          Session 1
                        </p>

                        <p className="session-desc para-text">
                          Designed to work best over an 8 week period, each week takes about 1-2 hrs to do plus some practice time. You’ll learn evidence based skills and strategies to help build genuine happiness from the inside out.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </Panel>
            </Collapse>

          </div>
      </div>
      </div>
      </>
  )
}

export default Overview;
