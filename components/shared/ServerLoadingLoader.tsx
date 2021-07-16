import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 423px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 30px 0;
  margin-bottom: 20px;
  .loading__image {
    height: 100px;
  }
  p {
    font-size: 12px;
  }
`

export default function LoadingState({ message }: { message: string }) {
  return (
    <Styles>
      <img src="/assets/loading.gif" className="loading__image" />
      <p>{message}...</p>
    </Styles>
  )
}
