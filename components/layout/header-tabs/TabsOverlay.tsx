import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  position: absolute;
  background-color: #f3f8fe;
  width: 362px;
  height: 100vh;
  top: 60px;
  right: 0;
  padding: 30px 20px 20px 20px;

  @media (max-width: 500px) {
    width: 100%;
    top: 75px;
  }
`

export default function TabsOverlay({ children }) {
  return <Styles>{children}</Styles>
}
