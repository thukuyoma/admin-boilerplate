import api from '../../utils/api'

export default async function getTicketReplies({
  ticketId,
  page,
  limit,
}: {
  page: number
  limit: number
  ticketId: string
}) {
  try {
    const res = await api.get(
      `/supports/${ticketId}/replies?limit=${Number(limit)}&page=${Number(page)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
