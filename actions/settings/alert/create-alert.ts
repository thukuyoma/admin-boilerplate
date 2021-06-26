import api from '../../../utils/api'

export default async function createAlert(formData) {
  try {
    const res = await api.post('/alerts', formData)
    const { msg } = res.data
    return msg
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
