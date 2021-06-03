import api from '../utils/api'
import getWeatherData from './get-weather-data'

export default async function getUserLocation() {
  try {
    const ipLocation = await api('https://extreme-ip-lookup.com/json/')
    const {
      city,
      continent,
      country,
      countryCode,
      isp,
      lat,
      lon,
      query: ipAddress,
      region,
    } = ipLocation.data
    const ipWeather = await getWeatherData({ lat, lon })
    const res = {
      location: { city, continent, country, countryCode, isp, lat, lon, ipAddress, region },
      weather: ipWeather,
    }
    return res
  } catch (err) {
    if (err) console.error('falied to get user location')
    return null
  }
}
