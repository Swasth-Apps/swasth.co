import React from "react";
import Dennish from "../../../assets/images/dennis.png";
import {getImage} from "../../../helper/helper";

const ExperCard = ({member}) =>{
    console.log("mfkdkfds",member)
    return(
        <div className="home-signature-courses short-courses expert-card">
            <div className={`course-card`}>
                <div className="course-card-image">
                        <img
                            src={getImage(member?.picture)}
                        />
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
