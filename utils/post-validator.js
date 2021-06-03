export default function postValidator(post) {
  const { title, description, image, imageCaption, category, body } = post
  let errors = {}
  if (!title) errors.title = 'Title is required'
  if (!description) errors.description = 'Description is required'
  if (image) {
    if (!imageCaption) errors.imageCaption = 'Image must have a caption'
  }
  if (!body) errors.body = 'Body is required'
  if (!category) errors.category = 'Category required'
  return errors
}
