import api from '../../../utils/api'

export default async function paymentsCount() {
  try {
    const res = await api(`/payments/analytics/payments-count`)
    return res.data.paymentsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
