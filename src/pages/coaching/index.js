import React from 'react'
import Layout from '../../components/Layout/layout'
import CoachingComponent from "../../components/Coaching";
import CoachingOverview from "../../components/Coaching/Overview";
import ClientsPrograms from "../../components/Coaching/ClientsPrograms";
import ProfessionalPrograms from "../../components/Coaching/ProfessionalPrograms";
import Experts from "../../components/Coaching/Experts";
import Organizations from "../../components/Coaching/Organizations";
import {graphql} from "gatsby";
import _ from "lodash";


class CoachingIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: this.getRoute()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location !== this.props.location) {
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
        if (typeof window !== "undefined" && window.location?.pathname) {
            const path = window.location?.pathname?.substring('/coaching/'.length);
            if (path?.includes("everyone")) {
                return "everyone"
            } else if (path?.includes("professionals")) {
                return "professionals"
            } else if (path?.includes("experts")) {
                return "experts"
            } else if (path?.includes("organizations")) {
                return "organizations"
            } else {
                return "overview"
            }
        }
        return null;
    }

    renderTab = () => {
        const { experts } = this.props.data;
        switch (this.state.tab) {
            case "overview":
                return <CoachingOverview/>;
            case "everyone":
                return <ClientsPrograms/>;
            case "professionals":
                return <ProfessionalPrograms/>;
            case "experts":
                return <Experts experts={_.sortBy(experts?.edges,({node:{frontmatter}}) => frontmatter.sequence)}/>;
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
        if (typeof window !== "undefined" && window.location.pathname && !this.state.tab) {
            this.componentDidMount();
        }
        return (
            <Layout
                extraHeader="coaching"
                noFooterMargin={this.state.tab === "organizations" || this.state.tab === "professionals"}
                onChangeTab={(t) => {
                    this.setState({
                        tab: t
                    })
                }}
            >
                {this.state.tab ?
                    <>
                        <CoachingComponent
                            tab={this.state.tab}
                            location={this.props.location}
                            experts={this.props.data?.experts}
                        />

                        <div className="coaching-mobile-section">
                            {this.renderTab()}
                        </div>

                    </> : null}
            </Layout>
        )
    }
}

export default CoachingIndex;
export const pageQuery = graphql`
  query ExpertsList {
      experts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "coaching-experts" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            profileImage
            title
            name
            slug
            sequence
          }
        }
      }
    }
  }
`
