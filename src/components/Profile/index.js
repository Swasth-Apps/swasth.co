import React from "react";
import BasicInformation from "./BasicInformation";
import ProfileData from "./ProfileData";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: this.props.expert?.node
        }
    }

    render() {
        const {provider, loading} = this.state;
        return (provider ?
                <div id="wrapper">
                    <div className="profile-page">
                        <div className="basic-profile-info">
                            {<>

                                <BasicInformation provider={provider?.frontmatter}/>
                                <ProfileData provider={provider?.frontmatter}/>
                            </>}

                        </div>
                    </div>
                </div> : null
        );
    }
}

export default Profile;
