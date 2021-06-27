import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import styled from 'styled-components'

const Styles = styled.div`
  .published__success {
    display: flex;
    color: #58c55d;
    align-items: center;
    font-size: 14px;
    .published__icon {
      margin-right: 5px;
      font-size: 20px;
    }
  }
`

export default function SuccessAlert({ message }: { message: string }) {
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false)
  useEffect(() => {
    setShowSuccessAlert(true)
    setInterval(() => {
      setShowSuccessAlert(false)
    }, 10000)
    return () => {
      clearInterval()
    }
  }, [message])
  return (
    <>
      {showSuccessAlert ? (
        <Styles>
          <p className="published__success">
            <AiOutlineCheckCircle className="published__icon" />
            {message}
          </p>
        </Styles>
      ) : null}
    </>
  )
}
