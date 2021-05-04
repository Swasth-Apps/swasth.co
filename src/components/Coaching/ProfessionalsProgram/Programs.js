import React from "react";
import OrgPrograms from "./OrgPrograms";
import OrgProgramDetail from "./OrgProgramDetail";
import graphql_endpoint from "../../../aws-appsync-url";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import ExpertCard from "./ExpertCard";

const getProgramBySlug = `query getProgramBySlug($slug: String!) {
  getProgramBySlug(slug: $slug ) {
    id
    coachId 
    name
    shortTitle
    description
    duration{
      period
      interval
    }
    image
    type
    isFree
    marketingImg
    marketingDescription
    sessions{
      id
      name
      description
      startDate
    }
    coach{
        name
        marketingPicture
        description
        expertSlug
        userId
    }
    coCoach{
        name
        marketingPicture
        description
        expertSlug
        userId
    }
  }
}`;

class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
            openProgram: null,
            programSlug: this.props.programSlug
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.programSlug !== this.props.programSlug) {
            this.setState({
                programSlug: this.props.programSlug,
                openProgram: null
            }, () => this.props.programSlug && this.componentDidMount())
        }
    }


    componentDidMount() {
        this.setState({
            loading: true
        });
        Amplify.configure({
            API: {
                graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
            },
        });
        API.graphql(graphqlOperation(getProgramBySlug, {slug: this.state.programSlug}), {
            "x-api-key": graphql_endpoint.COACHING_API_KEY
        }).then(({data}) => {
            this.setState({
                openProgram: data?.getProgramBySlug,
                loading: false
            })
        }).catch(e => {
            this.setState({
                loading: true
            });
            console.log(e)
        });
    }

    render = () => {
        const {organization} = this.props;
        const {loading,openProgram} = this.state;
        return (
            <>
                <div className={`organization-featured-programs ${openProgram ? "organization-program-detail" : ""}`}>
                    {!openProgram && !this.state.programSlug ?
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <h1 className="base-text">Programs</h1>
                            {organization?.programs?.map((program, index) =>
                                <OrgPrograms
                                    noPrice
                                    index={index}
                                    program={program}
                                    slug={organization?.slug}
                                />
                            )}
                        </div> : <div
                            id='wrapper'
                            className={'medium-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            {loading ? <div className="individual-course-container">
                                    <div className="keen-slider">
                                        <div className="keen-slider__slide">
                                            <div className="card-loader">
                                                <div className="card__image loading"/>
                                                <div className="card__title loading"/>
                                                <div className="card__description loading"/>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                <OrgProgramDetail
                                    program={openProgram}
                                    programSlug={this.state.programSlug}
                                />}
                        </div>}
                </div>
                {openProgram ?
                <div className="organization-members-container" style={{paddingTop: 50}}>
                    <div id="wrapper">

                        <h2 className="base-text">Program Facilitator</h2>
                        {openProgram?.coach ?
                            <ExpertCard member={openProgram?.coach}/> : null}
                        {openProgram?.coCoach?.map(t =>
                            <ExpertCard member={t}/>)}
                    </div>
                </div> : null}
            </>
        );
    };
}

export default Programs;
