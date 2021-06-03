import api from './api'

const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common.authorization = token
  } else {
    delete api.defaults.headers.common.authorization
  }
}

export default setAuthToken
