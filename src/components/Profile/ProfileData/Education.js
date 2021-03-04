import React from "react";
import CLImage from "../../../helper/CLImage";
import {getCloudIDFromImageName} from "../../../helper/helper";

// const {Option} = Select;
const Education = ({provider}) => {

    return (provider?.qualifications?.length ?
        <div className="profile-data-content">
            <div className="profile-content-box">

                <div className="-flex">
                    <p className="title base-text">Education</p>
                </div>
                <div className="side-view-content">
                    {provider?.qualifications?.map(q =>
                        <div className="flex-content">
                            <CLImage
                                className="program-img"
                                cloudId={getCloudIDFromImageName(
                                    q.image,
                                    "coaching",
                                    'png',
                                )}
                            />
                            <div className="content">
                                <p className="para-text title">{q?.certification}</p>
                                <p className="para-text subtitle">{q?.school}</p>
                                <p className="para-text year">{q?.qualification_year}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div> : null
    )
};

export default Education;
