import React from "react";
import Profile from "../components/Profile";
import Layout from "../components/Layout/layout";
import {graphql} from "gatsby";

const ExpertComponent = props => {

    const { experts } = props.data;
    const path = typeof window !== "undefined" ? window?.location?.pathname?.substring('/expert/'.length) : "";
    console.log(experts)
    const expert = experts?.edges?.find(({node}) => node?.frontmatter?.slug?.includes(path));
    return (
        <Layout>
            <Profile expert={expert}/>
        </Layout>
    )
};

export default ExpertComponent;
export const pageQuery = graphql`
  query ExpertDatas {
      experts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "coaching-experts" } } }
    ) {
      edges {
        node {
          frontmatter {
            parent
            profileImage
            coverImage
            location
            title
            about
            slug
            qualifications{
                certification
                school
                year
                image
            }
            links{
                text
                link
            }
            books{
                title
                shortDescription
                link
                image
            }
            titleBio
            sequence
          }
        }
      }
    }
  }
`
