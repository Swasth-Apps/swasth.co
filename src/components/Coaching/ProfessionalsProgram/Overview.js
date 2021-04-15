import React from "react";
import ExpertCard from "./ExpertCard";
import ReactHtmlParser from "react-html-parser";
import ReactPlayer from "react-player";

const Overview = (props) => {
    const { organization } = props;
    return (
        <>
            <div className="individual-course-container">
                <div id="wrapper">

                <div className="organization-approach left-approach">
                    <div className="organization-approach-html">
                        {ReactHtmlParser(organization?.approach?.html)}
                    </div>
                    <img src="https://dinx6pvu8j-flywheel.netdna-ssl.com/wp-content/uploads/2020/07/image-asset-3.jpeg"/>
                </div>
                <div className="organization-approach right-approach">
                    <ReactPlayer
                        className='video-img'
                        url={organization?.comprehensive?.video}
                        fluid={false}
                        resizeMode={"contain"}
                        controls
                        style={{
                            height: "100%"
                        }}
                    />
                    <div className="organization-approach-html">
                        {ReactHtmlParser(organization?.comprehensive?.html)}
                    </div>
                </div>
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
