import config from '../../config/config'
import axios from 'axios'

export default async function fileUploader({ formData, setUploadPercentage }) {
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
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${config.cloudinary.cloudName}/image/upload`,
      formData,
      progress
    )
    const { public_id, secure_url } = res.data
    return { url: secure_url, publicId: public_id }
  } catch (err) {
    throw err.response.data.msg
  }
}
