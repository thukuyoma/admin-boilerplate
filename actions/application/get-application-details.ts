/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getApplicationsDetails(applicationId) {
  try {
    const res = await api(`/applications/${applicationId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
