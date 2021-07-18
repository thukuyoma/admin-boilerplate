import api from '../../utils/api'

export default async function togglePublishScholarship(scholarshipId: string) {
  try {
    const res = await api.put(`/scholarships/${scholarshipId}/toggle-publish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
