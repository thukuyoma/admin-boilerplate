import { useState, useEffect } from 'react'

export default function useLocalStorage(key: string, initialState: unknown) {
  const [values, setValues] = useState<unknown>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem(key))
    }
    return initialState
  })

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(initialState))
  }, [initialState])

  return [values, setValues]
}
