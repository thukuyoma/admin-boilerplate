import api from '../../../utils/api'

export default async function getCategories({ page, limit }: { page: number; limit: number }) {
  try {
    const res = await api.get(
      `/blogs/categories/all/all?page=${Number(page)}&limit=${Number(limit)}`
    )
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
