/* eslint-disable consistent-return */

import api from '../../utils/api'
import getSections from './getSections'

export default async function updateSection({ sectionNumber, category }) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.post(`${baseUrl}/settings/sections/${sectionNumber}`, {
      category,
    })
    if (res.data) {
      const sections = await getSections()
      return sections
    }
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
