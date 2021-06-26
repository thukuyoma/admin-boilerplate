/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getSupportTicket(ticket) {
  try {
    const res = await api(`/supports/${ticket}`)
    const { supportTicket } = res.data
    return supportTicket
  } catch (err) {
    throw err.response.data.msg
  }
}
