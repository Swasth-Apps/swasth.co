import React from 'react'
import { Row } from 'antd'
class Pricing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='feature-section-group'>
        <Row className='card-row' style={{padding: '50px 32px 36px'}}>
          <div className='cell'>
            <div className='well tac' style={{marginBottom: 30}}>
              <h2>Invest in the best Behavioral Health Coaching Platform</h2>
              <div style={{color: 'black'}} className='font-proxima-nova'>By using Swasth's Coaching Platform you can run bring your coaching to clients all over the world. Focus on developing the best coaching program and we take care of the rest.</div>
            </div>
          </div>
        </Row>
        <div className='cell well'>
          <div className='grid grid--4col well--m mt4 pricing-relative'>
            <div className='card card--vertical card--starter pricing-relative border-green'>
              <div className='ribbon ribbon-top-right ribbon-green'><span>Free</span></div>
              <div className='card-text'>
                <h4>$0</h4>
                <h6>Platform Fee</h6>
                <p>For Free Programs</p>
              </div>
            </div>
            <div className='card card--vertical card--starter pricing-relative border-purple'>
              <div className='ribbon ribbon-top-right ribbon-purple'><span>Starter</span></div>
              <div className='card-text'>
                <h4>15%</h4>
                <h6>Of Program Fees Collected</h6>
                <p>upto 10 Clients</p>
              </div>
            </div>
            <div className='card card--vertical card--starter pricing-relative border-orange'>
              <div className='ribbon ribbon-top-right ribbon-orange'><span>Par</span></div>
              <div className='card-text'>
                <h4>12%</h4>
                <h6>Of Program Fees Collected</h6>
                <p>11-20 Clients</p>
              </div>
              </div>
            <div className='card card--vertical card--standard pricing-relative border-blue'>
              <div className='ribbon ribbon-top-right ribbon-blue'><span>Jumbo</span></div>
              <div className='card-text'>
                <h4>10%</h4>
                <h6>Of Program Fees Collected</h6>
                <p>21-50 Clients</p>
              </div>
            </div>
          </div>
          <div className='card-content well--s card--feature-shadow coaching-box-shadow common-pricing-text font-proxima-nova'>
              On-boarding, payments, video conferences and text chats, tasks and accountability, program creation and management, document and video uploads, ability to co-coach with others – all the features are included in any package you choose!
          </div>
        </div>
        <div className='cell well pricing-questions'>
          <h2>
            Frequently Asked Questions
          </h2>
          <div className='pricing-questions-container'>
            <div className='card--feature coaching-box-shadow'>
              <div className='card-content'>
                <h3>
                  <b>  What if I have more than 200 clients?</b>
                </h3>
                <p style={{textAlign:'start'}} className='font-proxima-nova'>
                  That's awesome! Contact us to discuss custom pricing options.
                </p>
              </div>
            </div>
            <div className='card--feature coaching-box-shadow'>
              <div className='card-content'>
                <h3>
                  <b>  What happens if I want to upgrade/downgrade after purchasing?</b>
                </h3>
                <p style={{textAlign:'start'}} className='font-proxima-nova'>
                  Any plan can be upgraded/downgraded at any time and we'll automatically pro-rate the difference so you only pay for the actual time spent on any plan.
                </p>
              </div>
            </div>
            <div className='card--feature coaching-box-shadow'>
              <div className='card-content'>
                <h3>
                  <b>  What does this cost for my clients?</b>
                </h3>
                <p style={{textAlign:'start'}} className='font-proxima-nova'>
                  Nothing! TrueCoach is 100% free for your clients. Anything else is just insanity.
                </p>
              </div>
            </div>
            <div className='card--feature coaching-box-shadow'>
              <div className='card-content'>
                <h3>
                  <b>  Are there any extra fees?</b>
                </h3>
                <p style={{textAlign:'start'}} className='font-proxima-nova'>
                  Nope, what you see is what you get.
                </p>
              </div>
            </div>
            <div className='card--feature coaching-box-shadow'>
              <div className='card-content'>
                <h3>
                  <b>  Is there a yearly contract?</b>
                </h3>
                <p style={{textAlign:'start'}} className='font-proxima-nova'>
                  No, everything is defaulted at month to month. We do offer an annual billing option though if you want to get 2 months free! Prices above reflect the month to month option.
                </p>
              </div>
            </div>
            <div className='card--feature coaching-box-shadow'>
              <div className='card-content'>
                <h3>
                  <b>  How do I get signed up?</b>
                </h3>
                <p style={{textAlign:'start'}} className='font-proxima-nova'>
                  Easy! Enter your email and click "Get Started" below. We'll see you on the other side!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing