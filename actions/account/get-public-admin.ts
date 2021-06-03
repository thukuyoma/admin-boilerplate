import api from '../../utils/api'

export default async function getPublicAdmin(adminProfileToGet: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/accounts/public/${adminProfileToGet}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
