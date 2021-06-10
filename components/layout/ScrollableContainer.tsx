import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  overflow-y: scroll;
  padding-right: 20px;
  padding-left: 2px;
  max-height: 423px;
  @media (max-width: 500px) {
    height: 100%;
    overflow-y: unset;
    padding-right: 0;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`
export default function ScrollableContainer({ children }) {
  return <Styles>{children}</Styles>
}
