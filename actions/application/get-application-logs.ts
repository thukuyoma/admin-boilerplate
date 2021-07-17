import api from '../../utils/api'

export default async function getApplicationLogs({
  applicationId,
  page,
  limit,
}: {
  page: number
  limit: number
  applicationId: string
}) {
  try {
    const res = await api.get(
      `/applications/logs/${applicationId}?limit=${Number(limit)}&page=${Number(page)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
