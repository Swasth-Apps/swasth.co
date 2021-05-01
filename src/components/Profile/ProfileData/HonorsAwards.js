import React from "react";
import CLImage from "../../../helper/CLImage";
import {getCloudIDFromImageName, getInitials} from "../../../helper/helper";

// const {Option} = Select;
const HonorsAwards = ({provider}) => {

    return (
        provider?.awards?.length ?
        <div className="profile-data-content">
            <div className="profile-content-box">
                    <div className="-flex">

                        <p className="title base-text">Honors & Awards</p>
                    </div>
                <div className="side-view-content">
                    {provider?.awards?.map(q =>
                        <div className="flex-content">
                            {q.image ?
                            <CLImage
                                className="program-img"
                                cloudId={getCloudIDFromImageName(
                                    q.image,
                                    "coaching",
                                    'png',
                                )}
                            /> : <div className="avatar-img program-img para-medium-text">{getInitials(q?.award)}</div>}
                            <div className="content">
                                <p className="para-text title">{q?.award}</p>
                                <p className="para-text subtitle">{q?.givenBy}</p>
                                <p className="para-text year">{q?.year}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div> : null
    )
};

export default HonorsAwards;
