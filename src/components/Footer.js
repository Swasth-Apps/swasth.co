import React from 'react'
import resilienceLogo from '../assets/images/Resiliens-footer-Logo.png'
import unitedStates from '../assets/images/united-states.png'
import {Link} from 'gatsby'
import {Button, Col, Divider, Row} from 'antd'
import topBg from "../assets/images/top-bg@3x.png";

const Footer = (props) => (
    <footer
        id={'footer'}
        style={{paddingTop: 100,
            backgroundImage: `url(${require("../assets/images/top-bg.png")})`,
            backgroundSize: "cover"
        }}
        // style={props.hideFooter ? { height: 550 } : null}
    >
        <div className="inner">
            <div style={{textAlign: "center"}}>
                <div className="footer-heading card-row">
                    <p className="bottom-space white-text">Want to learn more about Resiliens ?</p>
                    <Button className="request-demo-btn" style={{margin: "20px 0"}}>Get Started</Button>
                </div>
            </div>
            <div>
                <div className="footer-widgets-wrap pb-4 clearfix">
                    <Row className="footer-row" gutter={16}>
                        <Col className="col-md-8 footer-info" md={8}>
                            <div className="widget clearfix">
                                <Link to="/"><img src={resilienceLogo}/></Link>
                                <p className="white-text" style={{fontSize: 12}}>
                                    Resiliens's Digital Health Platform offers treatment programs for Anxiety, Depression,
                                    Eating Disorders, Borderline Personality Disorder, PTSD, SUDs, etc
                                </p>
                                <div className="media">
                                    <a href="https://www.facebook.com/swasthco/"
                                       target="_blank"><img src={require("../assets/images/facebook-icon.png")}/></a>
                                    <a href="https://www.twitter.com/swasthapps/"
                                       target="_blank"><img src={require("../assets/images/linkedin-icon.png")}/></a>
                                    <a href="https://www.twitter.com/swasthapps/"
                                       target="_blank"><img src={require("../assets/images/linkedin-icon.png")}/></a>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-md-16 footer-services" md={16}>
                            <Row gutter={16}>
                                <Col className="col-md-8" md={8}>

                                    <div className="widget clearfix">

                                        <h5 className="white-text base-text">Resiliens</h5>

                                        <ul className="list-unstyled iconlist ml-0">
                                            <li><Link to="/about-us" className="para-text">About Us </Link></li>
                                            <li><a href="https://clinician.swasth.co" className="para-text">Clinicians</a></li>
                                            <li><a href="#" className="para-text">Members</a></li>
                                            <li><a href="https://healthcoach.swasth.co/" className="para-text">Coaching</a></li>
                                        </ul>

                                    </div>

                                </Col>
                                <Col className="col-md-8" md={8}>

                                    <div className="widget clearfix" style={{alignItems:"baseline"}}>

                                        <h5 className="white-text base-text">Products</h5>

                                        <ul className="list-unstyled iconlist ml-0">
                                            <li><a href="https://healthcoach.swasth.co/" className="para-text">Behavioral Health Coach</a>
                                            </li>
                                            <li><Link to="/dbt-coach" className="para-text">DBT Coach</Link></li>
                                            <li><Link to="/cbt-companion" className="para-text">CBT Companion</Link></li>
                                            <li><Link to="/act-coach" className="para-text">ACT Coach</Link></li>
                                        </ul>

                                    </div>

                                </Col>
                                <Col className="col-md-8" md={8}>
                                    <div className="widget clearfix">

                                        <h5 className="white-text base-text">Resource</h5>

                                        <ul className="list-unstyled iconlist">
                                            <li><Link className="para-text" to="/">Resources</Link></li>
                                            <li><Link className="para-text" to="/">Webinars</Link></li>
                                            <li><Link className="para-text" to="/">Coronavirus</Link></li>
                                            <li><Link className="para-text" to="/blog">Blog</Link></li>
                                        </ul>

                                    </div>
                                </Col>
                            </Row>
                        </Col>

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
                        <div className="white-text">
                            Copyrights © 2021 All Rights Reserved by Resiliens Inc.
                        </div>
                        <div className='-highlighted-secondary-text'
                             style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img style={{position: 'initial', width: '24px', marginRight: '10px'}} src={unitedStates}/>
                            {' '}English
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </footer>
)

export default Footer
