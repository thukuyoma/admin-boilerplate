/* eslint-disable consistent-return */
import { useRouter } from 'next/router'
import React, { useState, useContext, useEffect } from 'react'
import { getCookie, removeCookie } from '../actions/account/cookies'
import getProfile from '../actions/account/get-profile'
import loginAdmin from '../actions/account/login-admin'
import setAuthToken from '../utils/set-auth-token'

const AuthContext = React.createContext(null)

const useAuth = () => useContext(AuthContext)
export default useAuth

export function AuthProvider({ children }) {
  const [profile, setProfile] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  const fetchProfile = async () => {
    const token = getCookie('authToken')
    if (token) {
      setAuthToken(token)
      const user = await getProfile()
      if (!user) {
        return setProfile(null)
      }
      setProfile({ ...user })
      setIsLoading(false)
      return null
    }
    return null
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  useEffect(() => {
    if (!profile && !isLoading) {
      router.push('/')
    }
  }, [profile, isLoading])

  const login = async (credentials) => {
    const user = await loginAdmin(credentials)
    if (user) {
      const token = getCookie('authToken')
      setAuthToken(token)
      setProfile({ ...user })
      setIsLoading(false)
      return null
    }
    return user
  }

  const logout = () => {
    setProfile(null)
    setAuthToken()
    removeCookie('authToken')
    router.push('/')
    return null
  }

  const refreshProfile = () => {
    fetchProfile()
  }

  return (
    <AuthContext.Provider
      value={{
        profile,
        isAuthenticated: !!profile,
        isLoading,
        setProfile,
        login,
        logout,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function ProtectRoute({ children }) {
  const { isAuthenticated, profile, isLoading } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!profile && !isLoading && !isAuthenticated && router.pathname === '/profile') {
      router.push('/')
    }
  }, [isAuthenticated, profile, isLoading, router])
  if (!profile && !isLoading && !isAuthenticated && router.pathname === '/profile')
    return 'IS loading'

  return children
}
