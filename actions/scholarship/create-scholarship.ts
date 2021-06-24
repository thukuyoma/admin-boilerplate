/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function createScholarship(formData) {
  try {
    const res = await api.post('/scholarships', formData)
    const { data } = res
    return data.scholarshipId
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
