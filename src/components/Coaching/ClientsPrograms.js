import React from "react";
import CourseCard from "./CourseCard";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import graphql_endpoint from '../../aws-appsync-url'
import {getMarketingPrograms} from "../../queries";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {
    setMarketingLoading,
    setMarketingPrograms,
    setPrograms,
    setResilifyLoading,
    setTopics
} from "../../Redux/Actions/Programs";


class ClientsPrograms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: []
        }
    }

    render() {
        const {coachingLoading,marketingPrograms} = this.props;
        console.log(marketingPrograms)
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
            <div className="clients-navigation-wrapper">
            <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                {coachingLoading ? <div className="keen-slider">
                    <div className="keen-slider__slide ">
                        <div className="card-loader">
                            <div className="card__image loading"/>
                            <div className="card__title loading"/>
                            <div className="card__description loading"/>
                        </div>
                    </div>
                    <div className="keen-slider__slide ">
                        <div className="card-loader">
                            <div className="card__image loading"/>
                            <div className="card__title loading"/>
                            <div className="card__description loading"/>
                        </div>
                    </div>
                    <div className="keen-slider__slide ">
                        <div className="card-loader">
                            <div className="card__image loading"/>
                            <div className="card__title loading"/>
                            <div className="card__description loading"/>
                        </div>
                    </div>
                </div> : null}
                <div className="keen-slider">
                    {marketingPrograms?.map((program, index) =>
                        <CourseCard
                            className="keen-slider__slide number-slide1"
                            program={program}
                            index={index}
                        />
                    )}
                </div>
                </div>
            </div>
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
)(ClientsPrograms);
