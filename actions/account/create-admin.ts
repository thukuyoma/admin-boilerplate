import api from '../../utils/api'

// eslint-disable-next-line consistent-return
export default async function createAdmin(formData) {
  const baseUrl = process.env.BASE_URL
  try {
    const res = await api.post(`${baseUrl}/accounts/create`, formData)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
