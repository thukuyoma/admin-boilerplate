import api from '../../utils/api'

export default async function replyTicket({
  message,
  ticketId,
}: {
  message: string
  ticketId: string
}) {
  try {
    const res = await api.post(`/supports/admin/${ticketId}`, { message })
    return res.data.msg
  } catch (err) {
    if (err) {
      return err.response.data.msg
    }
  }
}
