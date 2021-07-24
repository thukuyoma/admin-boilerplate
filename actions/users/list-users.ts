import api from '../../utils/api'

export default async function listUsers({ page, limit }) {
  try {
    const res = await api.get(`/users?page=${Number(page)}&limit=${Number(limit)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
