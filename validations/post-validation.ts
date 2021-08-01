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
  if (!blogImage.url && !blogImage.publicId && blogImageCaption) {
    errors.blogImageCaption = 'Image is required'
  }
  if (!blogPostBody) errors.blogPostBody = 'Body is required'
  if (!blogCategory) errors.blogCategory = 'Category required'
  return { errors, isError: Object.keys(errors).length > 0 }
}
