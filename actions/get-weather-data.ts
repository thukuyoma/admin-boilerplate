import api from '../utils/api'

export default async function getWeatherData({ lat, log }: { lat: number; log: number }) {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apiKey}&units=metric`
    const res = await api(url)
    return res.data
  } catch (err) {
    return null
  }
}
