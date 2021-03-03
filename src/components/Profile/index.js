import React from "react";
import BasicInformation from "./BasicInformation";
import ProfileData from "./ProfileData";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {getProviderSlug} from "../../queries";

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            provider: null
        }
    }

    componentDidMount() {
        const path = window.location.pathname.substring('/expert/'.length);
        console.log(path)
        this.setState({
            loading: true
        });
        Amplify.configure({
            API: {
                graphql_endpoint: "https://2iytwnhpanhevbcif4vtbgb5re.appsync-api.us-east-1.amazonaws.com/graphql",
            },
        });
        API.graphql(graphqlOperation(getProviderSlug,{slug: path}), {
            "x-api-key": "da2-a3lvko7r7jeivfhhcgj3dfcfpe"
        })
            .then(({data}) => {
                this.setState({
                    provider: data?.getProviderSlug,
                    loading: false
                })
            }).catch(() => this.setState({
            loading: false
        }));
    }

    render(){
        const { provider } = this.state;
        return(
                <div className="profile-page">
                    <div className="basic-profile-info">
                        <BasicInformation provider={provider}/>
                        <ProfileData provider={provider}/>
                    </div>
                </div>
        );
    }
}

export default Profile;
