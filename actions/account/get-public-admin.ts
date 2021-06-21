import api from '../../utils/api'

export default async function getPublicAdmin(adminProfileToGet: string) {
  try {
    const res = await api.get(`/admins/public-profile/${adminProfileToGet}`)
    const { admin } = res.data
    return admin
  } catch (err) {
    throw err.response.data.msg
  }
}
