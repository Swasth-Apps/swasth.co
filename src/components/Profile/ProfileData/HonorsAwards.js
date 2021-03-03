import React from "react";
import CLImage from "../../../helper/CLImage";
import {getCloudIDFromImageName} from "../../../helper/helper";

// const {Option} = Select;
const HonorsAwards = ({provider}) => {

    return (
        <div className="profile-data-content">
            <div className="profile-content-box">
                    <div className="-flex">

                        <p className="title base-text">Honors & Awards</p>
                    </div>
                <div className="side-view-content">
                    {provider?.awards?.map(q =>
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
                                <p className="para-text title">{q?.award}</p>
                                <p className="para-text subtitle">{q?.givenBy}</p>
                                <p className="para-text year">{q?.year}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default HonorsAwards;
