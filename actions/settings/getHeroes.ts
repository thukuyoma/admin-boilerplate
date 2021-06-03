/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function getHeroes() {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/settings/heroes`)
    const { data } = res
    return data
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
