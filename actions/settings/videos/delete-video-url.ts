/* eslint-disable consistent-return */

import api from '../../../utils/api'

export default async function deleteVideoUrl(urlId) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.delete(`${baseUrl}/settings/videos/${urlId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
