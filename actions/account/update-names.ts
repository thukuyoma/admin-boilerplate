import api from '../../utils/api'

export default async function updateNames({ lastName, firstName }) {
  try {
    const res = await api.put(`/users/change-names`, { lastName, firstName })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
