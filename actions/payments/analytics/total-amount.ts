import api from '../../../utils/api'

export default async function totalAmount() {
  try {
    const res = await api(`/payments/analytics/total`)
    return res.data.totalAmount
  } catch (err) {
    throw err.response.data.msg
  }
}
