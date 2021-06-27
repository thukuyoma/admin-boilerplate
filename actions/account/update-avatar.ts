import api from '../../utils/api'

export default async function updateAvatar({ formData, setUploadPercentage }) {
  try {
    const progress = {
      onUploadProgress: async (progressEvent) => {
        const percentage = parseInt(
          `${Math.round((progressEvent.loaded * 100) / progressEvent.total)}`,
          10
        )
        setUploadPercentage(percentage)
        if (percentage === 100) {
          setUploadPercentage(0)
        }
      },
    }
    const res = await api.put(`/users/update-avatar`, formData, progress)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
