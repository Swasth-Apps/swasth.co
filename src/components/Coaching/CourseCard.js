import React from 'react';
import {ClockCircleOutlined, RightOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import PlaceHolderImg from '../../assets/images/image-placeholder.png'
import {Link} from 'gatsby';
import {getImage, getProgramName} from "../../helper/helper";
import {Animated} from "react-animated-css";

const CourseCard = ({program, className,index}) => {
    return (
        <Link to={`/coaching/program/${getProgramName(program?.name)}?program=${program.id}`} state={{isCourseOpen: true}} className={className}>
            <Animated animationIn="zoomIn" animationInDuration={index * 500}>

                <div className={`course-card`}>
                    <div className="course-card-image"
                         style={{background: !program.image ?
                                 `linear-gradient(${program?.gradient?.[0] || "#614385"} , ${program?.gradient?.[1] || "#516395"})`
                                 : 'transparent'}}
                    >
                        {program?.image ?
                            <img
                                src={getImage(program?.image)}
                            /> : null}
                        {/*{props.isVideo ? <PlayCircleFilled className="video-button"/> : null}*/}
                    </div>
                    <div className="course-card-content">
                        <h3 className="base-text">{program.name}</h3>
                        <p style={{display: "flex", flexWrap: "wrap",marginBottom: 0}}>
                            {/*<Icon type="highlight"/>*/}
                            <span className="para-text">
                                    <span style={{display: "flex", flexWrap: "wrap"}}>
                                  {program.tags?.length ? program.tags.map((tag, i) =>
                                      <span className="program-tags">
                                                 {tag}
                                            </span>
                                  ) : ""}
                                    </span>
                                </span>
                        </p>
                        <div className="course-basics">
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
                        </div>
                        <p className="para-text desc">
                            {program.description}
                        </p>
                        <div className="course-registration-info">
                            <h3 className="base-text">
                                {program.isFree ? "Free" : `$${parseFloat(parseInt(program.payment,10) / 100)}`}
                            </h3>
                        </div>
                      {/*  <div className="course-registration-info">
                            <h3>{props.startingSoon ? "Enrollments closing soon" : "Early registration Save $140"}</h3>
                            <p>{props.startingSoon ? 'Close in 3d 13h 37m' : "Offer ends August 22"}</p>
                        </div>*/}
                    </div>
                    <div className="course-card-footer">
                        <p className="para-text" style={{marginBottom: 0}}>
                            View Program
                            <RightOutlined/>
                        </p>
                        <div className="course-card-footer-coach">
                            <img
                                src={program?.coach?.picture ? getImage(program?.coach?.picture) : PlaceHolderImg}
                            />
                            <span className="para-text">    {program?.coach?.name} </span>
                        </div>
                    </div>
                </div>
            </Animated>
        </Link>
    )
};

export default CourseCard;
