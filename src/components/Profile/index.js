import React from "react";
import BasicInformation from "./BasicInformation";
import ProfileData from "./ProfileData";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {getProviderSlug} from "../../queries";
import graphql_endpoint from "../../aws-appsync-url";
import Loader from "../Loader";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: null
        }
    }

    componentDidMount() {
        const path = window.location.pathname.substring('/expert/'.length);
        this.setState({
            loading: true
        });
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
            },
        });
        API.graphql(graphqlOperation(getProviderSlug, {slug: path}), {
            "x-api-key": graphql_endpoint.COACHING_API_KEY
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

    render() {
        const {provider, loading} = this.state;
        return (provider ?
                <div id="wrapper">
                    <div className="profile-page">
                        <div className="basic-profile-info">
                            {loading ? <Loader/> : <>

                                <BasicInformation provider={provider}/>
                                <ProfileData provider={provider}/>
                            </>}

                        </div>
                    </div>
                </div> : null
        );
    }
}

export default Profile;
