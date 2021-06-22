import React from 'react'
import Helmet from './CategoryPagePreview'
import {ResilifyProgramTemplate} from "../../templates/resilify-program";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <ResilifyProgramTemplate
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
