/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getAllBookings({ page, limit }: { page: number; limit: number }) {
  try {
    const limit = 10
    const res = await api.get(`/bookings?limit=${Number(limit)}&page=${Number(page)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
