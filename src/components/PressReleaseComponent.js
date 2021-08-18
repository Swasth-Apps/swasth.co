import React from "react";
import {Col, Row} from "antd";
import moment from "moment";
import HtmlParser from "react-html-parser";
import {
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";

const currentPageUrl = typeof window !== 'undefined' ? window.location.href : '';

class PressReleaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div className="press-release-page">
                <section className='coaching-programs-banner-section'>
                    <Row className='-row-flex-center' id='wrapper'>
                        <Col md={24} style={{width: '100%'}}>
                            <p className="roman-text date-text">{moment(this.props.date)?.format("MMM DD, YYYY")}</p>
                            <p
                                className='bottom-space heavy-text tab-view'
                            >
                                {this.props.title}
                            </p>
                        </Col>
                    </Row>
                </section>
                <Row className='-row-flex-center press-release-description' id='wrapper'>
                    <div className="press-release-with-share">
                        <div className='social-icons'>
                            <p className="share-text book-text">Share</p>
                            <div className='social-icons'>

                                <div className="social-button">
                                    <FacebookShareButton
                                        url={currentPageUrl}
                                        quote={this.props.title}
                                        className="social__share-button"
                                    >
                                        <FacebookIcon size={32} round/>
                                    </FacebookShareButton>

                                    <div>
                                        <FacebookShareCount url={currentPageUrl} className="social__share-count">
                                            {count => count}
                                        </FacebookShareCount>
                                    </div>
                                </div>
                                <div className="social-button">
                                    <TwitterShareButton url={currentPageUrl} quote={this.props.title}
                                                        className="social__share-button">
                                        <TwitterIcon size={32} round/>
                                    </TwitterShareButton>
                                </div>
                                <div className="social-button">
                                    <LinkedinShareButton url={currentPageUrl} quote={this.props.title}
                                                         className="social__share-button">
                                        <LinkedinIcon size={32} round/>
                                    </LinkedinShareButton>
                                </div>
                            </div>
                        </div>
                        <div className="html-parser-description">
                            {HtmlParser(this.props.content)}
                            <div className="footer-release-post">
                                <p className="roman-text">Contact</p>
                                <a className="roman-text" href="mailto:media@resiliens.com">media@resiliens.com</a>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}

export default PressReleaseComponent
