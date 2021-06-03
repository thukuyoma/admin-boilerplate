import api from '../utils/api'

export default async function getWeatherData({ lat, lon }: { lat: number; lon: number }) {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const res = await api(url)
    return res.data
  } catch (err) {
    return null
  }
}
