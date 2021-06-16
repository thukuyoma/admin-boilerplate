import api from '../../utils/api'

export default async function publishBooking(bookingId: string) {
  try {
    const res = await api.put(`/bookings/${bookingId}/publish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
