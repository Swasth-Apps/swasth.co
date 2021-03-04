import React from "react";
import {Col, Row} from "antd";
import PlaceHolderImg from '../../../assets/images/image-placeholder.png'

import ReactPlayer from 'react-player';
import {ClockCircleOutlined, HeartOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import ProgramSession from "../../ProgramSession";
import {getImage} from "../../../helper/helper";

class CoachProgram extends React.Component {
    constructor(props) {
        super(props);
    }

    getList = (data) => {
        return data?.split("-");
    };

    render() {
        const {program} = this.props;
        return (
            <div className="coaching-program-page">
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <div className="coaching-program-top-section">
                        <Row className='-row-flex-center card-row video-section'>
                            <Col md={24}>
                                <Row className='card-row'>
                                    <Col md={8} className="content">
                                        <h3 className='bottom-space base-text program-grounded'>
                                            {program?.name}
                                        </h3>
                                        <div className='para-text black-18-font margin-bottom-25'>
                                            <p className="width-90 para-text" style={{
                                                color: "#4F4F4F"
                                            }}>
                                                {program?.description}
                                            </p>
                                        </div>
                                        <div className="program-basics">
                                            <p>
                                                <UsergroupAddOutlined/>
                                                <span className="para-text">{program.type}</span>
                                            </p>
                                            <p>
                                                <ClockCircleOutlined/>
                                                <span className="para-text">
                                                    {`${program?.duration?.interval} ${program?.duration?.period}`}
                                                </span>
                                            </p>
                                            <p>
                                                <HeartOutlined/>
                                                <span className="para-text">
                                                    Each skill is evidence based and derived
                                                    from Acceptance Commitment Therapy
                                                </span>
                                            </p>
                                        </div>

                                        <p className="program-price base-text">
                                            {program.isFree ? "Free" : `$${parseFloat(parseInt(program.payment,10) / 100)}`}
                                        </p>
                                    </Col>
                                    <Col md={12} className="-margin-right img-section" style={{textAlign: "center"}}>
                                        <ReactPlayer
                                            className='video-img'
                                            url={program?.featuredVideos?.[0] || "https://www.youtube.com/watch?v=rzqiPaAxbgo&t=97s"}
                                            fluid={false}
                                            resizeMode={"contain"}
                                            controls
                                            style={{
                                                height: "100%"
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                <section className='banner-section'
                >
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
                <section className='banner-section how-it-works'>
                    <Row className='-row-flex-center' id='wrapper'>
                        <Col md={24} style={{width: '100%'}}>
                            <p style={{textAlign: 'center'}}
                               className='bottom-space base-text tab-view'>
                                How it works
                            </p>
                            <p className="para-text desc-view">
                                The program is skills based. You can start anytime and do the program at your own pace.
                                For best results, it’s designed to work over 8 weeks.
                                You’ll learn skills and strategies that you can immediately incorporate in your life. It
                                takes just 1-2 hours to do per week on average plus practice time.
                            </p>
                        </Col>
                    </Row>
                    <div
                        id='wrapper'
                        style={{paddingBottom: 0}}
                    >
                        <div className="how-it-works-section">
                            <div className="sequence-sections">
                                <div className="section">
                                    <div className="card">
                                        <img src={require("../../../assets/images/coachingProgram/img-thmb1.jpg")}/>
                                        <p className="base-text title">Watch</p>
                                        <p className="para-text desc">
                                            From absorbing stories to cool animations, each entertaining week takes
                                            about 1-2 hours or so to do plus practice time.

                                        </p>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="card">
                                        <img src={require("../../../assets/images/coachingProgram/img-thmb2.jpg")}/>

                                        <p className="base-text title">
                                            Learn
                                        </p>
                                        <p className="para-text desc">
                                            Easy to do and clearly explained, the skills and strategies you’ll learn are
                                            scientifically proven to actually work.
                                        </p>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="card">
                                        <img src={require("../../../assets/images/coachingProgram/Card-3.jpg")}/>

                                        <p className="base-text title">Practice</p>
                                        <p className="para-text desc">
                                            Right from the start, you’ll be able to practice what you learn and feel the
                                            benefits in your daily life.
                                        </p>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="card">
                                        <img src={require("../../../assets/images/coachingProgram/Card-5.jpg")}/>

                                        <p className="base-text title">
                                            Transform
                                        </p>
                                        <p className="para-text desc">
                                            Week by week, apply easy to learn skills and strategies and move your life
                                            into fulfilment, meaning and genuine happiness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ProgramSession program={program}/>
                <div
                    id='wrapper'
                    className={'coach-wrapper'}
                    style={{paddingBottom: 0}}
                >
                    <Row className='program-bottom-section well'>
                        <Col md={24} className='card-col -margin-bottom'>
                            {console.log(program?.coach?.picture)}
                            <div className='instructor-profile margin-bottom-10'>
                                <img
                                    src={program?.coach?.picture ? getImage("d23d739366d5eb1802c087dafbb337269a160be17930cc74133a7dc98a880f0b/images/sarah.jpg") : PlaceHolderImg}
                                    className='instructor-image'/>
                                <div>
                                    <h3 className='base-text'>{program?.coach?.name}</h3>
                                    <p className='para-text'>
                                        {program?.coachInfo?.bio}
                                    </p>
                                </div>
                            </div>

                            <div className="instructor-interest-education">
                                <div className="flex-box">
                                    <div className="box">
                                        <div className='subtitle para-text'>
                                            <h4 className='navy-text -font-bold base-text'>
                                                Interests
                                            </h4>
                                            <p className='para-text'>
                                                <ul>
                                                    {this.getList(program?.coachInfo?.interest)?.map(text => text && text !== " " &&
                                                    <li>{text}</li>)}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-box">
                                    <div className="box">
                                        <div className='subtitle para-text'>
                                            <h4 className='navy-text -font-bold base-text'>
                                                Education
                                            </h4>
                                            <p className='para-text'>
                                                <ul>
                                                    {this.getList(program?.coachInfo?.education)?.map(text => text && text !== " " &&
                                                    <li>{text}</li>)}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='subtitle para-text box'>
                                <h4 className='navy-text -font-bold base-text'>
                                    Experience
                                </h4>
                                <p className='para-text'>
                                    <ul className="flex-list">
                                        {this.getList(program?.coachInfo?.experience)?.map(text => text && text !== " " &&
                                        <li>{text}</li>)}
                                    </ul>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
};

export default CoachProgram;
