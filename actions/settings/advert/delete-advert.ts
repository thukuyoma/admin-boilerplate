/* eslint-disable consistent-return */
import api from '../../../utils/api'

export default async function deleteAdvert(advertId) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.delete(`${baseUrl}/settings/adverts/${advertId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
