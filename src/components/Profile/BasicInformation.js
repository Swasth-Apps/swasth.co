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
                                provider?.profileImg,
                                "coaching",
                                'experts',
                            )}
                            options={{
                                imageWidth: 150,imageHeight: 150
                            }}
                        />
                        <div className="info">
                            <p className="title base-text">
                                {provider?.name?.full}
                            </p>
                            <p className="subtitle para-text">
                                {provider?.bio}
                            </p>
                            {provider?.address?.city ||  provider?.address.state || provider?.address.country ?
                            <p className="address para-text">
                               {provider?.address.city + ", "+ provider?.address.state + ", "+ provider?.address.country}
                            </p> : null}
                        </div>
                    </div>
                    <div className="cover-img-section">
                        <CLImage
                            className="cover-img"
                            cloudId={getCloudIDFromImageName(
                                provider?.coverImg,
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
