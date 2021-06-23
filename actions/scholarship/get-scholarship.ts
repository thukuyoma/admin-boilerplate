import api from '../../utils/api'

export default async function getScholarship(scholarshipId: string) {
  try {
    const res = await api(`/scholarships/${scholarshipId}`)
    const { scholarship } = res.data
    return scholarship
  } catch (err) {
    throw err.response.data.msg
  }
}
