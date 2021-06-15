import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 450px;
`
export default function Containerizer({ children }) {
  return <Styles>{children}</Styles>
}
