import React from "react";
import ExpertCard from "./ExpertCard";
import ReactHtmlParser from "react-html-parser";
import ReactPlayer from "react-player";
import CLImage from "../../../helper/CLImage";
import {getCloudIDFromImageName} from "../../../helper/helper";

const Overview = (props) => {
    const {organization} = props;
    return (
        <>
            <div className="individual-course-container">
                <div id="wrapper">
                    {organization?.approach?.html ?
                        <div className="organization-approach left-approach">
                            <div className="organization-approach-html">
                                {ReactHtmlParser(organization?.approach?.html)}
                            </div>
                            {organization?.approach?.image ?
                                <CLImage
                                    cloudId={getCloudIDFromImageName(
                                        organization?.approach?.image,
                                        "coaching",
                                        'png',
                                    )}
                                /> : <ReactPlayer
                                    className='video-img'
                                    url={organization?.approach?.video}
                                    fluid={false}
                                    resizeMode={"contain"}
                                    controls
                                    style={{
                                        height: "100%"
                                    }}
                                />}
                        </div> : null}
                    {organization?.comprehensive?.html ?
                        <div className="organization-approach right-approach">
                            {organization?.comprehensive?.video ?
                                <ReactPlayer
                                    className='video-img'
                                    url={organization?.comprehensive?.video}
                                    fluid={false}
                                    resizeMode={"contain"}
                                    controls
                                    style={{
                                        height: "100%"
                                    }}
                                /> : <CLImage
                                    cloudId={getCloudIDFromImageName(
                                        organization?.approach?.image,
                                        "coaching",
                                        'png',
                                    )}
                                />}
                            <div className="organization-approach-html">
                                {ReactHtmlParser(organization?.comprehensive?.html)}
                            </div>
                        </div> : null}
                </div>
                {organization?.teamMembers?.length ?
                    <div className="organization-members-container">
                        <div id="wrapper">

                            <h2 className="base-text">Team Members</h2>
                            {organization?.teamMembers?.map(t =>
                                <ExpertCard member={t}/>)}
                        </div>
                    </div> : null}
            </div>
        </>
    )
}

export default Overview;
