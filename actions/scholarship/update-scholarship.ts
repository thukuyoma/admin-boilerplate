/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function updateScholarship({ scholarshipId, formData }) {
  try {
    const res = await api.put(`/scholarships/${scholarshipId}`, formData)
    const { data } = res
    return data.scholarshipId
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
