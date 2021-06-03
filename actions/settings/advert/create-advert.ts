/* eslint-disable consistent-return */

import api from '../../../utils/api'

export default async function createAdvert(formData) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.post(`${baseUrl}/settings/adverts/create`, formData)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
