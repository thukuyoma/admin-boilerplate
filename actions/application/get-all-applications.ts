import api from '../../utils/api'

export default async function getAllApplications({ page, limit }: { page: number; limit: number }) {
  try {
    const res = await api.get(`/applications?page=${Number(page)}&limit=${Number(limit)}`)
    return res.data
  } catch (err) {
    if (err) {
      return err.response.data.msg
    }
  }
}
