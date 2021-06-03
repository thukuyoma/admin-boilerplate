import api from '../../utils/api'

export default async function getALlAdmins() {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/accounts/all-admins`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
