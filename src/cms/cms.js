import CMS from 'netlify-cms-app'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ResilifyProgramPreview from './preview-templates/ResilifyProgramPreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('resilify-program', ResilifyProgramPreview);
