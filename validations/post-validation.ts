export default function postValidation(values) {
  const {
    blogTitle,
    blogDescription,
    blogImage,
    blogImageCaption,
    blogCategory,
    blogPostBody,
  } = values
  let errors = {} as {
    blogTitle: string
    blogDescription: string
    blogImageCaption: string
    blogCategory: string
    blogPostBody: string
    blogImage: string
  }
  if (!blogTitle) errors.blogTitle = 'Title is required'
  if (!blogDescription) errors.blogDescription = 'Description is required'
  if (blogImage.url && blogImage.publicId && !blogImageCaption) {
    errors.blogImageCaption = 'Image must have a caption'
  }
  if (blogTitle && blogTitle.length > 101) {
    errors.blogTitle = 'Title is too long, max of 100 characters is recommended'
  }
  if (blogDescription && blogDescription.length > 251) {
    errors.blogDescription = 'Title is too long, max of 250 characters is recommended'
  }
  if (blogImage.url && blogImageCaption.length > 101) {
    errors.blogImageCaption = 'Caption is too long, max of 100 characters is recommended'
  }
  if (blogCategory && blogCategory.length > 101) {
    errors.blogCategory = 'Category is too long, max of 100 characters is recommended'
  }
  if (!blogImage.url && !blogImage.publicId && blogImageCaption) {
    errors.blogImageCaption = 'Image is required'
  }
  if (!blogPostBody) errors.blogPostBody = 'Body is required'
  if (!blogCategory) errors.blogCategory = 'Category required'
  return { errors, isError: Object.keys(errors).length > 0 }
}
