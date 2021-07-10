import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 423px;
  background: #fff;
  box-shadow: 0 1px 0 0 #e2e5e8;
  padding: 30px 0;
  .image-wrapper {
    height: 200px;
    width: 300px;
    position: relative;
  }
  p {
    font-size: 16px;
  }
`

export default function ServerError({ error }) {
  return (
    <Styles>
      <div className="image-wrapper">
        <Image src="/assets/server-error.png" layout="fill" />
      </div>
      <p>{error}</p>
    </Styles>
  )
}
