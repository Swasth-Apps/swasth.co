import React from "react";
import CLImage from "../../helper/CLImage";
import {getCloudIDFromImageName} from "../../helper/helper";

const BasicInformation = (props) => {
    const { provider } = props;
    return (
        <div>
            <div className="basic-profile">
                    <div className="profile-section">
                        <CLImage
                            className="program-img"
                            cloudId={getCloudIDFromImageName(
                                provider?.profileImage,
                                "coaching",
                                'experts',
                            )}
                            options={{
                                imageWidth: 150,imageHeight: 150
                            }}
                        />
                        <div className="info">
                            <p className="title base-text">
                                {provider?.title}
                            </p>
                            <p className="subtitle medium-text">
                                {provider?.titleBio}
                            </p>
                            {provider?.location ?
                            <p className="address light-text">
                               {provider?.location}
                            </p> : null}
                        </div>
                    </div>
                    <div className="cover-img-section">
                        <CLImage
                            className="cover-img"
                            cloudId={getCloudIDFromImageName(
                                provider?.coverImage,
                                "coaching",
                                'experts',
                            )}
                            options={{
                                imageWidth: 1200,imageHeight: 800
                            }}
                        />
                        <div className="gradient"/>
                    </div>
            </div>
        </div>
    )
};

export default BasicInformation;
