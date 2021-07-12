import api from '../../utils/api'

export default async function deleteCloudFile(assetId: string) {
  try {
    const res = await api.put('/custom/delete-cloud-asset', { assetId })
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
