import api from '../../utils/api'

export default async function deleteScholarship(scholarshipId: string) {
  try {
    const res = await api.delete(`/scholarships/${scholarshipId}`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
