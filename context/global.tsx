import React, { useState, useContext } from 'react'

const GlobalStateContext = React.createContext(null)

const useGlobalState = () => useContext(GlobalStateContext)
export default useGlobalState

export function GlobalStateProvider({ children }) {
  const [notificationCount, setNotificationCount] = useState(0)

  return (
    <GlobalStateContext.Provider value={{ notificationCount, setNotificationCount }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
