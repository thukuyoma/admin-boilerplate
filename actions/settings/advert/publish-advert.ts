/* eslint-disable consistent-return */
import api from '../../../utils/api'

export default async function publishAdvert(advertId) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.put(`${baseUrl}/settings/adverts/publish/${advertId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
