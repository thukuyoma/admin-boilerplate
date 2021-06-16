import api from '../../utils/api'

export default async function unPublishBooking(bookingId: string) {
  try {
    const res = await api.put(`/bookings/${bookingId}/unpublish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
