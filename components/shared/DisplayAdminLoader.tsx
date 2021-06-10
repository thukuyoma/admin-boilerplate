import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 1px 0 0 #e2e5e8;
  padding: 30px 0;
  margin-bottom: 20px;
`

export default function DisplayAdminLoader({ message }: { message: string }) {
  return (
    <Styles>
      <Loader type="Oval" color="#00BFFF" height={30} width={30} />
      <p>{message}</p>
    </Styles>
  )
}
