import React from "react";
import { Link } from "gatsby";
import {ClockCircleOutlined, RightOutlined, UsergroupAddOutlined} from '@ant-design/icons'
import {getCloudIDFromImageName, getImage} from "../../../helper/helper";
import PlaceHolderImg from "../../../assets/images/image-placeholder.png";
import CLImage from "../../../helper/CLImage";
import ShowMore from 'react-show-more';

const   OrgProgram = ({program,noPrice = false,slug}) =>{
    return(
        <Link
            className="home-signature-courses short-courses"
            to={`/coaching/professionals/${slug}/programs/${program.slug}`}
        >
            <div className={`course-card`}>
                <div className="course-card-image"
                     style={{background: !program.image ?
                             `linear-gradient(${program?.gradient?.[0] || "#614385"} , ${program?.gradient?.[1] || "#516395"})`
                             : 'transparent'}}
                >
                    <CLImage
                        cloudId={getCloudIDFromImageName(
                            program?.marketingImg,
                            "coaching",
                            'png',
                        )}
                        options={{
                            imageWidth: 1200,
                            imageHeight: 800
                        }}
                        // className={"program-img"}
                    />
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
                        <ShowMore
                            lines={4}
                            more='Show more'
                            less='Show less'
                            anchorClass=''
                        >{program.shortDescription}</ShowMore>

                    </p>
                    {!noPrice ?
                    <div className="course-registration-info">
                        <h3 className="base-text">
                            {program.isFree ? "Free" : `$${parseFloat(parseInt(program.payment,10) / 100)}`}
                        </h3>
                    </div> : null}
                    <div className="course-card-footer">
                        <div className="course-card-footer-coach">
                            <img
                                src={program?.coach?.picture ? getImage(program?.coach?.picture) : PlaceHolderImg}
                            />
                            <span className="para-text">    {program?.coach?.name} </span>
                        </div>
                        <p className="para-text" style={{marginBottom: 0}}>
                            View Program
                            <RightOutlined />
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default OrgProgram;
