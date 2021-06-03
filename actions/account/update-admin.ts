import api from '../../utils/api'

// eslint-disable-next-line consistent-return
export default async function updateAdmin({ email, formData }) {
  const baseUrl = process.env.BASE_URL
  try {
    const res = await api.put(`${baseUrl}/accounts/update/${email}`, formData)
    const { data } = res
    return data.profile
  } catch (err) {
    throw err.response.data.msg
  }
}
