import api from '../../utils/api'

export default async function getUserLocation() {
  try {
    const res = await api('https://extreme-ip-lookup.com/json/')
    const {
      city,
      continent,
      country,
      countryCode,
      lat: latitude,
      lon: longitude,
      query: ipAddress,
      region,
    } = res.data
    const analytics = {
      city,
      continent,
      country,
      countryCode,
      latitude,
      longitude,
      ipAddress,
      region,
    }
    return analytics
  } catch (err) {
    return null
  }
}
