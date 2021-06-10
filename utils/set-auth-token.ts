import api from './api'

const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common.authToken = token
  } else {
    delete api.defaults.headers.common.authToken
  }
}

export default setAuthToken
