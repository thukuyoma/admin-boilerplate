import React from 'react'
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
  return (
    <Styles>
      <p className="published__success">
        <AiOutlineCheckCircle className="published__icon" />
        {message}
      </p>
    </Styles>
  )
}
