import React from 'react'
import Layout from '../../../components/Layout/layout'
import CategoryPageScreen from "../../../components/Resilify/CategoryPage";
import {graphql} from "gatsby";


class ResilifyCategory extends React.Component {

    render() {
        const { resilifyPrograms } = this.props.data;
        return (
            <Layout extraHeader>
                <CategoryPageScreen programs={resilifyPrograms?.edges}/>
            </Layout>
        )
    }
}

export default ResilifyCategory
export const pageQuery = graphql`
  query ResilifyAllPrograms {
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
