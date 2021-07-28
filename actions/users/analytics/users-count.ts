import api from '../../../utils/api'

export default async function usersCount() {
  try {
    const res = await api(`/users/analytics/users-count`)
    return res.data.usersCount
  } catch (err) {
    throw err.response.data.msg
  }
}
