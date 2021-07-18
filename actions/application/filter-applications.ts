import api from '../../utils/api'

export default async function filterApplications({
  page,
  limit,
  status,
}: {
  page: number
  limit: number
  status: 'applied' | 'pending'
}) {
  try {
    const res = await api.get(
      `/applications/filter/${status}?page=${Number(page)}&limit=${Number(limit)}`
    )
    return res.data
  } catch (err) {
    if (err) {
      return err.response.data.msg
    }
  }
}
