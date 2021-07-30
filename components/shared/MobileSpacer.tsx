import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  @media (max-width: 500px) {
    padding-top: 60px;
  }
`

export default function MobileSpacer({
  children,
  style,
}: {
  children: React.ReactNode
  style?: { paddingTop?: number }
}) {
  return <Styles style={style}>{children}</Styles>
}
