import api from '../../utils/api'

export default async function createAdmin(formData) {
  try {
    const res = await api.post('/admins/create', formData)
    return res.data.adminId
  } catch (err) {
    throw err.response.data.msg
  }
}
