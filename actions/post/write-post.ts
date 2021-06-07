/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function writePost(formData) {
  try {
    const res = await api.post('/posts/write', formData)
    const { data } = res
    return data
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
