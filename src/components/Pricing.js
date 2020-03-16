import React from 'react'
import { Row } from 'antd'
import ACT from '../assets/images/ACT-Record-diary.png'

class LiveCoachFeature extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='feature-section-group'>
        <Row className='card-row'>
          <div className='cell'>
            <div className='well tac'>
              <h2>Invest In Your Personal Training Business</h2>
              <div>If TrueCoach helps you train just one additional client or saves you 15 minutes each week, it will more than pay for itself.</div>
            </div>
          </div>
        </Row>
        <div className='cell well'>
          <div className='grid grid--3row well--m mt4'>
            <div className='card card--vertical card--starter'>
              <div className='card-text'>
                <p>The Starter Plan</p>
                <h4>$19/month</h4>
                <p>15% off for 5 clients</p>
              </div>
            </div>
            <div className='card card--vertical card--standard'>
              <div className='card-text'>
                <p>The Starter Plan</p>
                <h4>$19/month</h4>
                <p>15% off for 5 clients</p>
              </div>
            </div>
            <div className='card card--vertical card--pro'>
              <div className='card-text'>
                <p>The Starter Plan</p>
                <h4>$19/month</h4>
                <p>15% off for 5 clients</p>
              </div>
            </div>
          </div>
          <div className='card-content well--s card--feature-shadow common-pricing-text'>
              On-boarding, payments, video conferences and text chats, tasks and accountability, program creation and management, document and video uploads, ability to co-coach with others – all the features are included in any package you choose!
          </div>
        </div>
        <div className='cell well updivider'>
          <h2>
            Frequently Asked Questions
          </h2>
          <div className='grid'>
            <div className='card--feature'>
              <div className='card-content'>
                <h3>
                  <b>  What if I have more than 200 clients?</b>
                </h3>
                <p style={{textAlign:'start'}}>
                  That's awesome! Contact us to discuss custom pricing options.
                </p>
              </div>
            </div>
            <div className='card--feature'>
              <div className='card-content'>
                <h3>
                  <b>  What happens if I want to upgrade/downgrade after purchasing?</b>
                </h3>
                <p style={{textAlign:'start'}}>
                  Any plan can be upgraded/downgraded at any time and we'll automatically pro-rate the difference so you only pay for the actual time spent on any plan.
                </p>
              </div>
            </div>
            <div className='card--feature'>
              <div className='card-content'>
                <h3>
                  <b>  What does this cost for my clients?</b>
                </h3>
                <p style={{textAlign:'start'}}>
                  Nothing! TrueCoach is 100% free for your clients. Anything else is just insanity.
                </p>
              </div>
            </div>
            <div className='card--feature'>
              <div className='card-content'>
                <h3>
                  <b>  Are there any extra fees?</b>
                </h3>
                <p style={{textAlign:'start'}}>
                  Nope, what you see is what you get.
                </p>
              </div>
            </div>
            <div className='card--feature'>
              <div className='card-content'>
                <h3>
                  <b>  Is there a yearly contract?</b>
                </h3>
                <p style={{textAlign:'start'}}>
                  No, everything is defaulted at month to month. We do offer an annual billing option though if you want to get 2 months free! Prices above reflect the month to month option.
                </p>
              </div>
            </div>
            <div className='card--feature'>
              <div className='card-content'>
                <h3>
                  <b>  How do I get signed up?</b>
                </h3>
                <p style={{textAlign:'start'}}>
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

export default LiveCoachFeature