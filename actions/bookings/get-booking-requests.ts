/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getBookingRequests({ page, limit }: { page: number; limit: number }) {
  try {
    const res = await api.get(`/booking-requests?limit=${Number(limit)}&page=${Number(page)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
