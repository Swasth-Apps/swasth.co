import React from 'react';
import {Link} from 'gatsby';
import ShowMore from 'react-show-more';

import RegisterInterest from "../RegisterInterestModal";
import {getCloudIDFromImageName} from "../../helper/helper";
import CLImage from "../../helper/CLImage";

/*
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
                        {/!*{props.isVideo ? <PlayCircleFilled className="video-button"/> : null}*!/}
                    </div>
                    <div className="course-card-content">
                        <h3 className="base-text">{program.name}</h3>
                        <p style={{display: "flex", flexWrap: "wrap",marginBottom: 0}}>
                            {/!*<Icon type="highlight"/>*!/}
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
                      {/!*  <div className="course-registration-info">
                            <h3>{props.startingSoon ? "Enrollments closing soon" : "Early registration Save $140"}</h3>
                            <p>{props.startingSoon ? 'Close in 3d 13h 37m' : "Offer ends August 22"}</p>
                        </div>*!/}
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
*/

const CourseCard = ({program,isProfessional = false}) => {
    return (
        <div className="flex-coloured-container peach-bg tm-100">
            <div className="course-panel-text-wrapper">
                <h1 className="heading-32 ch-width-24 base-text">
                    {program.name}
                </h1>
                <p className="body-18 ch-width-50 para-text">
                    {program.shortDescription || program.description}
                </p>
                <div className="program-list-page-buttons tm-8">
                    <div className="rm-16">
                        <RegisterInterest program={program} programSlug={program.slug}/>
                    </div>
                    <Link to={isProfessional ?
                        `/coaching/organizations/${(program?.organizationSlug)}/programs/${program?.slug}` : `/coaching/program/${(program?.slug)}`} className="secondary-button-large w-button">Program Details</Link>
                </div>
            </div>
            <div className="course-creator-details">
                <CLImage
                    cloudId={getCloudIDFromImageName(
                        program?.coachInfo?.picture,
                        "coaching",
                        'experts',
                    )}
                    transformation={[
                            {gravity: "face", height: 800, width: 800, crop: "crop"},
                            // {radius: "max"},
                            {width: 150,height: 150, crop: "scale"}
                        ]}
                    className="image-18"
                />
                <div style={{width: "100%"}}>
                    <h3 className="heading-20 bm-8 para-medium-text">{program?.coachInfo?.name}</h3>
                    <p className="body-14 para-text show-more-less-desc">
                        <ShowMore
                            lines={2}
                            more='Show more'
                            less='Show less'
                            anchorClass=''
                        >{program?.coachInfo?.title}</ShowMore>

                    </p>
                    <div className="course-price">
                        <div className="div-block-35"><h6 className="body-16 steel bm-0 para-medium-text">Program Fee</h6>
                            <h1 className="body-16 semi bm-0 base-text">{program?.isFree ? "FREE" : `$${program?.payment / 100}`}</h1></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseCard;
