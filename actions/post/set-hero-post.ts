import api from '../../utils/api'

export default async function setHeroPost({ heroType, postSlug }) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.post(`${baseUrl}/settings/hero/${postSlug}`, { heroType })
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
