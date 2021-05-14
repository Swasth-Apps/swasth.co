import React from 'react'
import Overview from './Overview'
import FAQs from './Faq'
import {Tabs} from 'antd'
import Programs from "./Programs";
import _ from "lodash";
import {getCLImageUrl} from "../../../helper/helper";
import {Link} from "gatsby";

const {TabPane} = Tabs;

class OrganizationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: props.selectedTab,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.organization) !== JSON.stringify(this.props.organization)) {
            this.forceUpdate()
        }
    }

    getContent = () => {

        switch (this.state.selectedTab) {
            case 'home':
                return <Overview
                    onClick={this.handleCourseClick}
                    organization={this.props.organization?.[this.props.organizationSlug]}
                />;
            case 'programs':
                return <Programs
                    organizationSlug={this.props.organizationSlug}
                    programSlug={this.props.programSlug}
                />;
            case 'faqs':
                return <div id="wrapper">
                    <FAQs/>
                </div>;
        }
    };

    handleCourseClick = () => {
        this.setState({
            isCourseOpen: true,
            selectedTab: '2',
        })
    };

    render() {
        const { organizationSlug } = this.props;
        let organization = this.props.organization?.[organizationSlug];
        const teamOwner = _.find(organization?.teamMembers, ({ userId }) => userId === organization.teamOwnerId);
        return (
            <>
                <section
                    id="banner"
                    className={`major max-width-class professional-page-banner`}
                    style={{
                        backgroundImage: `url(${getCLImageUrl(organization?.image, "coaching", "organizations",true)})`,
                        backgroundAttachment: "unset"
                    }}
                >

                    <div
                        id='wrapper'
                        style={{padding: 0}}
                    >
                        <h1 className="base-text" style={{marginTop: "-2em", color: "white", textAlign: "center"}}>
                            {organization?.name}</h1>
                        <p className="para-text">By {teamOwner?.name}</p>
                    </div>
                </section>
                <Tabs
                    activeKey={this.state.selectedTab}
                    className="organization-program-tab"
                    onChange={(e) => this.setState({
                        selectedTab: e,
                        isCourseOpen: false
                    })}
                >
                    <TabPane tab={
                        <Link
                            to={`/coaching/organizations/${organizationSlug}/home`}
                            className={`para-text tab-title`}
                        >
                            <p className="para-text">Home</p>
                        </Link>} key="home"/>
                    <TabPane tab={
                        <Link
                            to={`/coaching/organizations/${organizationSlug}/programs`}
                            className={`para-text tab-title`}
                        >
                            <p className="para-text">Programs</p>
                        </Link>} key="programs"/>
                    <TabPane tab={
                        <Link
                            to={`/coaching/organizations/${organizationSlug}/faqs`}
                            className={`para-text tab-title`}
                        >
                            <p className="para-text">FAQ</p>
                        </Link>} key="faqs"/>
                </Tabs>
                {this.getContent()}
            </>
        )
    }
}

export default OrganizationPage;
