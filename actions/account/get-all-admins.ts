import api from '../../utils/api'

export default async function getALlAdmins({ page, limit }) {
  try {
    const res = await api.get(`/admins?page=${Number(page)}&limit=${Number(limit)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
