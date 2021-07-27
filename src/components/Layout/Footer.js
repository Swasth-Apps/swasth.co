import React, {useState} from 'react'
import resilienceLogo from '../../assets/images/Resiliens-footer-Logo.png'
import unitedStates from '../../assets/images/united-states.png'
import FBIcon from "../../assets/images/fb-icon.png";
import {Link} from 'gatsby'
import {Col, Row} from 'antd'
import TopBg from "../../assets/images/top-bg.png"
import TwitterIcon from "../../assets/images/twitter-icon.png"
import InstagramIcon from "../../assets/images/instagram-icon.png"
import YoutubeIcon from "../../assets/images/youtube-icon.png"

const Footer = (props) => {
    // const [modal, setModal] = useState(false);
return(
    <footer
        id={'footer'}
        style={{paddingTop: 100,
            backgroundImage: `url(${TopBg})`,
            backgroundSize: "cover"
        }}
        className={props.noFooterMargin ? "no-footer-margin": ""}
        // style={props.hideFooter ? { height: 550 } : null}
    >
        {/*<RequestDemoModal modal={modal} onClose={() => setModal(false)}/>*/}

        <div className="inner">
           {/* <div style={{textAlign: "center"}}>
                <div className="footer-heading card-row">
                    <p className="bottom-space white-text base-text">Want to learn more about Resiliens ?</p>
                    <Button className="request-demo-btn" style={{margin: "20px 0"}} onClick={() => setModal(true)}>Get Started</Button>
                </div>
            </div>*/}
            <div>
                <div className="footer-widgets-wrap pb-4 clearfix">
                    <Row className="footer-row" gutter={16}>
                        <Col className="col-md-8 footer-info" md={8}>
                            <div className="widget clearfix">
                                <Link to="/"><img src={resilienceLogo}/></Link>
                                <p className="white-text para-text" style={{fontSize: 14}}>
                                    Resiliens's Digital Health Platform offers treatment programs for Anxiety, Depression,
                                    Eating Disorders, Borderline Personality Disorder, PTSD, SUDs, etc
                                </p>
                                <div className="media" style={{marginTop: 15}}>
                                    <a href="https://www.facebook.com/swasthco/"
                                       target="_blank"><img src={FBIcon}/></a>
                                    <a href="https://www.twitter.com/swasthapps/"
                                       target="_blank"><img src={TwitterIcon}/></a>
                                    <a href="https://www.instagram.com/swasthapps/"
                                       target="_blank"><img src={InstagramIcon}/></a>
                                    <a href="https://www.youtube.com/channel/UCtM20mp-kA1xkKdWA5Q-9KA"
                                       target="_blank"><img src={YoutubeIcon}/></a>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-md-16 footer-services" md={16}>
                            <Row gutter={16}>
                                <Col className="col-md-8" md={8}>

                                    <div className="widget clearfix">

                                        <h5 className="white-text base-text">Resiliens</h5>

                                        <ul className="list-unstyled iconlist ml-0">
                                            <li><Link to="/about-us" className="book-text">About Us </Link></li>
                                            <li><a href="https://clinician.resiliens.com" className="book-text">Clinicians</a></li>
                                            <li><a href="#" className="book-text">Employers</a></li>
                                        </ul>

                                    </div>

                                </Col>
                                <Col className="col-md-8" md={8}>

                                    <div className="widget clearfix" style={{alignItems:"baseline"}}>

                                        <h5 className="white-text base-text">Products</h5>

                                        <ul className="list-unstyled iconlist ml-0">
                                            <li><Link to="/coaching" className="book-text">Coaching</Link></li>
                                            <li><Link to="/resilify" className="book-text">Resilify</Link></li>
                                            <li><Link to="/dbt-coach" className="book-text">DBT Coach</Link></li>
                                            <li><Link to="/cbt-companion" className="book-text">CBT Companion</Link></li>
                                            <li><Link to="/act-coach" className="book-text">ACT Coach</Link></li>
                                            <li><Link to="/mi-coach" className="book-text">MI Coach</Link></li>
                                        </ul>

                                    </div>

                                </Col>
                                <Col className="col-md-8" md={8}>
                                    <div className="widget clearfix">

                                        <h5 className="white-text base-text">Resources</h5>

                                        <ul className="list-unstyled iconlist">
                                            {/*                                            <li><Link className="para-text" to="/">Resources</Link></li>
                                            <li><Link className="para-text" to="/">Webinars</Link></li>
                                            <li><Link className="para-text" to="/">Coronavirus</Link></li>*/}
                                            <li><Link className="book-text" to="/blog">Blog</Link></li>
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
                        <div className="copyright-links white-text">
                            <Link to='/terms' className="medium-text">Terms of Use</Link> {'    |    '}
                            <Link to='/privacy' className="medium-text">Privacy
                                Policy</Link></div>
                        <div className="white-text book-text">
                            Copyrights © 2021 All Rights Reserved by Resiliens Inc.
                        </div>
                        <div className='white-text'
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
}

export default Footer
