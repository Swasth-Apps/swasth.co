import React from "react";
import professionData from "../../../JSON/CoachProgramsForProfessionals.json"
import Program from "../../../components/Coaching/Program";
import CourseCard from "../CourseCard";


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
            openProgram: professionData?.find(({slug}) => slug === this.props.programSlug),
            programSlug: this.props.programSlug
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.programSlug !== this.props.programSlug) {
            this.setState({
                programSlug: this.props.programSlug,
                openProgram: professionData?.find(({slug}) => slug === this.props.programSlug)
            })
        }
    }


    render = () => {
        const {openProgram} = this.state;
        const programs = professionData?.filter(({isLive,organizationSlug}) => isLive && organizationSlug === this.props.organizationSlug);
        return (
            <>
                <div className={`organization-featured-programs ${openProgram ? "organization-program-detail" : ""}`}>
                    {!openProgram && !this.state.programSlug ?
                        <div
                            id='wrapper'
                            className={'coach-wrapper'}
                            style={{paddingBottom: 0}}
                        >
                            <h1 className="base-text" style={{marginBottom: -20}}>Programs</h1>
                            <div className="programs-list-page-program-card">
                                {programs?.map((program, index) =>
                                    <CourseCard
                                        isProfessional
                                        index={index}
                                        program={program}
                                    />
                                )}
                            </div>
                        </div> : <Program
                            isProfessional
                            program={openProgram}
                        />}
                </div>
                {/*{openProgram ?
                <div className="organization-members-container" style={{paddingTop: 50}}>
                    <div id="wrapper">

                        <h2 className="base-text">Program Facilitator</h2>
                        {openProgram?.coach ?
                            <ExpertCard member={openProgram?.coach}/> : null}
                        {openProgram?.coCoach?.map(t =>
                            <ExpertCard member={t}/>)}
                    </div>
                </div> : null}*/}
            </>
        );
    };
}

export default Programs;
