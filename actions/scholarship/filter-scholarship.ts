import api from '../../utils/api'

export default async function filterScholarship({
  page,
  limit,
  status,
}: {
  page: number
  limit: number
  status: 'online' | 'offline'
}) {
  try {
    const res = await api.get(
      `/scholarships/filter/${status}?limit=${Number(limit)}&page=${Number(page)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
