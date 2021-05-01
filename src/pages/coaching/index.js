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
            tab: this.getRoute()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location !== this.props.location){
            this.setState({
                tab: this.getRoute()
            })
        }
    }

    getRoute = () => {
        if(typeof window !== "undefined"){
            const path = window.location.pathname.substring('/coaching/'.length);
            if(path.includes("everyone")){
                return "everyone"
            } else if(path.includes("professionals")){
                return "professionals"
            }else if(path.includes("experts")){
                return "experts"
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
                return <ProfessionalPrograms location={this.props.location}/>;
            case "experts":
                return <Experts/>;
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
            default:
                return;
        }
    };


    render() {
        console.log(this.props)
        return (
            <Layout
                extraHeader="coaching"
                noFooterMargin={this.state.tab === "professionals"}
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
