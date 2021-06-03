/* eslint-disable consistent-return */
import api from '../../../utils/api'

export default async function unPublishAdvert(advertId) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.put(`${baseUrl}/settings/adverts/unpublish/${advertId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
