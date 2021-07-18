import api from '../../../utils/api'

export default async function filterBlogs({
  page,
  limit,
  status,
}: {
  page: number
  limit: number
  status: 'online' | 'offline'
}) {
  try {
    const res = await api.get(`/blogs/filter/${status}?page=${Number(page)}&limit=${Number(limit)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
