/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getSupportTickets({ page, limit }: { page: number; limit: number }) {
  try {
    const res = await api.get(`/supports?limit=${Number(limit)}&page=${Number(page)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
