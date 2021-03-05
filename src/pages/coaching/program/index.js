import React from "react";
import Layout from "../../../components/layout";
import CoachProgram from "../../../components/Coaching/Program";
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import graphql_endpoint from '../../../aws-appsync-url'

const getMarketingData = `query getMarketingData($programId: ID!) {
  getMarketingData(programId: $programId ) {
    id
    coachId
    coach{
        userId
        name
        email
        picture
    }
    name
    description
    duration{
      period
      interval
    }
    documents
    instructions
    app
    image
    type
    gradient
    isFeatured
    isFree
    shortDescription
    learningObjectives
    featuredVideos
    payment
    tags
    coachInfo{
      bio
      interest
      education
      experience
    }
    sessions{
      id
      moduleId
      coachId
      programId
      name
      module
      description
      instructions
      startDate
      relativeDays
      type
      relativeStartDate{
        period
        interval
      }
      image
    }
  }
}`;

if (typeof window === 'undefined') {
    global.window = {
        location: {}
    }
}

class CoachingProgram extends React.Component{
    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        const programId = urlParams.get('program');
        this.state = {
            program: {},
            programId,
            coachId:"",
            loading: false
        }
    }


    componentDidMount() {
        const { programId } = this.state;
        this.setState({
            loading: true
        });
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.COACHING_DEV_MARKETING,
            },
        });
        API.graphql(graphqlOperation(getMarketingData, { programId }), {
            "x-api-key": graphql_endpoint.COACHING_DEV_API_KEY
        }).then(({ data }) => {
            this.setState({
                program: data?.getMarketingData,
                loading: false
            })
        }).catch(e => {
            this.setState({
            loading: false
        });
            console.log(e)
        });
    }

    render() {
        return(
            <Layout extraHeader>
                {this.state.loading ? null :
                <CoachProgram program={this.state.program}/>}
            </Layout>
        )
    }
};

export default CoachingProgram;
