/* eslint-disable consistent-return */

import api from '../../../utils/api'

export default async function getAdvertDetails(slug) {
  try {
    const clientBaseUrl = process.env.BASE_URL
    const res = await api(`${clientBaseUrl}/settings/adverts/${slug}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
