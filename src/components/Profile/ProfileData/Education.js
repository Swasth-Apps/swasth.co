import React from "react";
import CLImage from "../../../helper/CLImage";
import {getCloudIDFromImageName, getInitials} from "../../../helper/helper";

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
                            {q.image ?
                                <CLImage
                                    className="program-img"
                                    cloudId={getCloudIDFromImageName(
                                        q.image,
                                        "coaching",
                                        'png',
                                    )}
                                /> : <div className="avatar-img program-img para-medium-text">{getInitials(q?.certification)}</div>}
                            <div className="content">
                                <p className="medium-text title">{q?.certification}</p>
                                <p className="book-text subtitle">{q?.school}</p>
                                <p className="light-text year">{q?.year}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div> : null
    )
};

export default Education;
