import React from 'react'
import Layout from '../../components/Layout/layout'
import Programs from "../../components/Resilify/Programs";
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";
import _ from "lodash";


class ResilifyPrograms extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    render() {
        const { resilifyPrograms } = this.props.data;
        return (
            <Layout extraHeader>
                <Helmet title="Resiliens">
                    <meta charSet="utf-8" />
                    <title>Resiliens - Our evidence-based self guided programs</title>
                    <meta
                        name="keywords"
                        content="Resiliens - Our evidence-based self guided programs"
                    />
                </Helmet>
                <Programs programs={_.sortBy(resilifyPrograms?.edges,({node:{frontmatter}}) => frontmatter.sequence)}/>
            </Layout>
        )
    }
}


export default ResilifyPrograms;
export const pageQuery = graphql`
  query ResilifyPrograms {
      resilifyPrograms: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "resilify-program" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            parent
            image
            tags
            title
            overview
            sequence
            sessions{
            session{
                title
              }
            }
            categories {
                  category {
                    title
                  }
                }
          }
        }
      }
    }
  }
`
