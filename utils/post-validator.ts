export default function bookingValidation(values) {
  const { title, description, image, imageCaption, category, postBody } = values
  let errors = {} as {
    title: string
    description: string
    imageCaption: string
    category: string
    postBody: string
    image: string
  }
  if (!title) errors.title = 'Title is required'
  if (!description) errors.description = 'Description is required'
  if (image) {
    if (!imageCaption) errors.imageCaption = 'Image must have a caption'
  }
  if (!postBody) errors.postBody = 'Body is required'
  if (!category) errors.category = 'Category required'
  return { errors, isError: Object.keys(errors).length > 0 }
}
