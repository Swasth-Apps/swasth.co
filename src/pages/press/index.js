import React from 'react'
import Layout from '../../components/Layout/layout'
import PressComponent from "../../components/PressComponent";
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";


class Press extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Layout extraHeader>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Press</title>
                    <meta
                        name="keywords"
                        content="Resiliens - Press"
                    />
                </Helmet>
                <PressComponent
                    coverages={this.props.data?.pressCoverages?.edges}
                    releases={this.props.data?.pressReleases?.edges}
                />
            </Layout>
        )
    }
}


export default Press;
export const pageQuery = graphql`
  query Press {
      pressCoverages: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "press-coverage-post" } } }, sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image
            title
            description
            link
          }
        }
      }
    }
    pressReleases: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "press-releases-post" } } }, sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
