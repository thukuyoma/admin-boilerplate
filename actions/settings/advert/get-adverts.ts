/* eslint-disable consistent-return */

import api from '../../../utils/api'

export default async function getAdverts(page) {
  try {
    const baseUrl = process.env.BASE_URL
    const limit = 5
    const res = await api(`${baseUrl}/settings/adverts?limit=${Number(limit)}&page=${Number(page)}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
