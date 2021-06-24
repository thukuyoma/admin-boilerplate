import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    position: static;
    width: 177px;
    height: 39px;
    background: #0098db;
    border-radius: 3px;
    flex-grow: 0;
  }
`

export default function Analytics() {
  return (
    <Styles>
      <div></div>
      <button className="button">Create Product</button>
    </Styles>
  )
}
