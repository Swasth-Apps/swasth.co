import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'
import Helmet from './CategoryPagePreview'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      feature={entry.getIn(['data']).toJS()}
      helmet={
        <Helmet titleTemplate="%s | Feature">
          <title>{`${data.title}`}</title>
          <meta
            name="description"
            content={`${data.description}`}
          />
        </Helmet>
      }
    />
  )
}


export default BlogPostPreview
