import api from '../../utils/api'

export default async function filterBookingRequests({
  page,
  limit,
  status,
}: {
  page: number
  limit: number
  status: 'booked' | 'pending'
}) {
  try {
    const res = await api.get(
      `/booking-requests/filter/${status}?page=${Number(page)}&limit=${Number(limit)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
