import React from "react";
import Layout from "../../../components/Layout/layout";
import CoachProgram from "../../../components/Coaching/Program";
import programs from "../../../JSON/CoachProgramsForEveryone.json"

class CoachingProgram extends React.Component {
    constructor(props) {
        super(props);
        const urlParams = typeof window !== 'undefined' ? window.location?.pathname?.split("/program/") : null;
        this.state = {
            loading: false,
            slug: urlParams?.[1]
        }
    }

    render() {
        const program = programs?.find(({slug}) => slug === this.state.slug);
        return (
            <Layout extraHeader noFooterMargin>
                    <CoachProgram program={program}/>
            </Layout>
        )
    }
};

export default CoachingProgram;
