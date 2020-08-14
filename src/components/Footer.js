import React from 'react'
import footerImg from '../assets/images/footer_bg.png'
import swasthLogo from '../assets/images/swasth-logo-dark.png'
import unitedStates from '../assets/images/united-states.png'
import { Link } from 'gatsby'
import { Col, Row } from 'antd'

const Footer = (props) => (
  <footer
    id={props.hideFooter ? 'min-footer' : 'footer'}
    // style={props.hideFooter ? { height: 550 } : null}
  >
    <div className="inner">
      {!props.hideFooter ?
        <img className='footer-bg' src={footerImg}/> : null}
      <div>
        <div className="footer-widgets-wrap pb-4 clearfix">
          <Row className="footer-row" gutter={16}>
            <Col className="col-md-8" md={8}>

              <div className="widget clearfix">

                <img style={{ left: '20%' }} src={swasthLogo}/>

              </div>

            </Col>

            <Col className="col-md-6" md={6}>

              <div className="widget clearfix">

                <h4>Swasth</h4>

                <ul className="list-unstyled iconlist ml-0">
                  <li><a href="https://clinician.swasth.co">Clinicians</a></li>
                  <li><a href="#">Members</a></li>
                  <li><a href="https://healthcoach.swasth.co/">Coaching</a></li>
                </ul>

              </div>

            </Col>
            <Col className="col-md-6" md={6}>

              <div className="widget clearfix">

                <h4>Products</h4>

                <ul className="list-unstyled iconlist ml-0">
                  <li><a href="/dbt-coach">DBT Coach</a></li>
                  <li><a href="/cbt-companion">CBT Companion</a></li>
                  <li><a href="/act-coach">ACT Coach</a></li>
                  <li><a href="https://healthcoach.swasth.co/">Coaching</a></li>
                  <li></li>
                  {/*<li><a href="https://findclinician.swasth.co">Find Provider</a></li>*/}

                </ul>

              </div>

            </Col>

            <Col className="col-md-6" md={6}>

              <div className="widget clearfix">

                <h4>Social</h4>

                <ul className="list-unstyled iconlist">
                  <li><i className="icon-facebook"/><a href="https://www.facebook.com/swasthco/"
                                                       target="_blank"> Facebook</a></li>
                  <li><i className="icon-twitter"/><a href="https://www.twitter.com/swasthapps/"
                                                      target="_blank"> Twitter</a></li>
                  <li><i className="icon-instagram"/><a href="https://www.instagram.com/swasthapps/"
                                                        target="_blank"> Instagram</a></li>
                  <li><i className="icon-youtube"/><a href="https://www.youtube.com/channel/UCtM20mp-kA1xkKdWA5Q-9KA"
                                                      target="_blank"> YouTube</a></li>
                </ul>

              </div>

            </Col>
            <Col className='col-md-6' md={6}/>

          </Row>

        </div>

        <div className="line line-sm m-0"/>

      </div>
      <div id="copyrights" className="nobg">

        <div className="container clearfix">

          <div className="col_half">
            <div className="copyright-links -highlighted-secondary-text">
              <Link to='/terms'>Terms of Use</Link> {'    |    '}
              <Link to='/privacy'>Privacy
                Policy</Link></div>
            <div style={{ color: 'rgba(0,0,0,0.2)' }}>
              Copyrights &copy; 2019 All Rights Reserved by Swasth Inc.<br/>
            </div>
            <div className='-highlighted-secondary-text'
                 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img style={{ position: 'initial', width: '24px', marginRight: '10px' }} src={unitedStates}/>
              {' '}English
            </div>
          </div>

        </div>

      </div>
    </div>
  </footer>
)

export default Footer
