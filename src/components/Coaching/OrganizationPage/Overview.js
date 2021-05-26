import React, {useEffect} from "react";
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
                                    resizeMode={"cover"}
                                    controls
                                    width='100%'
                                    height='auto'
                                />}
                            <div className="organization-approach-html">
                                {ReactHtmlParser(organization?.approach?.html)}
                            </div>

                        </div> : null}
                    {organization?.comprehensive?.html ?
                        <div className="organization-approach right-approach">
                            {organization?.comprehensive?.video ?
                                <ReactPlayer
                                    className='video-img'
                                    url={organization?.comprehensive?.video}
                                    fluid={false}
                                    resizeMode={"cover"}
                                    controls
                                    width='100%'
                                    height='auto'
                                /> : <CLImage
                                    cloudId={getCloudIDFromImageName(
                                        organization?.comprehensive?.image || organization?.approach?.image,
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

                            <h2 className="base-text">Team</h2>
                            {organization?.teamMembers?.map(t =>
                                <ExpertCard member={t}/>)}
                        </div>
                    </div> : null}
            </div>
        </>
    )
}

export default Overview;
