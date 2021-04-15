import React from 'react'
import Overview from './Overview'
import FAQs from './Faq'
import {Tabs} from 'antd'
import Programs from "./Programs";
import {connect} from "react-redux";
import _ from "lodash";
import {getCLImageUrl} from "../../../helper/helper";

const { TabPane } = Tabs;

class ProfessionalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '1',
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.organization !== this.props.organization){
            this.forceUpdate()
        }
    }

    getContent = () => {
        switch (this.state.selectedTab) {
            case '1':
                return <Overview
                    onClick={this.handleCourseClick}
                    organization={this.props.organization?.[this.props.organizationId]}
                />;
            case '2':
                return <Programs
                    organization={this.props.organization?.[this.props.organizationId]}
                />;
            case '3':
                return <div id="wrapper">
                    <FAQs />
                </div>;
        }
    };

    getImageContent = () => {
        switch (this.state.selectedTab) {
            case '1':
                return "Overview";
            case '2':
                return "Programs";
            case '3':
                return "FAQ"
        }
    };
    handleCourseClick = () => {
        this.setState({
            isCourseOpen: true,
            selectedTab: '2',
        })
    };

    render() {
        let organization  = this.props.organization?.[this.props.organizationId];
        const teamOwner = _.find(organization?.teamMembers,({userId}) => userId === organization.teamOwnerId)
        return (
            <>
                <section
                    id="banner"
                    className={`major max-width-class professional-page-banner`}
                    style={{ backgroundImage: `url(${getCLImageUrl(organization?.image,"coaching","png")})` }}
                >

                        <div
                            id='wrapper'
                            style={{padding: 0}}
                        >
                            <h1 className="base-text" style={{marginTop: "-2em",color: "white", textAlign:"center"}}>
                                {organization?.name}</h1>
                            <p className="para-text">By {teamOwner?.name}</p>
                        </div>
                </section>
                <Tabs activeKey={this.state.selectedTab} className="professional-program-tab" onChange={(e) => this.setState({
                    selectedTab: e,
                    isCourseOpen: false
                })}>
                    <TabPane tab={<p className="para-text">Overview</p>} key="1"/>
                    <TabPane tab={<p className="para-text">Programs</p>} key="2"/>
                    <TabPane tab={<p className="para-text">FAQ</p>} key="3"/>
                </Tabs>
                    {this.getContent() }
            </>
        )
    }
}
export default ProfessionalPage;
