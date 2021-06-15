/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function writePost(formData) {
  try {
    const res = await api.post('/blogs', formData)
    const { data } = res
    return data.postSlug
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
