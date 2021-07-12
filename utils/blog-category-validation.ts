export default function blogCategoryValidation(values) {
  const { title, description } = values
  let errors = {} as {
    title: string
    description: string
  }
  if (!title) errors.title = 'Title is required'
  if (title && title.split(' ').length > 3)
    errors.title = 'Title cannot be more than three words e.g House Hold Electronics'
  if (!description) errors.description = 'Description is required'
  if (description && description.length > 301) errors.description = 'Description is it too long'
  return { errors, isError: Object.keys(errors).length > 0 }
}
