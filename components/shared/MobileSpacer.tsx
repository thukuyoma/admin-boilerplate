import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  @media (max-width: 500px) {
    padding-top: 50px;
  }
`

export default function MobileSpacer({ children }) {
  return <Styles>{children}</Styles>
}
