import axios from 'axios'
import config from '../config/config'

const api = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ' *',
  },
})

export default api
