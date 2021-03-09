import React from 'react'
import Layout from '../../components/Layout/layout'
import CoachingComponent from "../../components/Coaching";
import CoachingOverview from "../../components/Coaching/Overview";
import ClientsPrograms from "../../components/Coaching/ClientsPrograms";
import Experts from "../../components/Coaching/Experts";
import ProfessionalPrograms from "../../components/Coaching/ProfessionalPrograms";


class CoachingIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: "overview"
        }
    }

    renderTab = () =>{
        switch (this.state.tab) {
            case "overview": return <CoachingOverview />;
            case "everyone": return <ClientsPrograms />;
            case "professionals": return <ProfessionalPrograms />;
            case "experts": return <Experts />;
            default: return ;
        }
    };

    render() {
        return (
            <Layout extraHeader="coaching" onChangeTab={(t) => this.setState({
                tab: t
            })}>
                <CoachingComponent />
                <div className="coaching-mobile-section">
                    {this.renderTab()}
                </div>
            </Layout>
        )
    }
}

export default CoachingIndex
