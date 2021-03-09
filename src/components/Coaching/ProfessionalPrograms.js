import React from "react";
import {Col, Row} from "antd";
import {connect} from "react-redux";


class ProfessionalPrograms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: []
        }
    }

    render() {
        return (
            <>
                <section className='coaching-programs-banner-section'>
                    <Row className='-row-flex-center' id='wrapper'>
                        <Col md={24} style={{width: '100%'}}>
                            <p style={{textAlign: 'center'}}
                               className='bottom-space base-text tab-view'>
                                Stop Struggling and Start Living.
                                <br/>
                                Build Genuine Happiness & Lasting Happiness
                            </p>
                        </Col>
                    </Row>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    marketingPrograms: state.commonData.marketingPrograms,
    coachingLoading: state.commonData.coachingLoading,
});

export default connect(
    mapStateToProps,
    undefined
)(ProfessionalPrograms);
