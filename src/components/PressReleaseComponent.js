import React from "react";
import {Col, Row} from "antd";
import moment from "moment";
import HtmlParser from "react-html-parser";

class PressReleaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return(
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
                    <div className="html-parser-description">
                        {HtmlParser(this.props.description)}
                    </div>
                </Row>
            </div>
        )
    }
}

export default PressReleaseComponent