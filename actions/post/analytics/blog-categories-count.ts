import api from '../../../utils/api'

export default async function blogCategoriesCount() {
  try {
    const res = await api(`/blogs/categories/analytics/blog-categories-count`)
    console.log({ blogCategoriesCount: res.data.blogCategoriesCount })
    return res.data.blogCategoriesCount
  } catch (err) {
    throw err.response.data.msg
  }
}
