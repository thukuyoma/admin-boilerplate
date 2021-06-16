/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getBookingDetails(bookingId) {
  try {
    const res = await api(`/bookings/${bookingId}`)
    const { data } = res
    return data.booking
  } catch (err) {
    throw err.response.data.msg
  }
}
