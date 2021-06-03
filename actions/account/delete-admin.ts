import api from '../../utils/api'

export default async function deleteAdmin(email: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.delete(`${baseUrl}/accounts/${email}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
