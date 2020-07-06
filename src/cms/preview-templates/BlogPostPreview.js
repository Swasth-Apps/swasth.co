import React from 'react'
import { BlogPostTemplatePreview } from '../../templates/blog-post'
import Helmet from './CategoryPagePreview'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <BlogPostTemplatePreview
      content={widgetFor('body')}
      feature={data}
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
