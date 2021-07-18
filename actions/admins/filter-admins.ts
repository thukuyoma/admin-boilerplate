import api from '../../utils/api'

export default async function filterAdmins({
  page,
  limit,
  status,
}: {
  page: number
  limit: number
  status: 'blocked' | 'active'
}) {
  try {
    const res = await api.get(
      `/admins/filter/${status}?page=${Number(page)}&&limit=${Number(limit)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
