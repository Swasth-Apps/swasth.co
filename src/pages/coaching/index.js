import React from 'react'
import Layout from '../../components/Layout/layout'
import CoachingComponent from "../../components/Coaching";
import CoachingOverview from "../../components/Coaching/Overview";
import ClientsPrograms from "../../components/Coaching/ClientsPrograms";
import ProfessionalPrograms from "../../components/Coaching/ProfessionalPrograms";
import Experts from "../../components/Coaching/Experts";
import Organizations from "../../components/Coaching/Organizations";


class CoachingIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: this.getRoute()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(JSON.stringify(prevProps.location) !== JSON.stringify(this.props.location)){
            console.log("======== In heere =-======")
            this.setState({
                tab: this.getRoute()
            })
        }
    }

    componentDidMount() {
        this.setState({
            tab: this.getRoute()
        })
    }

    getRoute = () => {
        console.log("====== --Window ----==========",window);
        if(typeof window !== "undefined"){
            let path = window.location?.pathname?.substring('/coaching/'.length);
            path = path?.endsWith('/') ? path?.substr(0, path.length - 1) : path;
            if(path?.includes("everyone")){
                return "everyone"
            } else if(path?.includes("professionals")){
                return "professionals"
            }else if(path?.includes("experts")){
                return "experts"
            }else if(path?.includes("organizations")){
                return "organizations"
            }else{
                return "overview"
            }
        }else{
            return "overview"
        }
    }

    renderTab = () => {
        switch (this.state.tab) {
            case "overview":
                return <CoachingOverview/>;
            case "everyone":
                return <ClientsPrograms/>;
            case "professionals":
                return <ProfessionalPrograms />;
            case "experts":
                return <Experts/>;
            case "organizations":
                return <Organizations location={this.props.location}/>;
            default:
                return;
        }
    };

    getTab = (key) => {
        switch (key) {
            case "1":
                return "overview";
            case "2":
                return "everyone";
            case "3":
                return "professionals";
            case "4":
                return "experts";
            case "5":
                return "Organizations";
            default:
                return;
        }
    };


    render() {
        return (
            <Layout
                extraHeader="coaching"
                noFooterMargin={this.state.tab === "organizations" || this.state.tab === "professionals" }
                onChangeTab={(t) => {
                    this.setState({
                        tab: t
                    })
                }}
            >
                <CoachingComponent
                tab={this.state.tab}
                location={this.props.location}
                />
                <div className="coaching-mobile-section">
                    {this.renderTab()}
                </div>
            </Layout>
        )
    }
}

export default CoachingIndex
