import api from '../../utils/api'

export default async function getAdminActiviesLog({ adminId, page, limit }) {
  try {
    const res = await api.get(`/admins/activities/${adminId}?page=${page}&limit=${limit}`)
    return res.data
  } catch (err) {
    if (err) {
      return err.response.data.msg
    }
  }
}
