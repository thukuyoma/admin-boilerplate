import api from '../../utils/api'

export default async function togglePublish(bookingId: string) {
  try {
    const res = await api.put(`/bookings/${bookingId}/toggle-publish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
