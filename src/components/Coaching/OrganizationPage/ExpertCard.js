import React from "react";
import { navigate } from "gatsby";
import {getCloudIDFromImageName, getImage} from "../../../helper/helper";
import CLImage from "../../../helper/CLImage";

const ExperCard = ({member}) => {

    const redirectToExpert = async (e) => {
        e.preventDefault();
        if(member.expertSlug){
            await navigate(`/expert/${member.expertSlug}`);
        }
    };

    return (
        <div className="home-signature-courses short-courses expert-card" onClick={redirectToExpert} style={{cursor: "pointer"}}>
            <div className={`course-card`}>
                <div className="course-card-image">
                    {member?.picture ?
                        <CLImage
                            cloudId={getCloudIDFromImageName(
                                member?.picture,
                                "coaching",
                                'experts',
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
                    <p className="light-text desc">
                        {member.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExperCard;
