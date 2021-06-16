import api from '../../utils/api'

export default async function deleteBooking(bookingId: string) {
  try {
    const res = await api.delete(`/bookings/${bookingId}`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
