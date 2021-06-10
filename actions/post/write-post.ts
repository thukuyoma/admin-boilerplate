/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function writePost(formData) {
  console.log('I got called here')
  try {
    const res = await api.post('/blogs', formData)
    console.log('Form data')
    const { data } = res
    return data
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
