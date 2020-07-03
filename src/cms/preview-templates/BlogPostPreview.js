import React from 'react'
import BlogPostTemplate from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description']).toJS()}
    tags={entry.getIn(['data', 'tags']).toJS()}
    title={entry.getIn(['data', 'title']).toJS()}
  />
)


export default BlogPostPreview
