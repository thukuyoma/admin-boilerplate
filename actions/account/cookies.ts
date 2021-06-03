/* eslint-disable consistent-return */
import Cookies from 'js-cookie'

export function setCookie(key: string, value: string) {
  if (process.browser) {
    return Cookies.set(key, value, { expires: 7 })
  }
}

export function getCookie(key: string) {
  if (process.browser) {
    return Cookies.get(key)
  }
  return Cookies.get(key)
}

export function removeCookie(key: string) {
  if (process.browser) {
    return Cookies.remove(key)
  }
}
