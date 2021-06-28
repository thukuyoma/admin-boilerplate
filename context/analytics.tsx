import React, { useState, useEffect } from 'react'
// import { detect } from 'detect-browser'
import getDeviceDetails from '../actions/analytics/get-device-details'
import getUserLocation from '../actions/get-user-location'
import getWeatherData from '../actions/get-weather-data'

const AnalyticsContext = React.createContext(null)

export function useAnalytics() {
  return React.useContext(AnalyticsContext)
}

export default function AnalyticsProvider({ children }) {
  const [ip, setIp] = useState(null)
  const [weather, setWeather] = useState(null)
  const [device, setDevice] = useState(null)
  const [pageDetails, setPageDetails] = useState(null)

  const getIp = async () => {
    const ip = await getUserLocation()
    if (ip) {
      setIp(ip)
      //   const weather = await getWeatherData({ lat: ip.lat, log: ip.log })
      //   if (weather) {
      //     setWeather(weather)
      //   }
    }
  }

  useEffect(() => {
    getIp()
    const device = getDeviceDetails()
    if (device) {
      setDevice(device)
    }
  }, [])

  const recordPageVisit = async () => {
    console.log('We are recording page right now')
  }

  const recordEventTracker = async () => {
    console.log(
      'We are recording event tracker right now and am very happy and am sure ayou are happy'
    )
  }
  return (
    <AnalyticsContext.Provider
      value={{
        ip,
        pageDetails,
        device,
        weather,
        recordPageVisit,
        recordEventTracker,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}
