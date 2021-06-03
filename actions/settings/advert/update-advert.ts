/* eslint-disable consistent-return */

import api from '../../../utils/api'

export default async function updateAdvert({ advertId, formData }) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.put(`${baseUrl}/settings/adverts/${advertId}`, formData)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
