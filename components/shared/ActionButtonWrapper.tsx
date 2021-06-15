import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  background: #fdf5ed;
  border-radius: 50px;
  margin: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: fit-content;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #0c4284;
  cursor: pointer;
  white-space: nowrap;
  :hover {
    font-weight: bold;
  }
  button {
    white-space: nowrap;
    :hover {
      font-weight: bold;
    }
  }

  @media (max-width: 1000px) {
    margin: 0;
    margin-right: 10px;
    margin-bottom: 20px;
  }
`
export default function ActionButtonWrapper({ children }) {
  return <Styles>{children}</Styles>
}
