import React from "react";
import CourseCard from "./CourseCard";
import {Col, Row} from "antd";
import {Helmet} from "react-helmet";
import Programs from "../../JSON/CoachProgramsForEveryone.json"
import {Link} from "gatsby";
import RegisterInterest from "../RegisterInterestModal";
import CLImage from "../../helper/CLImage";
import {getCloudIDFromImageName} from "../../helper/helper";
import ShowMore from "react-show-more";

class ClientsPrograms extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const livedPrograms = Programs?.filter(({isLive}) => isLive);
        const upcomingPrograms = Programs?.filter(({isLive}) => !isLive);
        return (
            <>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8"/>
                    <title>Resiliens - Evidence Based Coaching for everyone</title>
                    <meta
                        name="keywords"
                        content="Behavioral Health Coaching, Evidence Based Coaching, Life Coach, Health Coaching, Mental Health Coach, anxiety, depression, financial anxiety, experts, breathing exercise, meditation, digital mental health, guided meditation, therapist training, coach training, lasting change, motivation, reframe, PTSD, relationships, resilience, peer coaching group, perfomance coaching, CBT, DBT, ACT, CFT, Compassion, social anxiety, Bipolar, Gratitude, Well being"
                    />
                </Helmet>
                <section className='coaching-programs-banner-section'>
                    <Row className='-row-flex-center' id='wrapper'>
                        <Col md={24} style={{width: '100%'}}/>
                    </Row>
                </section>
                <div style={{paddingTop: 50}}>
                    <div
                        id='wrapper'
                        className={'coach-wrapper'}
                        style={{paddingBottom: 0}}
                    >
                        <Row className='-row-flex-center' gutter={24}>
                            <Col md={16} className="programs-list-page-top-section">
                                <p className="para-medium-text small-title">Our Programs</p>
                                <h3 className='bottom-space base-text'>
                                    Programs that boost your mental health and resilience.
                                </h3>
                                <p className="para-text desc">
                                    Our programs are online and follow a blended
                                    learning approach with on-demand curriculum, assessments,
                                    live group sessions, progress tracking, supported by 1:1
                                    coaching accessible across all platforms (web and mobile).
                                </p>
                            </Col>
                        </Row>
                        <div className="programs-list-page-program-card">
                            {livedPrograms?.map((program, index) =>
                                <CourseCard
                                    className="keen-slider__slide number-slide1"
                                    program={program}
                                    index={index}
                                />
                            )}
                        </div>
                        <div className="programs-list-page-upcoming-programs">
                            <div className="width-container">
                                <Row className='-row-flex-center' gutter={24}>
                                    <Col md={16} className="programs-list-page-top-section">
                                        <h3 className='bottom-space base-text'>
                                            More programs coming soon!
                                        </h3>
                                        <p className="para-text desc">
                                            We are in the process of developing new programs based on evidence-based
                                            treatments.
                                            If you’re interested in any of the programs below please sign up for the
                                            mailing list to be notified when they launch.
                                        </p>
                                        <p className="para-text desc" style={{marginTop: 15}}>
                                            People who join our wait list are not obligated to take the course but you
                                            will receive a discount.
                                        </p>
                                    </Col>
                                </Row>
                                <div className="upcoming-course-panel-wrapper">
                                    <div className="w-layout-grid upcoming-courses-grid">
                                        {upcomingPrograms?.map(program =>
                                            <div className="upcoming-course-panel">
                                                <div className="upcoming-course-details-wrapper">
                                                    <div className="course-panel-title-wrapper"><h2
                                                        className="heading-24 ch-width-36 bm-16 base-text">
                                                        {program.name}
                                                    </h2><h6
                                                        className="heading-16 _14 steel bm-4 para-text">By</h6>
                                                        <h5 className="heading-16 bm-8 para-medium-text">{program?.coachInfo?.name}</h5>
                                                        <div className="body-12 bm-24 para-text">
                                                            {program?.coachInfo?.title}
                                                        </div>
                                                    </div>
                                                    <CLImage
                                                        cloudId={getCloudIDFromImageName(
                                                            program?.coachInfo?.picture,
                                                            "coaching",
                                                            'png',
                                                        )}
                                                        transformation={[
                                                            {gravity: "face", height: 400, width: 400, crop: "crop"},
                                                            // {radius: "max"},
                                                            {width: 150, height: 150, crop: "scale"}
                                                        ]}
                                                        className="upcoming-course-creator-photo"
                                                    />
                                                </div>
                                                <div className="upcoming-course-panel-text-wrapper">
                                                    <p className="body-16 para-text show-more-less-desc">
                                                        <ShowMore
                                                            lines={4}
                                                            more='Show more'
                                                            less='Show less'
                                                            anchorClass=''
                                                        >
                                                            {program?.shortDescription}
                                                        </ShowMore>

                                                    </p>
                                                    <h5 className="body-16 bm-16 para-text">Coming Soon!</h5>
                                                    <div className="program-list-page-buttons tm-8">
                                                        <div className="rm-16">
                                                            <RegisterInterest
                                                                program={program}
                                                                programSlug={program.slug}
                                                            />
                                                        </div>
                                                        <Link
                                                            to={`/coaching/program/${program.slug}`}
                                                            className="secondary-button-large w-button"
                                                        >
                                                            Program Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClientsPrograms;
