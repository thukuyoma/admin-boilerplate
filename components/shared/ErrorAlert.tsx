import React, { useState, useEffect } from 'react'
import DisplayInputError from '../forms/DisplayInputError'

export default function ErrorAlert({ error }) {
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false)
  useEffect(() => {
    setShowErrorAlert(true)
    setInterval(() => {
      setShowErrorAlert(false)
    }, 10000)
    return () => {
      clearInterval()
    }
  }, [error])
  return <>{showErrorAlert ? <DisplayInputError error={error} /> : null}</>
}
