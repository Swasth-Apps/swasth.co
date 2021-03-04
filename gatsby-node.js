// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
//
// // You can delete this file if you're not using it
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
//
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
     blogs:allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date
                featuredpost
                squareimage
                image
                username
                categories {
                    category {
                      title
                      slug
                    }
                 }
              }
            }
          }
        }
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    /******** for Infinite scroll in blog index page starts *********/
    createPage({
      path: "/blog",
      component: path.resolve('src/templates/blog-index.js'),
      context: {
        blogList: result.data.blogs.edges,
      },
    });
    /******** for Infinite scroll in blog index page ends *********/

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)
    //
    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`
    //
    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/blog-post.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
  })
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if(page.path.match(/^\/programs/)){
    createPage({
      path: "/programs",
      matchPath: '/programs/*',
      component: path.resolve(`src/pages/programs.js`)
    })
  }

  if(page.path.match(/^\/coaching\/program/)){
    createPage({
      path: "/coaching/program",
      matchPath: '/coaching/program/*',
      component: path.resolve(`src/pages/coaching/program/index.js`)
    })
  }

  if(page.path.match(/^\/expert/)){
    createPage({
      path: "/expert",
      matchPath: '/expert/*',
      component: path.resolve(`src/pages/expert.js`)
    })
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
