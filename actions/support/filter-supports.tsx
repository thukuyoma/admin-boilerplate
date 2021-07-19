import api from '../../utils/api'

export default async function filterSupports({
  page,
  limit,
  status,
}: {
  page: number
  limit: number
  status: 'open' | 'closed'
}) {
  try {
    const res = await api.get(
      `/supports/filter/${status}?page=${Number(page)}&limit=${Number(limit)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
