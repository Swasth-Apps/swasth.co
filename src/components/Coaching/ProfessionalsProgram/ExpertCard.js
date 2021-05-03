import React from "react";
import {getCloudIDFromImageName, getImage} from "../../../helper/helper";
import CLImage from "../../../helper/CLImage";

const ExperCard = ({member}) => {
    return (
        <div className="home-signature-courses short-courses expert-card">
            <div className={`course-card`}>
                <div className="course-card-image">
                    {member?.marketingPicture ?
                        <CLImage
                            cloudId={getCloudIDFromImageName(
                                member?.marketingPicture,
                                "coaching",
                                'png',
                            )}
                            options={{
                                imageWidth: 500, imageHeight: 500
                            }}
                        /> : <img
                            src={getImage(member?.picture)}
                        />}
                </div>
                <div className="course-card-content">
                    <h3 className="base-text">{member.name}</h3>
                    <p className="para-text desc">
                        {member.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExperCard;
